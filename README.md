# WeatherPro - Weather Dashboard

A professional weather application with AJAX and webhook integration.

## 📁 Project Structure

```
IPT-Lab1/
├── server.js                 # Express server and API endpoints
├── package.json             # Project dependencies
├── .env                     # Environment variables (local)
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── public/
    ├── index.html          # Main HTML file
    ├── css/
    │   └── styles.css      # Styling
    └── js/
        └── script.js       # Frontend JavaScript
```

## 🚀 Quick Start

### 1. Setup Environment
```bash
# Copy environment template
cp .env.example .env

# Add your OpenWeatherMap API key to .env
OPENWEATHER_API_KEY=your_api_key_here
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Server
```bash
npm start
```

Server runs on **http://localhost:3000**

## 🌐 API Endpoints

- `GET /api/weather?city=London` - Current weather data
- `GET /api/forecast?city=London` - 5-day forecast
- `GET /api/hourly?city=London` - Hourly forecast (next 24 hours)
- `GET /api/multiple-cities?cities=London,Tokyo,NewYork` - Compare multiple cities
- `POST /webhook/weather` - Receive webhook events
- `GET /webhook/events` - Get all webhook events

## 🔧 Features

✅ Real-time weather data from OpenWeatherMap API  
✅ AJAX requests for dynamic data loading  
✅ Webhook integration for event handling  
✅ Professional dark theme UI  
✅ Responsive design  
✅ Interactive weather maps  
✅ Temperature charts and forecasts  

## 📝 Environment Variables

Create `.env` file with:
```
OPENWEATHER_API_KEY=your_key_here
PORT=3000
```

## 🔌 Get OpenWeatherMap API Key

1. Visit https://openweathermap.org/api
2. Sign up for free account
3. Get your API key from dashboard
4. Add to `.env` file

## 📦 Technologies

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript
- **APIs**: OpenWeatherMap, Webhooks
- **Libraries**: Axios, CORS, dotenv

## 👤 Author

Created for IPT Lab 1

## 📄 License

MIT
