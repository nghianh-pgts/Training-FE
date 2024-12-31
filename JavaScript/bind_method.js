this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const student = {
  firstName: "Huu Nghia",
  lastName: "Nguyen",
};

console.log(teacher.getFullName()); //Minh Thao

const getTeacherFullName = teacher.getFullName;

console.log(getTeacherFullName()); //Minh Thu, không thông qua . nên this sẽ là global object

const teacherName = teacher.getFullName.bind(teacher); //Ràng buộc this với teacher
const stuudentName = teacher.getFullName.bind(teacher); //Ràng buộc this với student

console.log(teacherName()); //Minh Thao
console.log(stuudentName()); //Huu Nghia Nguyen

const $ = document.querySelector.bind(document); //Ràng buộc this với document
const $$ = document.querySelectorAll.bind(document); //Ràng buộc this với document
