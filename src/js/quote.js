// 1. cache DOM Element
// 2. fetch a random quote from remote API
// 3. Process JSON
// 4. call greeting Module to display message (Greeting.displayMessage())
// 5. render the quote to the DOM
// 6. some public method to initialize


var Quote = (function(){
    
    `use strict`;
    var DOM = {};

    function cacheDom(){
        DOM.$quoteFeature = $('#quote');
        DOM.$quoteLink = $(document.createElement('a'));
        DOM.$author = $(document.createElement('p'));
    }

    //get random quote

    function getQuote(){

        
            $.ajax({
                    type: "GET",
                    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
                    data: {},
                    dataType: 'json',
                    success: function(data) {
                    renderQuote(data);
                    },
                    error: handleError ,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("X-Mashape-Authorization", "Bk47jF0aCnmshsTi1VQAyxueTH2ap1BJxjejsnw9wHKPr2OmG4");
                    }
            });
    

    }

    function handleError(err){
        console.log(err);
    }

    function renderQuote(response){

        console.log(response);
        Greeting.displayMessage();      // calling here to make quote and greeting at same instant once quote is resolved from remote api

        DOM.$quoteLink
            .attr('href',"#")
            .html(response[0].quote);
        
        DOM.$author
            .html(response[0].author);
        
        DOM.$quoteFeature
        .css('background-color', 'rgba(0, 0, 0, .2)')
        .attr('href', "#")
        .html(DOM.$quoteLink)
        .append(DOM.$author);

        

    }
    

    
    function init(){
        cacheDom();
        getQuote();

    }

    return {
        init: init
    };


}());