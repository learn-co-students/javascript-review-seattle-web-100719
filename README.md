# JS Review: Dance Rader
Let's improve our JavaScript skills by creating a web app where users can view and leave feedback for dancers.

## Goals
- Identify our strengths and areas for improvement
- Feel more confident coding using vanilla JS
- Prepare ourselves for tomorrow's challenge
- Build the MVP of our dance feedback app together

## Concepts We'll Cover
- Accessing, modifying, and adding elements to the DOM
- Events
- Fetching data from a database (GET)
- BONUS: Fetching data to a database (POST)

## MVP User Stories
A user can:
- See a dancer dancing as the background image of a div
- Read a description of the dancer
- Leave feedback for the dancer via a form
- See that feedback in its very own paragraph!

## BONUS User Stories
A user can:
- Save their feedback to the database
- View the next dancer in the database

## Important URLs
- GET a dancer: http://localhost:3000/dancers/:id
- POST feedback: http://localhost:3000/feedback/

## Required Headers for POST Requests
```javascript
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
```

## Example Response For Dancer
```javascript
{
  id: 1,
  url: 'http://mydancydance.com/dance-away.gif',
  description: 'Jahn dances his heart out to Blame It on the Rain',
  feedback: [
    {
      id: 1,
      content: 'Great moves, such dance, wow!',
      dancer_id: 1
    },
    {
      id: 2,
      content: 'I preferred the way you used to dance.',
      dancer_id: 1
    }
  ]
}
```

## Using This Project
This project uses a local Rails backend to serve data and assumes that Rails will serve data on port 3000.

Do the usual Git stuff:
1. Fork the repo
2. Clone the repo
3. Create a solution branch to work from for your lecture

To get started:
1. `cd backend/`
2. `rails db:seed`
3. `rails s`
4. If you're silly like me, you'll accidentally shut down your Rails server if you don't open a new Terminal tab in VS Code. So do that.
