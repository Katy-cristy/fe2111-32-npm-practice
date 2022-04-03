const giveMeAJoke = require("give-me-a-joke");
const colors = require("colors");

//Get a random dad Joke

giveMeAJoke.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow.underline);
});

