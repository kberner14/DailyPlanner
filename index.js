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
var todaysDate= m.format("dddd, MMMM Do YYYY");
    $("#currentDay").append(todaysDate)

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


// Get local stored data
// IF anything was found in local storage, update the daily calendar
var storedPlans = JSON.parse(localStorage.getitem("time-block"))

//IF var !=== null { insert }

// Render items to page
// Clear item
// WHEN input is entered
