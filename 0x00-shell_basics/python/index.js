 var createstudent = function(name, age){
 var student = {
    name: name,
    age: age
 }
 return student;
}
var student1 = createstudent("marry", 10)
var student2 = createstudent("michael", 15)
console.log(student1.name);