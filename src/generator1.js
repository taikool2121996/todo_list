/*
console.log('learning generator function');

function* helloGeneratorFunction() {
  // cau lenh 1
  yield 2019;
  // nhap vao va chay tiep
  // cau lenh 2
  return 'Tu hoc lap trinh redux-saga'; // kết thúc hàm.
  yield 2020; // ko thể thực thi tiếp
}

const result = helloGeneratorFunction(); //iterator

console.log('result1: ', result.next()); // 2019 - done: false
console.log('result2: ', result.next()); // Tu hoc lap trinh redux-saga - done: true
console.log('result3: ', result.next());

//console.log('result1: ', helloGeneratorFunction().next()); // 2019 - done: false
//console.log('result2: ', helloGeneratorFunction().next()); //2019 - done: false
// mỗi lần gọi hàm next() thì sẽ tạo ra 1 iterator mới ( 2 tasks riêng biệt )
*/