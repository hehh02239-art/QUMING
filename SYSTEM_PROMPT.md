# Professional Weather Dashboard - Complete System Prompt

## PROJECT OVERVIEW
Create a professional, fully-functional weather dashboard application that fetches real-time weather data from the OpenWeatherMap API and displays it with an interactive, modern interface. The system demonstrates AJAX functionality and webhook integration.

---

## 1. DESIGN SYSTEM

### Color Palette & Theming
**Dark Theme (Primary):**
- Background Primary: `#1a1a1a` (deep black)
- Background Secondary: `#2d2d2d` (dark gray)
- Background Tertiary: `#3f3f3f` (medium gray)
- Text Primary: `#f0f0f0` (light white)
- Text Secondary: `#b0b0b0` (medium gray)
- Text Tertiary: `#808080` (darker gray)
- Accent Primary: `#4d9eff` (bright blue)
- Accent Secondary: `#ffb366` (orange)
- Success: `#10b981` (green)
- Danger: `#ef4444` (red)
- Warning: `#f59e0b` (amber)

**Shadows:**
- Small: `0 2px 4px rgba(0, 0, 0, 0.3)`
- Medium: `0 4px 12px rgba(0, 0, 0, 0.4)`
- Large: `0 8px 24px rgba(0, 0, 0, 0.5)`

**Gradients:**
- Primary: `linear-gradient(135deg, #4d9eff 0%, #0052cc 100%)`
- Accent: `linear-gradient(135deg, #ffb366 0%, #ff7f00 100%)`

### Typography
- Font Family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- Base Font Size: `16px`
- Line Height: `1.6`

---

## 2. LAYOUT & GRID SYSTEM

### Container
- Max Width: `1200px`
- Centered with `margin: 0 auto`
- Padding: `0 20px`

### Main Content Area
- Padding: `40px 20px`

### Grid Layouts
- **Favorites Grid:** `repeat(auto-fill, minmax(140px, 1fr))`
- **Detail Cards Grid:** `repeat(auto-fit, minmax(200px, 1fr))`
- **Hourly Grid:** `repeat(auto-fill, minmax(100px, 1fr))`
- **Forecast Grid:** `repeat(auto-fit, minmax(160px, 1fr))`
- **Cities Comparison Grid:** `repeat(auto-fit, minmax(200px, 1fr))`

---

## 3. COMPONENTS & SECTIONS

### 3.1 Navigation Bar (Sticky Header)
**Structure:**
- Logo: "🌤️ WeatherPro" (1.5em, weight 700)
- Navigation Controls: Refresh button (🔄)
- Sticky positioning at top with z-index 100
- Box shadow medium on bottom

**Styling:**
- Background: var(--bg-primary)
- Box Shadow: var(--shadow-md)
- Padding: 20px 0
- Position: sticky

### 3.2 Search Section
**Layout:**
- Search input field and button in flexbox row
- Gap between: 10px

**Search Input:**
- Placeholder: "Search for a city..."
- Padding: 12px 16px
- Border: 2px solid var(--border-color)
- Border Radius: 8px
- Flex: 1 (takes available space)
- Focus Border Color: var(--accent-primary)
- Transition: 0.3s

**Search Button:**
- Class: btn btn-primary
- Padding: 12px 24px
- Trigger: Click or Enter key
- Autocomplete: "off"

**Container Styling:**
- Background: var(--bg-primary)
- Padding: 25px
- Border Radius: 12px
- Box Shadow: var(--shadow-md)
- Margin Bottom: 30px

### 3.3 Favorites Section
**Purpose:** Display pre-configured favorite cities: London, New York, Tokyo

**Structure:**
- Grid of favorite city buttons
- Each showing city name

**Favorite Button Styling:**
- Base: bg-secondary, 2px border
- Padding: 15px
- Border Radius: 10px
- Color: var(--text-primary)
- Hover: border-color changes to accent-primary, slight lift (translateY -2px)
- Active State: gradient-primary background, white text

