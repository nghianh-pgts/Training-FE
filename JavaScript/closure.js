function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
  }

  return increment;
}

// count1() = increment() trong createCounter
const count1 = createCounter(); //tạo phạm vi createCounter

console.log(count1()); // 1 //tăng counter lên 1
console.log(count1()); // 2 //Nhớ được phạm vi của createCounter nên counter được nhớ là 1 và tăng lên 2
console.log(count1()); // 3 //Nhớ được phạm vi của createCounter nên counter được nhớ là 2 và tăng lên 3

//ví dụ viết code ngắn hơn

function createLogger(namespace) {
  function logger(message) {
    console.log(`${namespace} ${message}`);
  }

  return logger;
}

// ===========Ap =====================

//register

const infoLogger = createLogger("INFO"); //Tạo phạm vi createLogger
infoLogger("This is an info message");
infoLogger("This is another info message");

const errorLogger = createLogger("ERROR"); //Tạo một phạm vi createLogger khác
infoLogger("This is an Error message");
infoLogger("This is another Error message");
