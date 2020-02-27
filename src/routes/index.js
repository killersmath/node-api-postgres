const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Node.js, Express and Postgres API' });
});

module.exports = router;
