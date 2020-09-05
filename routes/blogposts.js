const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', async function (req, res, next) {
  // 1. kérjük le az adatbázisból a blogpostokat
  // szükség lesz egy knex object-re, amivel intézzük a lekérdezéseket

  // szükség lesz még a categories táblára is!
  const blogposts = await knex('blogposts')
    .join('categories', 'categories.id', '=', 'blogposts.category_id')
    .join('authors', 'authors.id', '=', 'blogposts.author_id')
    .select('blogposts.*', 'categories.name', 'authors.full_name');

  // 2. rendereljük ki a view-t, és adjuk meg neki a blogpostokat
  res.render('blogposts', { title: 'Blog posts', blogposts });
});

router.get('/new', (req, res, next) => {
  res.render('new_blogpost');
});

module.exports = router;