**Section Styling:**
- Background: var(--bg-primary)
- Padding: 25px
- Margin Bottom: 30px
- Border Radius: 12px
- Box Shadow: var(--shadow-md)

### 3.4 Weather Hero Section (MSN Style)
**Purpose:** Display current weather with prominent temperature and conditions

**Hero Top Layout:**
- Flex layout with space-between alignment
- Hero Left (flex: 1): City info + weather icon + temperature
- Hero Right: "Add to Favorites" button

**Hero Left Structure:**
- City Info Section:
  - City Name: 2.2em, weight 700
  - Country: 1.1em, opacity 0.95
  
- Current Temp Display (flex, gap 25px):
  - Weather Icon: 140px × 140px with drop shadow
  - Temperature Display:
    - Temperature Number: 4em, weight 700
    - Unit (°C): 2em, weight 300
    - Description: 1.3em, weight 500

**Hero Conditions Row:**
- Grid: `repeat(auto-fit, minmax(180px, 1fr))`
- Border Top: 2px solid rgba(255,255,255,0.2)
- Each Condition Card:
  - Background: rgba(255,255,255,0.15) with backdrop-filter blur(10px)
  - Padding: 20px
  - Border Radius: 12px
  - Border: 1px solid rgba(255,255,255,0.2)
  - Center text alignment
  - Value: 2em, weight 700
  - Label: 0.95em, opacity 0.95
  - Reason (italic): 0.85em, opacity 0.85

**Hero Container Styling:**
- Background: `linear-gradient(135deg, #4d9eff 0%, #0052cc 100%)`
- Color: white
- Padding: 40px
- Border Radius: 16px
- Box Shadow: var(--shadow-lg)
- Margin Bottom: 40px
- Animation: slideIn 0.4s ease-out

**Displays:**
- Temperature (large, centered)
- Weather description
- Feels Like temperature with reason
- Humidity percentage
- Wind speed
- Cloud coverage
- Visibility
- Pressure
- Dew Point
- Sunrise/Sunset times
- UV Index

### 3.5 Location Map Section
**Purpose:** Interactive map showing weather location with coordinates

**Map Container:**
- Flex layout, gap 25px
- Weather Map:
  - Flex: 1, min-width 300px
  - Height: 400px
  - Border: 2px solid var(--border-color)
  - Border Radius: 12px
  - Overflow: hidden

**Leaflet Map Styling:**
- Tile Brightness Filter: brightness(0.85)
- Dark background: #3f3f3f
- Control buttons styled with accent colors
- Popup: dark background with accent-primary border

**Location Info Cards:**
- Flex column, gap 15px
- 4 cards displayed:
  - Latitude (🌐)
  - Longitude (🌐)
  - Coordinates (📌)
  - View Google Maps Button
  
- Card Styling:
  - Background: var(--bg-secondary)
  - Padding: 20px
  - Border: 2px solid var(--border-color)
  - Border Radius: 10px
  - Display: flex with icon on left
  - Hover: border-color to accent-primary, translateX 4px

### 3.6 Detail Cards Section
**Purpose:** Display advanced weather metrics

**Grid Layout:** `repeat(auto-fit, minmax(200px, 1fr))`

**Each Detail Card Contains:**
- Label: uppercase, 0.9em, text-secondary
- Value: 1.8em, weight 700, text-primary
- Description (italic): 0.85em, text-secondary

**Card Styling:**
- Background: var(--bg-secondary)
- Padding: 20px
- Border: 1px solid var(--border-color)
- Border Radius: 12px
- Hover: translateY -4px, shadow increase, border-color to accent-primary

**Metrics Displayed:**
- Visibility (with status description)
- Pressure (with status description)
- Dew Point
- Sunrise Time
- Sunset Time
- UV Index (with status description)

### 3.7 Hourly Forecast Section
**Purpose:** 24-hour weather forecast with hourly breakdown

