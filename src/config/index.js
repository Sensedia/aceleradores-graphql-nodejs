/**
 * Configuration File
 */
const config = {
  // Other confs
  log: process.env.LOG || true,
  port: process.env.PORT || 8080,
  clusterSize: process.env.CLUSTER_SIZE || 2,
  maxQueryLength: process.env.MAX_QUERY_LENGTH || 10000,
  timeout: +process.env.TIMEOUT || 5000,
  environment: process.env.NODE_ENV || 'development',
  backends: {
    weather: {
      url: process.env.WEATHER_URL || 'https://api.openweathermap.org/data/2.5/weather',
      credentials: process.env.WEATHER_CREDENTIALS || 'd23286b45c3311c864c15141e1694d16'
    },
    country: {
      url: process.env.COUNTRY_URL || 'https://restcountries.eu/rest/v2'
    },
    currency: {
      url: process.env.CURRENCY_URL || 'http://data.fixer.io/api',
      credentials: process.env.CURRENCY_CREDENTIALS || '853acbbac5dfefac4cc4e5fd35d3af67'
    }
  }
}

export default config;