var students = [
    ["marry","femlae", 10],
    ["else","femlae", 15],
    ["common","femlae", 25]
];

var printStudents = function(students){
    for(var i = 0; i < students.length; i++){
        console.log('studnet' + i + ".");
        for(var j = 0; j < students[i].length; j++){
            console.log(students[i][j]);
        }
    }
}
printStudents(students);