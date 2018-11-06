const quotes = ["use the force, luke!", 
    "there is no try!", 
    "luke I am your father!", 
    "I love you. I know.", 
    "the dark side has cookies."];

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const random = randomQuote;

module.exports = {
    random,
}