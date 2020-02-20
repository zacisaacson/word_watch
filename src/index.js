import $ from 'jquery'
const fetch = require('node-fetch');


$(document).ready(() => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(res => res.json())
  .then(topWordTitle => {
    document.getElementById('top-word-title').innerHTML = Object.keys(topWordTitle.word)[0]
    document.getElementById('top-word-count').innerHTML = Object.values(topWordTitle.word)[0]
  })
  document.getElementById('submit').addEventListener('click', createText)
})

function createText() {
  event.preventDefault();

  let text = document.getElementById('text').value;

  fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
    method: 'POST',
    headers :
      {'Content-Type': 'application/json'},
    body: JSON.stringify({
      word: {
        value: text
      }
    })
  })
  .then(res => res.json())
  .then(resJson => {
  console.log(resJson)
  })
}
