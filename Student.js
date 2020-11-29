class Student{
    classroom;
    name;
    age;
    hometown;
    constructor(classroom,name,age,hometown){
        this.classroom = classroom;
        this.name =name;
        this.age = age;
        this.hometown = hometown;
    }
    hienthi(){
        console.log(`Class: ${this.classroom}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Hometown: ${this.hometown}`);
        console.log("................")
    }
}
export default Student