**Grid Layout:** `repeat(auto-fill, minmax(100px, 1fr))`

**Each Hourly Item:**
- Background: var(--bg-secondary)
- Padding: 15px
- Border: 1px solid var(--border-color)
- Border Radius: 10px
- Text Align: center
- Hover: translateY -4px, border-color to accent-primary

**Content:**
- Time: 0.9em, weight 600
- Weather Icon: 2em (emoji or image)
- Temperature: 1.3em, weight 700
- Description: 0.8em, text-secondary

**Count:** Next 24 hours, displayed in hourly increments

### 3.8 5-Day Forecast Section
**Purpose:** 5-day weather forecast with temperature trend chart and detailed daily breakdown

**Chart Container:**
- Background: var(--bg-secondary)
- Padding: 20px
- Border: 1px solid var(--border-color)
- Height: 350px
- Border Radius: 12px
- Uses Chart.js for temperature trend visualization

**Forecast Grid:** `repeat(auto-fit, minmax(160px, 1fr))`

**Each Forecast Item:**
- Background: var(--bg-secondary)
- Padding: 20px
- Border: 1px solid var(--border-color)
- Border Radius: 10px
- Hover: translateY -4px, border-color to accent-primary

**Content:**
- Date: 0.95em, weight 600
- Weather Icon: 2.5em (emoji or image)
- Condition: 0.9em, text-secondary
- High Temp: weight 700, text-primary, 1.1em
- Low Temp: text-secondary, 1em

### 3.9 Cities Comparison Section
**Purpose:** Side-by-side comparison of weather in multiple cities

**Grid Layout:** `repeat(auto-fit, minmax(200px, 1fr))`

**City Card Layout:**
- Background: linear-gradient(135deg, accent-primary → darker blue)
- Color: white
- Padding: 25px
- Border Radius: 12px
- Text Align: center
- Hover: translateY -6px, box-shadow increase

**Content:**
- City Name: 1.3em, weight 700
- Country: 0.95em, opacity 0.9
- Temperature: 2.2em, weight 700
- Condition: 0.95em, opacity 0.95
- Cursor: pointer (clickable)

**Pre-configured Cities:** London, New York, Tokyo

### 3.10 Webhook Events Section
**Purpose:** Display webhook event log and testing interface

**Webhook Controls:**
- Flexbox layout, gap 10px
- Buttons: Test Webhook, Refresh, Clear All
- Wrap on smaller screens

**Event List:**
- Flex column, gap 15px
- Max Height: 400px
- Overflow-y: auto (scrollable)

**Webhook Event Item:**
- Background: var(--bg-secondary)
- Padding: 15px
- Border Radius: 10px
- Border Left: 4px solid var(--accent-primary)
- Hover: translateX 4px

**Event Header:**
- Flex between, space-between
- Padding Bottom: 8px
- Border Bottom: 1px solid var(--border-color)

**Event Badge:**
- Background: var(--accent-primary)
- Color: white
- Padding: 4px 12px
- Border Radius: 20px
- Font Size: 0.85em, weight 600

**Event Time:**
- Font Size: 0.85em
- Color: text-secondary
- Weight: 500

**Event Details:**
- Flex column, gap 8px
- Each detail row: flex between, padding 6px 0
- Label: weight 600, text-secondary, 0.9em uppercase
- Value: text-primary, weight 500, 0.95em

**Empty State:**
- "No events recorded"
- Center text, italic
- Padding: 30px
- Text Secondary color

---

## 4. ANIMATIONS

### Slide In Animation
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 0.4s ease-out
Applied to: Weather Hero, Map, Detail Cards, Forecast, Comparison, Webhook sections
```

### Fade In Animation
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
Duration: 0.2s ease-out
Applied to: Loading modal
```

### Button Interactions
- **Hover Effect:** translateY(-2px) with box-shadow increase
- **Secondary Buttons:** Border color changes to accent-primary on hover
- **Transition Duration:** 0.3s ease for all button interactions

