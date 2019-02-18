/*
    Utilize the date class and also the css property rotate, float or flex
    
*/
$(document).ready(function(){

    setInterval(analogueClock, 1000)

    function analogueClock(){

        // This gets the current value of date, hr, min, and sec. 
        var currentTime = new Date ( );
        var currentHr = currentTime.getHours ( );
        var currentMin = currentTime.getMinutes ( );
        var currentSec = currentTime.getSeconds ( );

        // Jquery that selects the hands from the html
        var hour_hand= $('#hour_hand')
        var minute_hand= $('#minute_hand')
        var second_hand= $('#second_hand')

        // Jquery that rotates the hands by changing the css
        $(second_hand).css("transform", "rotate("+currentSec * 6+"deg)")
        $(minute_hand).css("transform", "rotate("+currentMin * 6+"deg)")
        $(hour_hand).css("transform", "rotate("+currentHr * 30+"deg)")

    }


    setInterval(digitalClock12, 1000)

    function digitalClock12(){
        var currentTime = new Date ( );

        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );
        var currentSeconds = currentTime.getSeconds ( );

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

        // Convert an hours component of "0" to "12"
        currentHours = ( currentHours == 0 ) ? 12 : currentHours;

        // Compose the string for display
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


        // // Update the time display
        $(".digi_clock12").html(currentTimeString)
    }

    setInterval(digitalClock24, 1000)

    function digitalClock24(){
        var currentTime = new Date ( );

        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );
        var currentSeconds = currentTime.getSeconds ( );

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

        // // Convert the hours component to 12-hour format if needed
        // currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

        // // Convert an hours component of "0" to "12"
        // currentHours = ( currentHours == 0 ) ? 12 : currentHours;

        // Compose the string for display
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


        // Update the time display
        $(".digi_clock24").html(currentTimeString)
    }

    $('.digi_clock24').hide()
    $('.digi_clock12').show()

    $('#btn').click(function(){

        $('.digi_clock24').toggle()
        $('.digi_clock12').toggle()

    })
})