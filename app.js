// Mảng - Array

// let a = 10
// let b = 20
// let c = 30

// let arr = [10,20,30]

// Cú pháp khai báo array

// const arrName = [1, 2, 3, 4, 5, 6];
// console.log(arrName);

// term
// value, index, length
// const arrName = [1, 2, 3, 4, 5, 6];
// index:   0  1  2  3  4  5 length-1
// console.log(arrName);

// const arrName = new Array("1,2,3,4,5");

// Mảng 1 chiều

// const arrName = [1, 2, 3, 4, 5, 6];
// Các truy cập vào mảng
// console.log(arrName[1]);

// Mảng 2 chiều

// let arr = [
//   [0, 1, 0],
//   [0, 1, 0],
//   [1, 1, 1],
// ];

// console.log(arr[0][1]);

// Làm việc với mảng
// CRUD - Create / Read / Update / Detele

// Read-one

// const number = [1, 2, 3, 4, 5, 6];
// console.log(number[3]);

// Read-all

// const number = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// Update-one
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// number[2] = 8;
// console.log(number);

// Update-all
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// for (let i = 0; i < number.length; i++) {
//   number[i] += 2;
// }
// console.log(number);

// Create
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// Để thêm giá trị mới vào trong mảng, chúng ta sử hàm có sẵn
// Create-first
// number.unshift(123);
// console.log(number);

// Create-last
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// number.push(123);
// console.log(number);

// Delete
// Delete first
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// number.shift();
// console.log(number);

// Delete last
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// number.pop();
// console.log(number);

// Xóa dựa vào chỉ số index
// .splice(index, amount)
// index: Chỉ số index của phần tử
// amount: số lượng phần tử muốn xóa bắt từ index

// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);
// number.splice(1, 0, 8, 9, 7);
// console.log(number);

// for...of và for...in
// for...of lấy các giá trị trong mảng

// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);

// for (const i of number) {
//   console.log(i);
// }

// const number = [1, 2, 3, 4, 5, 6];
// console.log(number);

// for (let i of number) {
//   i += 2;
//   console.log(i);
// }

// for...in
// Lấy các chỉ số index của mảng
// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(number);

// for (const i in number) {
//   console.log(i);
// }

// Các hàm có sẵn làm việc với mảng

// const number = [1, 2, 3, 4, 5, 6, 7, 8];

// function (Hàm)

// const arr = number.map((e) => e * 2);
// console.log(arr);

// Gợi ý
// Bài 1: tìm hiểu hàm join
// Bài 2: tìm hiểu hàm join

// let str = "The Quick Brown Fox";
// const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const LOWER = "abcdefghijklmnopqrstuvwxyz";
// const result = [];

// for (let i = 0; i < str.length; i++) {
//   if (UPPER.includes(str[i])) {
//     result.push(str[i].toLowerCase());
//   } else if (LOWER.includes(str[i])) {
//     result.push(str[i].toUpperCase());
//   } else {
//     result.push(str[i]);
//   }
// }

// console.log(result.join(""));

// Bài 1:

// myColor = ["Red", "Green", "White", "Black"];

// output:
// Red, Green, White, Black
// Red + Green + White + Black

// console.log(myColor.join(" + "));

// Bài 2: Viết chương trình JavaScript chấp nhận một số
// làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn.
// Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là 0-254-6-8.

// let a = prompt("Nhập giá trị"); // cho người dùng nhập vào
// let b = a.split(","); // xóa đi dấu phẩy giữa các phần tử

// for (let i = 0; i < b.length; i++) {
//   console.log(b[i]);
// }

// Bài 3: Gợi ý

// let str = "The Quick Brown Fox";
// let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
// let lower = "qwertyuiopasdfghjklzxcvbnm";
// let arr = [];

// includes()
// tolowercase()
// touppercase()
