var createstudent = function(name, age){
    var student = {
        name: name,
        age: age,
        birthday: function(){
            this.age++;
        }
    }
    return student;
}

var student1 = createstudent("yabetse", 25);
var student2 = createstudent("chere", 21);

console.log(student1.name, student1.age);
console.log(student2.name, student2.age);
student1.birthday();
console.log(student1.name, student1.age);