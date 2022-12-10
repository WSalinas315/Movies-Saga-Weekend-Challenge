const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET all genres
router.get('/', (req, res) => {
  let genreQuery = `SELECT * FROM "genres";`;
  pool.query(genreQuery).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting all genres:', error);
    res.sendStatus(500);
  });
});

module.exports = router;