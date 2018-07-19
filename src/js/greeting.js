// 1. cache Dom Element
// 2. Determine the time of the day
// 3. craft a greeting card based on time of the day
// 4. render the greeting to the view
// 5. a way to initialize it (any public method)


var Greeting = (function(){

    var DOM = {},
        names = [
            'handsome',
            'smarty pants',
            'good looking',
            'classy',
            'ace',
            'Mr Roboto'
        ],
        dummyName = selectName();

        function cacheDom(){
            DOM.$greeting = $('#greeting');
            console.log("dom cacjed greeting");
        }

        function selectName(){
            var pick = Math.floor(Math.random() * names.length);
            return names[pick];
        }

        function makeMessage(){
            var timeOfDay;
            var theHour = getCurrentHour();

            if(theHour > 12){
                timeOfDay = "morning";
            }else if (theHour > 12 && theHour < 17) {
                timeOfDay = "afternoon"
            } else {
                timeOfDay = "evening"
            }

            return `Good ${timeOfDay}, ${dummyName}.`;

        }

        function getCurrentHour(){
            var theDate = new Date();
            return (theDate.getHours());
            
        }


        function displayMessage(){
            DOM.$greeting.text(makeMessage());
        }




        function init(){
            cacheDom();

        }

        return{
            init: init,
            displayMessage: displayMessage
        };

}());