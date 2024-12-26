console.log("hàm console");

// #Kiểu dữ liệu trong Javascript
// 1. Dữ liệu nguyên thủy - primitive Data
// - Number: số
// - String: chuỗi
// - Boolean: true/false
// - Undefined:
// - Null
// - Symbol
// 2. Dữ liệu phức tạp - Complex Data
// - Function
// - Object

//number
var a = 1;
var b = 2.5;

//String type
var c = "sss";

//Boolean
var isSuccess = true;

//Undefined
var d;

//Null
var isNull = null;

//Symbol
var id = Symbol("id"); //unique

//Function

var myFunction = function () {
  console.log("hàm");
};

//Object types
var myObj = {
  name: "Nghia",
  age: 21,
  address: "Lạng Sơn",
};

//Làm việc với Chuỗi
var myString = "Học JS tại F8";

//1. length
console.log(myString.length);
//2. tìm chỉ số đầu tiền của 1 chuỗi
console.log(myString.indexOf("JS"));
console.log(myString.indexOf("JS", 6)); //chỉ số bắt đầu từ 6
console.log(myString.lastIndexOf("JS")); //tìm chỉ số của ptu cuối
//3. Cắt chuỗi
console.log(myString.slice(4)); //Cắt chuỗi từ chỉ số 4

//4. Replace thay thế chuỗi
console.log(myString.replace("JS", "JavaScript"));
//5. Convert to uppercase
console.log(myString.toLocaleUpperCase());

//6. Convert to lowercase
console.log(myString.toLocaleLowerCase());

//7. trim xóa khoảng trắng 2 đầu chuỗi
console.log(myString.trim());

//8. split tách chuỗi
var languages = "JS,PHP,Java, Ruby";

console.log(languages.split(","));
//9. lấy chỉ số 1 kí tự tại chuỗi
console.log(languages.charAt(4));

//Làm việc với Array
/*
1. To String
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = ["js", "php", "java", "C#"];

console.log(languages.toString()); //chuyển mảng thành chuỗi
console.log(languages.join("-")); //chuyển mảng thành chuỗi với kí tự giữa mỗi ptu
console.log(languages.pop()); //xóa ptu cuối mảng
console.log(languages.push("Dart")); //thêm ptu vào cuối mảng
console.log(languages.shift());

var date = new Date();
console.log(date);
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

console.log(year + "/" + month + "/" + day);
console.log(`${day}/${month}/${year}`);

//for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var myObj = {
  name: "Huu Nghia",
  age: 21,
};

for (var key in myObj) {
  console.log(myObj[key]);
}

var languages2 = ["JS", "PHP", "Java", "Python"];

for (var lan of languages2) {
  console.log(lan);
}

/*
    Array methods
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses = [
  { id: 1, name: "javascript", coin: 250 },
  { id: 2, name: "java", coin: 0 },
  { id: 3, name: "SQL", coin: 100 },
  { id: 4, name: "PHP", coin: 300 },
  { id: 5, name: "C++", coin: 250 },
];

//foreach()
//duyệt ptu mảng
//tham số: hàm callback
courses.forEach(function (course, index) {
  console.log(index, course);
});

//every() //kiểm tra mảng thỏa mãn 1 dkien nào đó
//tham số: hàm callback
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});

console.log(isFree);

//some() //kiểm tra có không
//tham số hàm callback
var isFree2 = courses.some((course, index) => {
  return course.coin === 0;
});

console.log(isFree2);

//map()
//tham số hàm callback
//chỉnh sửa, thay đổi ptu của 1 array, trả về 1 mảng mới
//tham số của callback: 1. ptu tại chỉ số hiện tại, 2. index
var courses2 = [
  { id: 1, name: "javascript", coin: 250 },
  { id: 2, name: "java", coin: 0 },
  { id: 3, name: "SQL", coin: 100 },
  { id: 4, name: "PHP", coin: 300 },
  { id: 5, name: "C++", coin: 250 },
];

function courseHandler(course) {
  return {
    id: course.id,
    name: `khóa học: ${course.name}`,
    coin: course.coin,
    coinText: `Giá: ${course.coin}`,
  };
}

var newCourses = courses2.map((course) => {
  return {
    id: course.id,
    name: `khóa học: ${course.name}`,
    coin: course.coin,
    coinText: `Giá: ${course.coin}`,
  };
});

console.log(newCourses);

//Reduce()
//tham số đầu tiên : hàm callback
//tham số thứ 2: giá trị khởi tạo, được gán cho accumulator ở lần chạy đầu tiên
//tham số trong callback: 1. biến lưu trữ, 2. giá trị hiện tại 3. chỉ số hiện tại 4. originArray
//accumulator nhận giá trị return của callback
//currentValue: phần tử mảng tại chỉ số hiện tại
//nếu không truyền inital value accumulator sẽ nhận ptu đầu tiên,currentValue sẽ từ ptu thứ 2 ,nếu mảng rỗng sẽ gây lỗi
var totalCoin = courses2.reduce(
  (accumulator, currentValue) => accumulator + currentValue.coin,
  0
);

console.log(totalCoin);

/*
    #Phương thức include trong Array và String
- dùng để kiếm tra trong mảng và chuỗi có chứa giá trị nào đó hay 0
- tham số 1. giá trị tìm kiếm 2. vị trí bắt đầu
*/
