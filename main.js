
//Quote constructor 

var Quote = function(quotetext, author){
  this.quotetext = quotetext;
  this.author = author;
  this.rating = 0;
}

Quote.prototype.render = function(){
  var star = $('<div>')
    .addClass("glyphicon glyphicon-star");
  var newStar = [star.clone(), star.clone(), star.clone(), star.clone(), star.clone()];
  this.$el = $('<div class="postedContainer">').clone()
    .append(newStar);
  
  return this.$el;
}

Quote.prototype.starClicked = function(e){
  var currentQuote = this;
  var ratingStar = $(e.currentTarget);
  var rating = ratingStar.index() + 1;
  currentQuote.rating = rating;
}

// Library constructor

var Library = function(){
  this.quotes = [];
}

Library.prototype.addQuotes = function(){
  this.quotes = this.quotes.concat([].slice.call(arguments));
}

Library.prototype.render = function(){
  this.$el = $('#posted')
  this.$el.find('.quotes').empty().append(
    this.quotes.map(function(quote) {
      return quote.render();
    })
  );
  return this.$el;
}




$(document).on('ready', function() {

//Click handler for submit form

  $('.submitButton').on('click', function(e){
    var myQuote = new Quote($('#quote-edit').val(), $('#author-edit').val() );
    var myLibrary = new Library();
    //var submittedQuote = $('#quote-edit').val();
    //var submittedAuthor = $('#author-edit').val();
		e.preventDefault();
    $('#quote-edit').val(' ');
    $('#author-edit').val(' ');
    
    myLibrary.addQuotes(myQuote);
    $('#posted').append(myLibrary.render());

    /*var postedQuote = $('<div class="postedQuote">');
    var postedAuthor = $('<div class="postedAuthor">');
    var postedContainer = $('<div class="postedContainer">');
    var star = $('<div>')
      .addClass("glyphicon glyphicon-star");
    var newStar = [star.clone(), star.clone(), star.clone(), star.clone(), star.clone()];
 

    postedContainer
      .append((postedQuote).text(submittedQuote))
      .append((postedAuthor).text(submittedAuthor))
      .append(newStar);
          
    $('#posted').append(postedContainer);*/
  });  


//Click handler for rating stars 


  $(document).on("click", '.glyphicon-star', function(){
    $(this).css("color", "yellow");
    $(this).prevAll().css("color", "yellow");
    console.log("I clicked a STAR!!");
  });






});