### Card Interactions
- **Hover:** All cards translateY(-4px) with shadow increase
- **Border Highlight:** Border color changes to accent-primary on hover
- **Transition:** 0.3s ease

### Text Interactions
- **Link-like Elements:** Scale(1.1) on hover with 0.2s transition

### Loading Indicator
- **Spinner:** Rotating animation
- **Modal:** fadeIn animation 0.2s ease-out
- **Backdrop:** Semi-transparent (rgba(0,0,0,0.5))

---

## 5. RESPONSIVE DESIGN

### Breakpoints & Adjustments
- **Base:** 1200px max container width
- **Padding:** 20px horizontal, 40px vertical on main content
- **Medium Screens:** Flex wrapping on hero section
- **Small Screens:** Grid adjusts to single/dual columns

### Responsive Behavior
- Search Section: Full width, responsive button
- Hero Section: Wraps on smaller screens (flex-wrap: wrap)
- Grid Layouts: auto-fill/auto-fit for flexible columns
- Map Section: Flexbox with wrap, map and info stack on small screens
- Hourly/Forecast Grid: Adjusts column count based on screen width

---

## 6. FRONTEND FUNCTIONALITY (JavaScript)

### Global Variables
- `tempChart`: Chart.js instance for 5-day temperature trend
- `weatherMap`: Leaflet map instance
- `mapMarker`: Current location marker
- `currentCoordinates`: Latitude/Longitude object

### DOM Elements
```javascript
// Inputs & Buttons
- cityInput (#cityInput)
- searchBtn (#searchBtn)
- refreshBtn (#refreshBtn)
- testWebhookBtn (#testWebhookBtn)
- refreshWebhooksBtn (#refreshWebhooksBtn)
- clearWebhooksBtn (#clearWebhooksBtn)

// Display Sections
- errorMessage (#errorMessage)
- loadingModal (#loadingModal)
- webhookList (#webhookList)
- viewGoogleMapsBtn (#viewGoogleMapsBtn)
```

### Key Functions

**1. searchWeather()**
- Gets city input value
- Shows loading state
- Fetches:
  - `/api/weather?city={city}` - current weather
  - `/api/hourly?city={city}` - next 24 hours
  - `/api/forecast?city={city}` - 5-day forecast
- Calls displayFunctions for each data type
- Error handling with user feedback

**2. displayCurrentWeather(data)**
- Populates hero section with:
  - City name & country
  - Large temperature (4em)
  - Weather description
  - Weather icon
  - Feels like temperature with reason
  - Humidity, wind, cloud cover
  - Visibility, pressure, dew point
  - Sunrise, sunset, UV index
- Shows/reveals hero section

**3. displayLocationMap(data)**
- Initializes Leaflet map if not exists
- Centers on coordinates (lat/lon)
- Adds marker at location
- Sets zoom level
- Populates latitude, longitude, coordinates info cards
- Shows/reveals map section

**4. displayHourlyForecast(data)**
- Creates grid of hourly items
- For next 24 hours, displays:
  - Time (HH:MM format)
  - Weather icon
  - Temperature
  - Description
- Shows/reveals hourly section

**5. displayForecast(data)**
- Creates Chart.js line chart for temperature trend
- X-axis: Days (5 days)
- Y-axis: Temperature (°C)
- Line style: smooth curve
- Creates forecast item grid with:
  - Date
  - Icon
  - Condition
  - High/Low temperatures
- Shows/reveals forecast section

**6. loadMultipleCitiesComparison()**
- Fetches weather for: London, New York, Tokyo
- Displays city cards side-by-side
- Each card clickable to search that city
- Shows/reveals comparison section

**7. testWebhook()**
- Sends POST request to `/webhook/weather`
- Payload example: `{ event: "test", data: {...} }`
- Triggers webhook event logging
- Automatically refreshes event list

