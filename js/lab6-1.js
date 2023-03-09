/* jQuery and JavaScript code here for lab6-1.html */
window.addEventListener("DOMContentLoaded", function(e) {

    var title = $("#pageTitle");
    title.html("Lab 6 - DOM Manipulation with jQuery");

    var textArea = $("#msgArea");
    textArea.attr("placeholder", "My class is "+textArea.attr("class"));

    var details = $("button");
    details.css("background-color", "red");

    var body = $("body");
    body.css("background-color", "ivory");

    var icons = $(".center-icons");
    icons.addClass("selected");

    var newImage = $('<img src="images/art/thumbs/13030.jpg">');
    $("#panel-2").append(newImage);


});

$(document).ready(function(){
    $(".panel")
        .on("click",onClick)
        .on("mousemove", hover)
        .on("mouseleave", leave);

    $(".img-responsive").hover(
        function(){
            var alt = $(this).attr('alt');
            var src = $(this).attr('src');
            var newsrc = src.replace("small", "medium");

            var preview = $('<div id="preview"></div>');
            var image = $('<img src="'+newsrc+'">');
            var caption = $('<p>'+alt+'<p>');

            preview.append(image);
            preview.append(caption);

            $("#stories").after(preview);
            $("#preview").fadeIn();

            $(this).addClass("gray");
        }, function(){
            console.log("yo");
            $("#preview").remove();
            $(this).removeClass("gray");
        }
    );
});

function onClick(){
    $("#message").html("You clicked this panel");
}

function hover(event){
    var mouse_x = event.pageX;
    var mouse_y = event.pageY;
    $("#message").html("x="+mouse_x+" y="+mouse_y);
}

function leave(){
    $("#message").html("The mouse has left");
}