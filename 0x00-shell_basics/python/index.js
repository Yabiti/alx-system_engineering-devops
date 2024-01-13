var students = [
    ["marry", 10],
    ["Hellen", 15],
    ["yabu", 17]
];

var printStudents = function(students){
    for (var i = 0; i <students.length; i++){
        console.log("student" + i + ":");
        console.log(students[i][0]);
        console.log(students[i][1]);
    }
}