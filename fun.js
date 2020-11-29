import Student  from "./Student.js";
import "./card.js"

class Fun{
    img;
    classroom;
    name;
    Studentlist;
    constructor(){
        this.img;
        this.Studentlist=[];
        this.name = name;
    }
    show(){
        this.Studentlist.map((student) => student.hienthi());
        // map là một cấu trúc dữ liệu cho phép lưu trữ dữ liệu theo kiểu key-value, tương tự như object.
    }
    them(student){
        //this.Studentlist.push(student); c1
        if(student instanceof Student){
            this.Studentlist.push(student);
        }else{
            alert("nhap linh tinh");
        }
    }
   timtheoten(name){
       this.Studentlist.filter((student) =>student.name === name)
       .map((student) => student.hienthi());
       // c2  return =this.Student.filter((item)=> item.age=== age);

   }
   timtheolop(classroom){
       this.Studentlist.filter((student)=> student.classroom === classroom)
       .map((student) => student.hienthi());
   }
   timteoquequan(hometown){
       this.Studentlist.filter((student)=> student.hometown === hometown)
       .map((student) => student.hienthi());
   }
   timtuoi(age){
       this.Studentlist.filter((student)=> student.age === age)
       .map((student) => student.hienthi());
   }
   tim18tuoiquehanoi(){
    this.Studentlist.filter((student)=> student.age === 18 && student.hometown ==="Hanoi")
    .map((student) => student.hienthi());
   }
   displaystudent(){
      const mina = document.querySelector("#mina")
      this.Studentlist.map((student)=> {
          const {img,classroom,name , age,hometown}=student
          mina.innerHTML += `
          <card-container  img = ${img} classroom =${classroom} name = ${name} age =${age} hometown = ${hometown}>
          </card-container> 
          
          `
      })
   }
}    
export default Fun