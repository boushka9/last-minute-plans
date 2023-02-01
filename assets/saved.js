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
        //when you click the "whoops" button, the modal disappears
        $("#no").click(function(){
        $("#clearModal").css("display", "none")

        })

        //when you click the "Proceed" button, the modal disappears
        $("#yes").click(function(){
            $("#clearModal").css("display", "none")
    
            })

});











