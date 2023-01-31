$(document).ready(function(){
    //get the button by id 
    $("#clearBtn").click(function(){
        $("#clearModal").css("display", "block");
    });
    //when clicking the span id "close," the modal goes invisible 
    $(".close").click(function(){
        $("#clearModal").css("display", "none");
    });
    //when clicking anywhere outside of the window, the modal goes invisible
    $(window).click(function(event){
        if(event.target == $("#clearModal")){
            $("#clearModal").css("display", "none");
        }
    });


});











