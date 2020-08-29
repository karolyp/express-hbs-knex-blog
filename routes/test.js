const express = require('express');
const knex = require('../db/knex');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const names = await knex('test').select();
  res.render('test', { title: 'Test page', names});
});

module.exports = router;
