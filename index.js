// how to determine if the time is future/present/past

var hoursData = {
    9: '',
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
}

// let currentHour be the hour of the current time of day
var currentHour = parseInt(moment().format("H"))

// Get reference to all the hours
var timeBlockElements = $(".time-block")

// For each hour
timeBlockElements.each(function () {

    var timeBlockHour = parseInt(this.id.split("-")[1]);
    console.log(timeBlockHour, currentHour)
})

// Get the hour of the block
if (timeBlockHour < currentHour {
    // give past class to the hour
    $(this).addClass("past")

    //get matching hour in hoursData
} 

else if (timeBlockHour === currentHour {
    // give present class to the hour
    $(this).addClass("present")
} 

else {
    // give future class to the hour
    $(this).addClass("future")
}
// If the hour is less than currentHour
    // give past class to hour

// else if the hour is equal to the currenHour
    // give present class to the hour

// else
    // give the future class to the hour



// The javascript here should contain the ability to have button clicks for each button
    // The button clicks should prompt the user for input associated with the hour
    // the inputs should be placed into local storage
    // the hours of the day should be compared with the api time
    // depending on the api time, the label of 

