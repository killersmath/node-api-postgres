module.exports = app => {
  // Custom server error handler
  app.use((err, req, res, next) => {
    if (err) {
      console.error(err.message);
      if (!err.statusCode) {
        err.statusCode = 500;
      } // Set 500 server code error if statuscode not set
      return res.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message
      });
    }

    next();
  });

  // Custom 404 route not found handler
  app.use((req, res) => {
    res.status(404).json({
      statusCode: 404,
      message: 'Route not found'
    });
  });
};
