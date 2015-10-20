
		var expand = false;
$(".menu-button").on("click", function(){
				if(!expand){
					$(".bla").animate({
						marginLeft:"0px"
						
					},"fast", function(){
						expand = true;
					}).addClass("class");

					$("#main").animate({
						marginLeft:"320px"
					},"fast");
				} else {
					$(".bla").animate({
						marginLeft:"-320px"
					},"fast",function(){
						expand = false;
					}).removeClass("class");

					$("#main").animate({
						marginLeft:"0"
					},"fast");
				}

			});

//start button toggle
$(".open").addClass("red");
$(".closed").on("click", function() {
$(".closed").addClass("red");
$(".open").removeClass("red");
});
$(".open").on("click", function() {
$(".open").addClass("red");
$(".closed").removeClass("red");
});
//end button toggle
//start display hour
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var d = new Date();
var elem_1 = document.getElementById("getHour");
var elem_2 = document.getElementById("getHour2");
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
elem_1.innerHTML = h + ":" + m + ":" + s;
elem_2.innerHTML = h + ":" + m + ":" + s;


