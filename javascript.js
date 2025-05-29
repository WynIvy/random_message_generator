const messages = [
    {id: 1, quote: "The Sun is evil"},
    {id: 2, quote: "The Moon full of delights"},
    {id: 3, quote: "Mercury is fucking with you<br>...again..."},
    {id: 4, quote: "Saturn has the last laugh.<br>HAHAHA"},
    {id: 5, quote: "Jupiter is .... trying<br>...so hard..."},
    {id: 6, quote: "Pisces is sexy"},
    {id: 7, quote: "Venus is pretty neat"},
    {id: 8, quote: "Mars hurts :("},
    {id: 9, quote: "The Moon is empty"},
    {id: 10, quote: "The Sun is touching you with its rays.<br>(oww)"},
    {id: 11, quote: "Saturn yearns for you to be stuck in traffic."}
    ]

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    button.addEventListener("click", function() {
        newQuote();
    });

    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById("message").innerHTML = messages[randomNumber].quote;
    }
});