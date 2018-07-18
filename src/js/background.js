var Background = (function(){
    'use strict';

    //place holder for DOM elements
    var DOM = {};

    //cache DOM
    function cacheDom(){
        DOM.$background = $('#background');   
    }

    //async image loading and rendering

    function loadImage(){
        var baseUrl = 'https://source.unsplash.com/category',
            cat     = 'nature',
            size    = '1920x1080';
        buildElement(`${baseUrl}/${cat}/${size}`)
        .then(render);
    }


    function buildElement(source){
        var deferred = $.Deferred(function(task){      //jquery deferred object creation
            var image = new Image();

            image.onload = function(){
                task.resolve(image);
            }

            image.onerror = function(){
                task.reject();
            }

            image.src = source;

        });


        return deferred.promise();  
    }



    function render(image){
        DOM.$background
            .append(image)
            .css('opacity',1);
    }


    //===========puvlic init method=========================//

    function init(){
        cacheDom();
        loadImage();
    }

    //==================exporting public method===================//
    return {
        init: init
    };
}());