var myName = "Olatayo Abdul-Azeez";
document.write("Name: " + myName + "</br></br>");
document.write("Courses: </br>");
let courses = ["HTML", "CSS", "Javascript", "PHP", "C#", "Python", "Go", "UI/UX"];
for (const course of courses){
document.write(course + " ");
}
document.write("</br></br>")
var i;
if(courses.length % 2 == 0){
	document.writeln("Below are a list of even numbers between 1 and 200 </br>");
	for (i = 1; i <= 200; i++) {
		if(i % 2 == 0){
			document.write(i + " ");
		}
	}
}
else{
	document.writeln("Below are a list of odd numbers between 1 and 200 </br>");
	for (i = 1; i <= 200; i++) {
		if(i % 2 != 0){
			document.write(i + " ");
		}
	}
}	