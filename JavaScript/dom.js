//lấy element qua ID
var headingNode = document.getElementById("dom-h1");

//Lấy elements qua Class name
var nodes = document.getElementsByClassName("abc");

//Lấy elements qua Tag name
var nodes2 = document.getElementsByTagName("h1");

//Lấy elements qua CSS selector
var selector = document.querySelector("#dom-h1");

//Lấy ra các form trong DOM
var formsN = document.forms;
console.log(formsN);

console.log(headingNode);

var list = document.querySelectorAll(".box-1 ul li");

console.log(list);

//DOM Attributes
var headingElement = document.querySelector("h1");

//Thêm attribute vào element
headingElement.title = "heading";
headingElement.setAttribute("class", "heading");

//Lấy giá trị của Attribute
console.log(headingElement.getAttribute("class"));

//Truy cập vào text element
//1. innertext: trả về nội dung giống trên trình duyệt
//2. textContent:
// +Trả về toàn bộ văn bản của phần tử, bao gồm cả nội dung ẩn (ẩn qua CSS).
// + Bao gồm tất cả các nút con, nhưng không bao gồm các thẻ HTML.
headingElement.innerText = "new heading";
headingElement.textContent = "new heading";

//THêm element vào element
//inner HTML: truy cập vào tất cả các thẻ, text bên trong element
//outerHTML: truy cập vào chính element hiện tại

var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1>Heading</h1>";
console.log(boxElement.outerHTML);
