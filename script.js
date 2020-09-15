$(document).ready(() => {
    momentHour();
    let hourChecker = setInterval(momentHour, 1000);
    //Renders current day and time in header   
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm"));

    $(".saveBtn").on("click", function () {

        let textInput = $(this).parent().siblings(".planner-event").children(".description").val();
        let id = $(this).parent().siblings(".planner-event").children(".description").data("hour");
        localStorage.setItem(id, textInput);


    })

    $("#9am").val(localStorage.getItem("9"));
    $("#10am").val(localStorage.getItem("10"));
    $("#11am").val(localStorage.getItem("11"));
    $("#12pm").val(localStorage.getItem("12"));
    $("#1pm").val(localStorage.getItem("13"));
    $("#2pm").val(localStorage.getItem("14"));
    $("#3pm").val(localStorage.getItem("15"));
    $("#4pm").val(localStorage.getItem("16"));
    $("#5pm").val(localStorage.getItem("17"));

    function momentHour() {

        let currentHour = moment().hour();
        $(".description").each(function () {
            let descriptionHour = parseInt($(this).data("hour"));
            if (descriptionHour < currentHour) {
                $(this).parent().addClass("past");
            } else if (descriptionHour === currentHour) {
                $(this).parent().removeClass("past");
                $(this).parent().addClass("present");
            } else {
                $(this).parent().removeClass("past");
                $(this).parent().removeClass("present");
                $(this).parent().addClass("future");
            }
        })
    }

    $("#clearBtn").on("click", function () {
        localStorage.clear();
        location.reload();
    })
});