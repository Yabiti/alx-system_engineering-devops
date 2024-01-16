var createstudent = function(name, age){
    var student = {
        name: name,
        age: age,
        birhtday: function(){
            this.age++;
        }
    }
    return student;
}

var student1 = createstudent("yabu", 15);
var student2 = createstudent("mikey", 16);

student1.birhtday();
console.log(student1.age);