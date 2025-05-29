const messages = [
    {id: 1, quote: "The Sun is Evil"},
    {id: 2, quote: "The Moon is watching."},
    {id: 3, quote: "Mercury is fucking with you again."},
    {id: 4, quote: "Saturn has the last laugh."},
    {id: 5, quote: "Jupiter is .... trying"},
    {id: 6, quote: "Pisces is sexy"},
    {id: 7, quote: "Venus is delicious"},
    {id: 8, quote: "Jupiter wants to hug you"}
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