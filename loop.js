
// for (let i = 0; i < arr.length; i++) {};
// for (const item of arr) {};
// const names  = ['C','D'];
// names.push('A');
// names.push('B');
// const topName = names.pop();
// console.log(topName);

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// };

// for (const iteam of names) {
//     console.log(iteam);
// };

//verb+noun
// function getNameByIndex(index) {
//     return names[index];
// }

// console.log(getNameByIndex(1));

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfor() {
        console.log(`Im ${this.name} and My age is ${this.age}`);
    }
};

const getInfo = new Student('phong',20);
getInfo.showInfor();