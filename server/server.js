const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/v1/session/:category/1/:selector/1/:filter/1/:secondFilterVal', (request, response) => {
  if (request.params.selector === 'starts_with') {
    database('session').where(request.params.category, 'like', `${request.params.filter}%`).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'does_not_start_with') {
    database('session').whereNot(request.params.category, 'like', `${request.params.filter}%`).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'contains') {
    database('session').where(request.params.category, 'like', `%${request.params.filter}%`).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'does_not_contain') {
    database('session').whereNot(request.params.category, 'like', `%${request.params.filter}%`).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'exactly_equals') {
    database('session').where(request.params.category, request.params.filter).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'is_larger_than') {
    database('session').where(request.params.category, '>', request.params.filter).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'is_less_than') {
    database('session').where(request.params.category, '<', request.params.filter).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'is_exactly') {
    database('session').where(request.params.category, request.params.filter).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

  if (request.params.selector === 'range') {
    database('session').whereBetween(request.params.category, [`${request.params.filter}`, `${request.params.secondFilterVal}`]).select().then(function (session) {
      response.status(200).json(session)
    }).catch(function (error) {
      throw new Error(error)
    })
  }

});

app.listen(app.get('port'), () => {
    console.log('Server is running on port 3001.');
});
