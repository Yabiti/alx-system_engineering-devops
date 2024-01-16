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