document.addEventListener('DOMContentLoaded', function () {
  const dancerURL = 'http://localhost:3000/dancers/';
  const feedbackURL = 'http://localhost:3000/feedback/';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  let id = 1;


  // I can see an image of a dancer

  // I can see a description of the dancer

  // I can see existing feedback below the feedback form, each in its own paragraph

  // I can add feedback via the form and see it on the webpage





  // BONUS: I can persist my feedback to the database so it shows up if I reload the page with the same dancer
  // feedback requires headers
  // body requires dancer_id and content, nested inside feedback


  // BONUS: I can load the next dancer and see their image, description and feedback


});