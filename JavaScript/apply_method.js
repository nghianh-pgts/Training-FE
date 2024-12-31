const teacher = {
  firstName: "Minh",
  lastName: "Thao",
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let rs = greet.apply(teacher, ["Hello", "How are you?"]);
console.log(rs); //Hello Minh Thao. How are you?   //gọi hàm greet với this của teacher và truyền vào 2 tham số là Hello và How are you?

//so sánh với call()
rs = greet.call(teacher, "Hello", "How are you?");
console.log(rs); //Hello Minh Thao. How are you?   //gọi hàm greet với this của teacher và truyền vào 2 tham số là Hello và How are you?
