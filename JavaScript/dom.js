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

// var boxElement = document.querySelector(".box");
// boxElement.innerHTML = "<h1>Heading</h1>";
// console.log(boxElement.outerHTML);

// #DOM events
// 1. Attribute events
// 2. Assign event using the element node

var h1Element = document.querySelector(".box-1");

var inputElement = document.querySelector("input[type='text']");
console.log(inputElement);

//Lấy ra value của input
inputElement.onchange = (e) => {
  console.log(e.target.value);
};

var inputElement1 = document.querySelector("input[type='checkbox']");
console.log(inputElement1);
//Lấy ra value của input
inputElement1.onchange = (e) => {
  console.log(e.target.checked);
};

var inputElement2 = document.querySelector("select");
console.log(inputElement);
//Lấy ra value của input
inputElement2.onchange = (e) => {
  console.log(e.target.value);
};

//DOM events
//1. preventDefault: sử dụng để ngăn chặn hành vi mặc định của trình duyệt
//cú pháp: event.preventDefault
//sử dụng: ngăn chặn chuyển hướng khi nhấp vào liên kết, ngăn form gửi đi khi nhấn submit, ngăn menu chuột phải...

var aElements = document.links;
console.log(aElements);
for (let i = 0; i < aElements.length; i++) {
  aElements[i].onclick = (e) => {
    console.log(e.target.href);

    if (!e.target.href.startsWith("https://fullstack.edu.vn")) {
      e.preventDefault(); //ngăn chuyển trang
    }
  };
}

//2. stopPropagation:  được sử dụng để ngăn sự kiện lan truyền (propagation) đến các phần tử khác trong DOM.
//cú pháp: event.stopPropagation();
/**
 * Khi gọi event.stopPropagation() trong một sự kiện:
+ Sự kiện sẽ không tiếp tục lan truyền lên các phần tử cha (trong giai đoạn nổi) hoặc xuống các phần tử con (trong giai đoạn bắt).
+ Tuy nhiên, sự kiện hiện tại vẫn tiếp tục thực thi trên phần tử hiện tại.
 */

//DOM Event Listener
var btnElement = document.querySelector("#btn");
//addEventListener
//arg 1: loại event
//arg 2: sự kiện, nếu sử dụng Arrow function thì không thể gỡ bỏ vì k có tham chiếu cụ thể nào
btnElement.addEventListener("click", (e) => {
  console.log("click btn");
});

btnElement.addEventListener("click", (e) => {
  console.log("click btn2");
});

//removeEventListener
//arg 1: loại event (bắt buộc)
//arg 2: sự kiên muốn gỡ (bắt buộc)
setTimeout(() => {
  btnElement.removeEventListener("click");
});
