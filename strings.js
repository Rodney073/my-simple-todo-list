$('#add').on('click', (event) => {
 // $(event.target).text('This button was clicked');
  $('ul').append("<li>" + todo.value + "</li>")
});

$('li').on('click', (event) => {
  $('li').css('background-color', 'blue')
});



$('li').click(function() {
  $(todo.value).css({
      'background-color': 'red',
      'color': 'white',
      'font-size': '44px'
  });
});