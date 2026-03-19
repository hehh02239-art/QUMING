require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Store webhook events and user preferences in memory
let webhookEvents = [];
let favoritesCities = ['London', 'New York', 'Tokyo'];
let userTheme = 'light';

// ==================== ADVANCED AJAX ENDPOINTS ====================

/**
 * GET /api/weather?city=London
 * Fetches comprehensive weather data including advanced metrics
 */
app.get('/api/weather', async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!city) {
      return res.status(400).json({ error: 'City parameter required' });
    }

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Get current weather and advanced data
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const weatherData = {
      // Basic info
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: {
        lat: response.data.coord.lat,
        lon: response.data.coord.lon
      },
      
      // Current weather
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      main: response.data.weather[0].main,
      
      // Wind data
      windSpeed: response.data.wind.speed,
      windDegree: response.data.wind.deg,
      
      // Advanced metrics
      cloudiness: response.data.clouds.all,
      visibility: response.data.visibility,
      uvIndex: response.data.uvi || null,
      dewPoint: response.data.main.temp - ((100 - response.data.main.humidity) / 5),
      
      // Sunrise/Sunset
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      
      timestamp: new Date().toISOString()
    };

    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'Failed to fetch weather data'
    });
  }
});

/**
 * GET /api/forecast?city=London
 * Fetches 5-day forecast data
 */
app.get('/api/forecast', async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!city) {
      return res.status(400).json({ error: 'City parameter required' });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );

    const forecasts = response.data.list.map(item => ({
      timestamp: new Date(item.dt * 1000).toISOString(),
      temperature: item.main.temp,
      feelsLike: item.main.feels_like,
      tempMin: item.main.temp_min,
      tempMax: item.main.temp_max,
      humidity: item.main.humidity,
      pressure: item.main.pressure,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
      windSpeed: item.wind.speed,
      cloudiness: item.clouds.all,
      rainProbability: item.pop ? item.pop * 100 : 0,
      rain: item.rain ? item.rain['3h'] : 0
    }));

    res.json({
      city: response.data.city.name,
      country: response.data.city.country,
      forecasts: forecasts
    });
  } catch (error) {
    console.error('Forecast API error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'Failed to fetch forecast data'
    });
  }
});

/**
 * GET /api/hourly?city=London
 * Fetches hourly forecast data
 */
app.get('/api/hourly', async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!city) {
      return res.status(400).json({ error: 'City parameter required' });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );

    // Get next 24 hours of data
    const hourlyData = response.data.list.slice(0, 8).map(item => ({
      time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: new Date(item.dt * 1000).toISOString(),
      temperature: item.main.temp,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
      windSpeed: item.wind.speed,
      humidity: item.main.humidity,
      rainProbability: item.pop ? item.pop * 100 : 0
    }));

    res.json({
      city: response.data.city.name,
      hourly: hourlyData
    });
  } catch (error) {
    console.error('Hourly API error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'Failed to fetch hourly data'
    });
  }
});

/**
 * GET /api/multiple-cities?cities=London,Tokyo,NewYork
 * Compare multiple cities
 */
app.get('/api/multiple-cities', async (req, res) => {
  try {
    const cities = req.query.cities ? req.query.cities.split(',') : favoritesCities;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const citiesData = await Promise.all(
      cities.map(async (city) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          );
          return {
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed
          };
        } catch (err) {
          return { city, error: 'Failed to fetch' };
        }
      })
    );

    res.json(citiesData);
  } catch (error) {
    console.error('Multiple cities error:', error.message);
    res.status(500).json({ error: 'Failed to fetch cities data' });
  }
});

/**
 * GET /api/favorites
 * Get favorite cities
 */
app.get('/api/favorites', (req, res) => {
  res.json({ favorites: favoritesCities });
});

/**
 * POST /api/favorites
 * Add favorite city
 */
app.post('/api/favorites', (req, res) => {
  const { city } = req.body;
  if (city && !favoritesCities.includes(city)) {
    favoritesCities.push(city);
  }
  res.json({ favorites: favoritesCities });
});

/**
 * DELETE /api/favorites/:city
 * Remove favorite city
 */
app.delete('/api/favorites/:city', (req, res) => {
  const { city } = req.params;
  favoritesCities = favoritesCities.filter(c => c !== city);
  res.json({ favorites: favoritesCities });
});

// ==================== WEBHOOK ENDPOINTS ====================

/**
 * POST /webhook/weather
 * Receives webhook data from external services
 */
app.post('/webhook/weather', (req, res) => {
  const event = {
    id: webhookEvents.length + 1,
    timestamp: new Date().toISOString(),
    data: req.body
  };

  webhookEvents.push(event);
  console.log('Webhook received:', event);

  // Return success response
  res.status(200).json({
    success: true,
    message: 'Webhook received successfully',
    eventId: event.id
  });
});

/**
 * GET /webhook/events
 * Retrieve all webhook events received
 */
app.get('/webhook/events', (req, res) => {
  res.json({
    total: webhookEvents.length,
    events: webhookEvents
  });
});

/**
 * DELETE /webhook/events
 * Clear all webhook events
 */
app.delete('/webhook/events', (req, res) => {
  const count = webhookEvents.length;
  webhookEvents = [];
  console.log(`Cleared ${count} webhook events`);
  res.json({
    success: true,
    message: `Cleared ${count} events`,
    clearedCount: count
  });
});

/**
 * POST /webhook/test
 * Test webhook endpoint - used for testing
 */
app.post('/webhook/test', (req, res) => {
  const event = {
    id: webhookEvents.length + 1,
    timestamp: new Date().toISOString(),
    data: req.body
  };

  webhookEvents.push(event);
  console.log('Test webhook event:', event);

  res.json({
    success: true,
    message: 'Test webhook received',
    eventId: event.id,
    receivedData: req.body
  });
});

// ==================== HELPER ENDPOINTS ====================

/**
 * GET /api/status
 * Check server status
 */
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    apiKeyConfigured: !!process.env.OPENWEATHER_API_KEY,
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /
 * Serve index.html
 */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   Weather AJAX + Webhook Lab Server   ║
  ║   Running on http://localhost:${PORT}       ║
  ╚════════════════════════════════════════╝
  `);
  console.log(`API Key configured: ${!!process.env.OPENWEATHER_API_KEY}`);
});
