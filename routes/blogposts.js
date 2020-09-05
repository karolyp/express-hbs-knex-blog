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

router.get('/new', async (req, res, next) => {
  const categories = await knex('categories').select();
  res.render('new_blogpost', {
    title: 'Új blogposzt',
    categories
  });
});

router.post('/', async (req, res, next) => {
  // Mi történik, ha nincs adott nevű szerző?
  // Adjuk hozzá az adatbázishoz
  // Ha hibás a req.body, akkor rendereljük ki az error page-et
  // if(rossz a req.body) then szálljon el
  const blogpostDTO = req.body;

  if (!isBlogpostValid(blogpostDTO)) {
    res.render('error', {
      message: 'Hibás blogposzt!'
    });
  } else {
    // dolgozzon tovább a jó paraméterekkel 
    let authorId;
    if (isAuthorExist(blogpostDTO.author)) {
      authorId = await knex('authors')
        .select('id')
        .where('full_name', '=', blogpostDTO.author)
        .first()
    } else {
      authorId = await knex('authors').insert({
        full_name: blogpostDTO.author
      }).returning('id');
    }
    console.log(authorId);
  }
});

const isBlogpostValid = (blogpost) => {
  // vannak-e/üresek-e a fieldjei?
  return blogpost.title &&
    blogpost.description &&
    blogpost.author &&
    blogpost.category;
};

const isAuthorExist = async (full_name) => {
  const count = await knex('authors')
    .where({ full_name })
    .count('full_name as fn')
    .first();
  return count.fn > 0;
};

module.exports = router;
