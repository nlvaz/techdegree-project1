// FSJS - Random Quote Generator

// Array names quotes with quote objects within
var quotes = [
    {
        quote: 'It does not do well to dwell on dreams and forget to live.',
        source: 'J.K. Rowling',
        citation: 'Harry Potter and the Chamber of Secrets',
        year: '1998',
        category:'Life'
    },
    {
        quote: 'Happiness can be found in the darkest of times, if one only remembers to turn on the light.',
        source: 'Steve Kloves',
        citation: 'Harry Potter and the Prisoner of Azkaban (Film)',
        year: '2004',
        category: 'Happiness'
    },
    {
        quote: 'The Universe is under no obligation to make sense to you.',
        source: 'Neil deGrasse Tyson',
        citation: 'Astrophyiscs for People in a Hurry',
        year: '2017',
        category: 'Space'
    },
    {
        quote: 'Life is like a box of chocolates. You never know what you\'re gonna get.',
        source: 'Eric Roth',
        citation: 'Forrest Gump',
        year: '1994',
        category: 'Life'
    },
    {
        quote: 'Don\'t worry. You\'re just as sane as I am.',
        source: 'J.K. Rowling',
        citation: 'Harry Potter and the Order of the Pheonix',
        year: '2003',
        category: 'Humor'
    },
    {
        quote: 'Stupid is as stupid does.',
        source: 'Eric Roth',
        citation: 'Forrest Gump',
        year: '1994',
        category: 'Humor'
    },
    {
        quote: 'That\'s one small step for man, one giant leap for mankind.',
        source: 'Neil Armstrong',
        citation: 'Transcript of Apollo 11 Moon Landing',
        year: '1969',
        category: 'Space'
    },
    {
        quote: 'Wit beyond measure is man\'s greatest treasure.',
        source: 'J.K. Rowling',
        citation: 'Harry Potter and the Order of the Pheonix',
        year: '2003',
        category: 'Wit'
    }
];


//getRandomQuote function that generates random number to select quote from array and returns
    function getRandomQuote(array) {
        return array[Math.floor(Math.random() * array.length)];
    }


//printQuote function prints quote by giving quote-box class div proper html 
    function printQuote() {
        var randomQuote = getRandomQuote(quotes);
        var quoteProps = '';

        quoteProps = '<p class="quote">' + randomQuote.quote + '</p> \n <p class="source">'
            + randomQuote.source + '<span class="citation">'
            + randomQuote.citation + '</span> <span class="year">'
            + randomQuote.year + '</span> <span class="category">' 
            + randomQuote.category + '</span> </p>';

        document.getElementById('quote-box').innerHTML = quoteProps;
    }

    printQuote();


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);