**8. loadWebhookEvents()**
- Fetches `/webhook/events`
- Dynamically creates event list items
- Shows:
  - Event badge (type)
  - Timestamp
  - Event details (key-value pairs)
- Updates empty state message

**9. clearWebhookEvents()**
- Clears event log from server/memory
- Resets display to "No events recorded"

**10. refreshAllData()**
- Re-fetches all displayed data
- Updates all sections
- Shows loading indicator during refresh

**11. showLoading() / hideLoading()**
- Shows/hides loading modal with spinner
- Modal has semi-transparent backdrop

**12. showError(message)**
- Displays error message in alert box
- Auto-hides after 5 seconds
- Styled with danger color

**13. openGoogleMaps()**
- Opens Google Maps with current location
- URL: `https://www.google.com/maps?q={lat},{lon}`

### Event Listeners
- Search Button: Click → searchWeather()
- City Input: Keypress Enter → searchWeather()
- Refresh Button: Click → refreshAllData()
- Favorite Buttons: Click → searchWeather() for that city
- Test Webhook: Click → testWebhook()
- Refresh Webhooks: Click → loadWebhookEvents()
- Clear Webhooks: Click → clearWebhookEvents()
- View Maps: Click → openGoogleMaps()

---

## 7. BACKEND API ENDPOINTS

### Base URL
- Local: `http://localhost:3000`
- Production: `https://[codesandbox-url]`

### Endpoints

**1. GET /api/weather?city={city}**
- Returns: Current weather data
- Response:
  ```json
  {
    "city": "London",
    "country": "GB",
    "temp": 12.5,
    "feelsLike": 10.2,
    "description": "Cloudy",
    "icon": "04d",
    "humidity": 75,
    "windSpeed": 4.5,
    "cloudiness": 85,
    "visibility": 10000,
    "pressure": 1015,
    "dewPoint": 8.3,
    "sunrise": 1710835200,
    "sunset": 1710881400,
    "uvIndex": 2.5
  }
  ```

**2. GET /api/hourly?city={city}**
- Returns: Next 24 hours forecast
- Response: Array of hourly objects
  ```json
  [
    {
      "time": "14:00",
      "temp": 12.5,
      "description": "Cloudy",
      "icon": "04d"
    },
    ...
  ]
  ```

**3. GET /api/forecast?city={city}**
- Returns: 5-day forecast
- Response: Array of daily objects
  ```json
  [
    {
      "date": "2024-03-20",
      "tempHigh": 15.2,
      "tempLow": 8.5,
      "description": "Partly Cloudy",
      "icon": "02d"
    },
    ...
  ]
  ```

**4. GET /api/multiple-cities?cities={city1},{city2},...**
- Returns: Weather for multiple cities
- Response: Array of city weather objects

**5. POST /webhook/weather**
- Receives: Webhook event payload
- Stores event in in-memory array
- Response: `{ success: true }`

**6. GET /webhook/events**
- Returns: All stored webhook events
- Response:
  ```json
  [
    {
      "event": "weather_alert",
      "timestamp": "2024-03-19T14:30:45Z",
      "data": { ... }
    },
    ...
  ]
  ```

---

## 8. CONTENT & DATA

### Static Content

**Navigation:**
- Logo: "🌤️ WeatherPro"
- Button: Refresh "🔄"

**Sections:**
- ⭐ Favorites
- 📍 Location Map
- 🌍 Cities Comparison
- ⏰ Next 24 Hours
- 📊 5-Day Forecast
- 🔔 Webhook Events

**Pre-configured Favorites:**
1. London
2. New York
3. Tokyo

**Button Labels:**
- "Search" (search button)
- "⭐ Add to Favorites" (in hero)
- "Test Webhook"
- "Refresh"
- "Clear All"
- "View" (Google Maps)

**Empty States:**
- Search: "Please enter a city name"
- Webhook: "No events recorded"
- Loading: "Loading weather data..."

