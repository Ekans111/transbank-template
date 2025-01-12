const app = require('./bin/www'); // Adjust path as necessary

module.exports = (req, res) => {
  app(req, res); // Pass the request and response objects to your Express app instance
};