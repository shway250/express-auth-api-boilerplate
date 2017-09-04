$('.put-form').on('submit', function(e) {
  e.preventDefault();
  var teamElement = $(this);
  var teamUrl = teamElement.attr('action');
  var teamData = teamElement.serialize();
  $.ajax({
    method: 'PUT',
    url: teamUrl,
    data: teamData
  }).done(function(data) {
    // get data returned from the PUT route
    console.log(data);

    // do stuff when the PUT action is complete
    teamElement.remove();

    // or, you can redirect to another page
    window.location = '/teams';
  });
});