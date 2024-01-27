var createStudent = function(name, age){
    var student = {
        name: name,
        age: age,
        birthday: function(){
            age++;
        }
    }
    return student;
}
var student1 = createStudent("marry", 15);
var student2 = createStudent("olisse", 21);
console.log("students", student1.name, student1.age);
console.log("students", student2.name, student2.age);