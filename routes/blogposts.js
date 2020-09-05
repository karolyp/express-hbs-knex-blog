const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', async function (req, res, next) {
  // 1. kérjük le az adatbázisból a blogpostokat
  // szükség lesz egy knex object-re, amivel intézzük a lekérdezéseket

  // szükség lesz még a categories táblára is!
  const blogposts = await knex('blogposts')
    .join('categories', 'categories.id', '=', 'blogposts.category_id')
    .select('blogposts.*', 'categories.name');

    console.log(blogposts);

  // res.json(blogposts).send();

  // 2. rendereljük ki a view-t, és adjuk meg neki a blogpostokat
  res.render('blogposts', { blogposts });
});

module.exports = router;
