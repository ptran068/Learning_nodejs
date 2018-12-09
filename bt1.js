const listStudents = [];

class Student {

    static addStudent(name, age, isFemale) {
        let infoStudent = {
            name : name,
            age : age,
            isFemale : isFemale
        };
         listStudents.push(infoStudent);
          return listStudents;
    }

    static getAllStudent() {
        if(listStudents.length <= 0){
            console.log('we have no student');
        }
        else {
            for (let i = 0; i < listStudents.length; i++) {
                console.log(listStudents[i]);
            }
        }
         return listStudents;
    }

    //lấy sinh viên theo vị trí trong mảng
    static getStudentByIndex(index) {
        for (let i = 0; i < listStudents.length; i++) {
            if(listStudents[i] === listStudents[index]) {
                console.log(listStudents[i]);
            }          
        }
         return listStudents;
    }

    //viết hàm trả về vị trí của sinh viên theo mảng theo tên.
    static getIndexOfStudentByName(name) {
        for (let i = 0; i < listStudents.length; i++) {
            if(listStudents[i].name === name)
                console.log(`Position of ${name} is ${i}`);
        }
    }

    //remove student in arrays by name
    static removeStudentByName(name) {
        for (let i = 0; i < listStudents.length; i++) {
            if(listStudents[i].name === name) {
                return listStudents.splice(i,1);
            }
        }
    }
}

Student.addStudent('phong',20,false);
Student.addStudent('nhan',20,false);
Student.addStudent('tuan',20,false);
Student.addStudent('son',20,false);
Student.getAllStudent();
Student.getStudentByIndex(2);
Student.getIndexOfStudentByName('son');
Student.removeStudentByName('nhan');
Student.getAllStudent();