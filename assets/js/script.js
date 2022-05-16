

const begin = $("#begin")

// remove load screen

$(begin).on('click', function (e) {
  e.preventDefault();
  const form = $('#form');
  form.addClass('hidden');
    // displaying
    document.getElementById('info').style.display = 'block';
    // need grid for cards
    document.getElementById('projects').style.display = 'grid';

});
