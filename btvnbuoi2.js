import Student from './Student.js'
import Fun from './fun.js'
const fun = new Fun()
const student1 = new Student(13,"Hai",19,"HaTay");
const student2 = new Student(13,"Quynh",19,"ThaiNguyen");
const student3 = new Student(11,"Huyen",17,"Hanoi");
const student4 = new Student(13,"chi",18,'Hanoi');
const student5 = new Student(9,"Duc",15,"Vinhphuc")
fun.them(student1);
fun.them(student2);
fun.them(student3);
fun.them(student4);
fun.them(student5);
fun.show();
console.log("danh sach hs 15 tuoi")
fun.timtuoi(15);
console.log("sinh vien ten quynh")
fun.timtheoten("Quynh");
console.log("sinh vien 18 tuoi va o ha noi")
fun.tim18tuoiquehanoi();
console.log("sinh vien lop 13");
fun.timtheolop(13);
fun.displaystudent();

 