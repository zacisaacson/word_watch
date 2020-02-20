import $ from 'jquery'
const fetch = require('node-fetch');


$(document).ready(() => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(res => res.json())
  .then(topWordTitle => {
    document.getElementById('top-word-title').innerHTML = Object.keys(topWordTitle.word)[0]
    document.getElementById('top-word-count').innerHTML = Object.values(topWordTitle.word)[0]
  })
})