### Dynamic Content Sources

**OpenWeatherMap API:**
- Base URL: `https://api.openweathermap.org/data/2.5/`
- Endpoints Used:
  - `/weather` - current weather
  - `/forecast` - 5-day forecast (3-hour intervals)
  - `/uvi` - UV index data
- Required: API Key in `.env`

---

## 9. TECHNOLOGY STACK

### Frontend
- HTML5 (semantic structure)
- CSS3 (custom properties, grid, flexbox, animations)
- JavaScript (ES6+, async/await, fetch API)

### External Libraries
- **Leaflet 1.9.4:** Interactive maps (`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css">`)
- **Chart.js 3.9.1:** Temperature charts (`<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>`)

### Backend
- Node.js with Express.js ^4.18.2
- dotenv ^16.0.3 (environment variables)
- axios ^1.4.0 (HTTP requests)
- cors ^2.8.5 (cross-origin requests)
- nodemon ^2.0.22 (development auto-reload)

### Environment Variables (.env)
```
OPENWEATHER_API_KEY=137c1803f20f88b7213e9bcf21a15867
PORT=3000
```

---

## 10. FILE STRUCTURE

```
project-root/
├── server.js                 # Express backend server
├── package.json              # Node dependencies
├── .env                       # Environment variables
├── public/
│   ├── index.html            # Main HTML file
│   ├── css/
│   │   └── styles.css        # All styling (240+ lines)
│   └── js/
│       └── script.js         # Frontend JavaScript (~400+ lines)
```

---

## 11. KEY DESIGN PRINCIPLES

1. **Dark Theme Default:** All designs use dark theme (no light mode toggle visible)
2. **Glassmorphism:** Frosted glass effect on hero conditions (backdrop-filter blur)
3. **Gradient Accents:** Primary blue gradient for hero, accent orange for secondary
4. **Smooth Interactions:** 0.3s ease transitions on all hover states
5. **Consistent Spacing:** 30px gaps in main sections, 20px in cards, 15px in grids
6. **Professional Typography:** System font stack with proper hierarchy
7. **Accessibility:** Clear color contrast, readable font sizes, intuitive layouts
8. **Mobile-First:** Responsive grids with auto-fill/auto-fit, wrapping layouts
9. **Visual Hierarchy:** Large hero section dominates, cards have secondary prominence
10. **Icon Integration:** Emoji icons for sections (⭐ 📍 🌍 etc.)

---

## 12. SPECIAL FEATURES

### Interactive Map
- Uses Leaflet.js for interactive mapping
- Shows location with custom marker
- Coordinates display (latitude, longitude)
- Link to Google Maps for full navigation

### Temperature Chart
- Chart.js line graph of 5-day temperature trend
- Smooth curve animation
- Responsive sizing (350px height)

### Webhook Integration
- Receives and logs webhook events
- Test button to trigger sample events
- Event list with timestamp and details
- Clear all functionality

### Favorites System
- Pre-loaded with default cities: London, New York, Tokyo
- Clickable favorite buttons trigger search
- Quick access to common locations

### Real-time Data
- All data fetches use OpenWeatherMap API
- Current conditions, hourly, and 5-day forecasts
- Multiple cities comparison
- UV index, dew point, visibility, and more

---

## IMPLEMENTATION SUCCESS CRITERIA

✅ Dark theme applied throughout all sections
✅ All sections properly styled with consistent spacing
✅ Smooth animations on page load and interactions
✅ Weather hero displays large, prominent temperature
✅ Interactive map with location marker
✅ 5-day forecast with Chart.js temperature trend
✅ Hourly forecast in small card grid
✅ Webhook events displayed in log format
✅ All buttons interactive and functional
✅ Responsive design adapts to all screen sizes
✅ Loading indicator during data fetches
✅ Error messages display clearly
✅ Favorites quick-access system works
✅ Multiple cities comparison displayed
✅ Professional, modern, polished appearance
