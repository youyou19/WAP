
$(document).ready(function () {
    var toucheWall = false;
    var isStart = false;
    $("div.boundary").mouseover(function () {
        toucheWall = true;
        if (isStart) {
            $("div.boundary").addClass('youlose');
            $("#status").text("Sorry you Lost :( Click the " + "S" + " to begin.");
        }
    });


    $("#start").click(function () {
        isStart = true;
        toucheWall = false;
        $("div.boundary").removeClass('youlose');
           $("#status").text("Started");
    });

 $("#maze").mouseleave(function() {
     if (isStart) {
            $(".boundary").addClass("youlose");
        toucheWall = true;
            $("#status").text("Sorry you Lost :( Click the " + "S" + " to begin.");
        }


    });
    $("#end").mouseover(function () {
        if (isStart && !toucheWall) {
            $("#status").text("You Win!");
            isStart = false;
            toucheWall = false;
        } 
        else {
            $("#status").text("Sorry you Lost :( Click the " + "S" + " to begin.");
            $(".boundary").addClass("youlose");
            isStart = false;
            toucheWall = false;

        }
    });

});