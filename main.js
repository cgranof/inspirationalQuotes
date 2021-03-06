
///////////////////////
//Quote constructor //
/////////////////////

var Quote = function(quotetext, authortext){
  this.quotetext = quotetext
  this.author = authortext;
  this.rating = 0;

  var star = $('<div>')
    .addClass("glyphicon glyphicon-star");

  this.newStar = [star.clone(), star.clone(), star.clone(), star.clone(), star.clone()];
}


//Method to render the quote, author and stars to the quote container
Quote.prototype.render = function(){

  
  this.$el = $('<div class="postedContainer">').clone()

  
  this.$el.append('<div class="postedQuote">' + this.quotetext + '</div>');
  this.$el.append('<div class="postedAuthor">' + this.author + '</div>');
  this.$el.append(this.newStar);

  this.$el.find('.glyphicon-star')
  .on('click', this._starClicked.bind(this));


  return this.$el;
}


//Method to rate the stars, change color on click
Quote.prototype._starClicked = function(e){
  var currentQuote = this;
  var ratingStar = $(e.currentTarget);
  var rating = ratingStar.index() - 1;
  currentQuote.rating = rating;


  $(e.currentTarget).siblings().css("color", "grey");
  $(e.currentTarget).css("color", "#191919");
  $(e.currentTarget).prevAll().css("color", "#191919");

}
//////////////////////////
// Library constructor //
////////////////////////

var Library = function(){
  this.quotes = [];
  numberOfQuotes = 0;
}


//Method to push new quotes to the array
Library.prototype.addQuotes = function(quoteArg){
  this.numberOfQuotes = this.quotes.push(quoteArg);
}


//Sort method to re-sort by rating each time the submit button is clicked

Library.prototype.sortByRating = function(){

  var swapQuote;

  for (j = 0; j < this.numberOfQuotes; j++){

    for (i = 0; i < this.numberOfQuotes -1 ; i++){ 
      if (this.quotes[i].rating < this.quotes[i+1].rating){
        swapQuote = this.quotes[i];
        this.quotes[i] = this.quotes[i+1];
        this.quotes[i+1] = swapQuote;
      }
  }
}
}



Library.prototype.render = function()
{
  $('#posted').empty();
  this.$el = $('#posted');

  for (i = 0; i < this.numberOfQuotes; i++) { 
    this.$el.append(this.quotes[i].render());
    
}
  
  return;

}




$(document).on('ready', function() {


var myLibrary = new Library();


//Click handler for submit form

  $('.submitButton').on('click', function(e){

    var myQuote = new Quote($('#quote-edit').val(), $('#author-edit').val() );

    e.preventDefault();
    $('#quote-edit').val(' ');
    $('#author-edit').val(' ');
    
    

    myLibrary.addQuotes(myQuote);
    
    myLibrary.sortByRating();

    myLibrary.render();

   
  });  


});
