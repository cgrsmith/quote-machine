//Initialise with a quote and set the new-quote button
$(document).ready(function() {
  getQuote();
  $("#new-quote").click(getQuote);
});

function getQuote() {
  $.ajax( {
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
      success: useQuote,
      fail: function(e) {
        console.log("Failed to fetch quote via api");
      },
      cache: false
  });
}

function useQuote(quoteObject) {
  setTwitterButton("\""+quoteObject.quote+"\"" +
    " - "+quoteObject.author);
  $("#text").hide().fadeIn(600);
  $("#text").html("\"" + quoteObject.quote + "\"");
  $("#author").html("- " + quoteObject.author);
}

function setTwitterButton(quoteString) {
  $("#tweet-quote").attr("href","https://twitter.com/intent/tweet?text=" +
    quoteString);
}