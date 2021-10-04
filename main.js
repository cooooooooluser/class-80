student_array = [];
var display_array = [];
function submit() {
for (var i=1; i<=4;i++) {
    var name=document.getElementById("student_"+i).value;
    student_array.push(name); 
    console.log(student_array);
}
var length=student_array.length;
for (var j=0; j<length; j++) {
    display_array.push("<h4> Name - "+student_array[j]+"</h4>");
}
document.getElementById("display_name1").innerHTML=display_array;
var remove_comma=display_array.join(" ");
document.getElementById("display_name2").innerHTML=remove_comma;
document.getElementById("sort_button").style.display="inline-block";
document.getElementById("submit_button").style.display="none";
}

function sorting() {
   student_array.sort();
   var length=student_array.length;
   var display_sorted_array=[];
   for (var j=0; j<length; j++) {
    display_sorted_array.push("<h4> Name - "+student_array[j]+"</h4>");
    
}
var remove_comma=display_sorted_array.join(" ");
document.getElementById("display_name2").innerHTML=remove_comma;
}



