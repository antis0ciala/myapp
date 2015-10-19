$(".open").addClass("red");
$(".closed").on("click", function() {
$(".closed").addClass("red");
$(".open").removeClass("red");
});
$(".open").on("click", function() {
$(".open").addClass("red");
$(".closed").removeClass("red");
});

function myFunction() {
    var date = new Date();
    var elem = document.getElementById("demo");
    var hour = addZero(d.getHours());
    var minutes = addZero(d.getMinutes());
    var seconds = addZero(d.getSeconds());
    elem.innerHTML = hour + ":" + minutes + ":" + seconds;
}