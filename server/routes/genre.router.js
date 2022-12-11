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

// GET genres by movie id
router.get('/:id', (req, res) => {
  let queryID = req.params.id;
  let genreQuery = `SELECT "name" FROM "genres" 
                    JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
                    WHERE "movie_id" = $1;`;
  pool.query(genreQuery, [queryID]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting genres for specified film:', error);
    res.sendStatus(500);
  });
});

module.exports = router;