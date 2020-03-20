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

var m = moment();
// console.log(m.format("dddd, MMMM Do YYYY"));

    // Let the day be the current date
var todaysDate= document.getElementById("")

    // let currentHour be the hour of the current time of day
var currentHour = parseInt(moment().format("H"))
// console.log(currentHour)

    // Get reference to all the hours
var timeSlotElements = $(".time-block")

// For each hour
timeSlotElements.each(function () {
    // Need hour of the block
    // console.log(this)
    var timeSlotHour = parseInt(this.id.split("-")[1]);
    console.log(timeSlotHour, currentHour)
    
    // If the hour is less than currentHour
    if (timeSlotHour < currentHour) {

    // give past class to the hour
        $(this).addClass("past");

    //get matching hour in hoursData
    } else if (timeSlotHour === currentHour) {
    // give present class to the hour
        $(this).addClass("present");
    } else {
    // give future class to the hour
        $(this).addClass("future");
    }
});



// The javascript here should contain the ability to have button clicks for each button
    // The button clicks should prompt the user for input associated with the hour
    // the inputs should be placed into local storage
    // the hours of the day should be compared with the api time
    // depending on the api time, the label of 

