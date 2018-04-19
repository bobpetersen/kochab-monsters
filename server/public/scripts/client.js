console.log('script.js has loaded!');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery has been loaded!');
  appendAllMonsters();
}

function appendAllMonsters() {
  $.ajax({
    type: 'GET',
    url: '/all-monsters'
  }).then(function(response) {
    for (i = 0; i < response.length; i++) {
      $('#monsterMash').append(`<li>${response[i]}</li>`);
    }
  });
}
