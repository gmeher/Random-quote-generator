var Background = (function(){
    'use strict';

    //place holder for DOM elements
    var DOM = {};

    //cache DOM
    function cacheDom(){
        DOM.$background = $(#background);   
    }

    //async image loading and rendering

    function loadImage(){
        var baseUrl = 'https://source.unsplash.com/category',
            cat     = 'nature',
            size    = '1920x1080';
        buildElement(`${baseUrl}/${cat}/${size}`)
        .then(render);
    }


    function buildElement(){
        
    }



}())