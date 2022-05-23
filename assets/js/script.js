

const begin = $("#begin")

// remove load screen

$(begin).on('click', function (e) {
  e.preventDefault();
  const form = $('#form');
  const skills = $('.skills');
  const email = $('.email');
  const projects = $('.rini');
  form.addClass('hidden');
  skills.removeClass('hidden');
  email.removeClass('hidden');
  projects.removeClass('hidden');
    // displaying
    document.getElementById('info').style.display = 'block';
    // need grid for cards
    document.getElementById('projects').style.display = 'grid';

});
