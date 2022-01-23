// display current date in header
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// save text for each time block to local storage
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    }); 
    
// call data from local storage for each time block
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
 
    // track time and add color to show past, present, and future
    function timeChange(){
        var currentHour = moment().hour(); 
        
        $(".time-block").each(function(){
            var idTime = parseInt($(this).attr("id"));

            if (idTime < currentHour){
                $(this).addClass("past");
                
            } else if (idTime === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    timeChange();
});