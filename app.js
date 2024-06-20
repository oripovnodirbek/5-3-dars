//  RECURSIVE function:  3 ta qismdan iborat funcksiyani funksiya ochish, ichida chaqirish, toxtatish, 
//  misol
// function recur(a) {
//     if(a == 0) {
//         return 1;
//     };
//     return a*recur(a-1)
// }
// console.log(recur(5))


//   CONSTRUCTOR function : bir xil tuzulishli objlarni 1 qator kod bilan yasashda yordam beradi.


//   JSON : bu malumot otkazuvchi hisoblanadi json farmatida olishi va uzatishi mumkin.
               

//  OBJECT metodh: obj.keys,  obj.vlues, obj. entries,  obj.freeze.

// let banan = {
//     name : "american",
//     year : 1991,
//     color: "yellow",
// }
// let test = Object.keys(banan)
// console.log(test)


// let banan = {
//     name : "american",
//     year : 1991,
//     color: "yellow",
// }
// let test = Object.value(banan)
// console.log(test)

// let banan = {
//     name : "american",
//     year : 1991,
//     color: "yellow",
// }
// let test = Object.entries(banan)
// console.log(test)

                //   MASALALAR


// 1
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function masala1(arr) {
//     return result = arr.map(function(value) {
//         return {name: value.name, age: value.age}
//     });
// }
// console.log(masala1(students))

//  2  bu masalani ishlashda ozroq qiynaldm albatt organib olaman
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function masala2(arr) {
    
// }
// console.log(masala2(students))

// 3
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
// function masala3(arr) {
//     return result = arr.filter(function(value) {
//         return value.name.startsWith('A')
//     });
// };
// console.log(masala3(students))

//  4 
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function masala4(arr) {
//     let yigindi = arr.reduce((sum, value) => sum + value.score, 0)
//     return yigindi / students.length
// }
// console.log(masala4(students))

//  5
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
// function masala5(students) {
//     let sum = students.find(function(value) {
//          return value.name.startsWith('John')
//     })
//     return sum
// }
// console.log(masala5(students))

//  6
// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// function masala6(arr) {
//       let result = arr.findIndex(value => value.score > 85);
//       return result
// }
// console.log(masala6(students))

//  7
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function masala7(arr) {
//      let result = arr.filter(value => value.status == "active")
//      return result
// }
// console.log(masala7(students))

//  8 
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];

// function masala8(arr) {
//        let result = arr.every(value => value.age > 18)
//        return result;
// }
// console.log(masala8(students))

//  9
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function masala9(students) {
//     let result = students.some(value => value.score > 90)
//     return result
// }
// console.log(masala9(students));

// 10
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];
// function masala10(sum1, sum2) {
//     let result = sum1.concat(sum2)
//     return result
// }
// console.log(masala10(students1, students2));

//  11
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Alice', age: 23, score: 88, status: 'active' }
//   ];
// function masala11(students) {
//     let result = students.filter(value => value.name == 'Alice')
//     return result
// }
// console.log(masala11(students));

//  12
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// function masala12(arr) {
//     let result = arr.map(function(value) {
//     return {name: value.name.toUpperCase(),
//         age: value.age,
//         score: value.score,
//         status: value.status,
//     }
//     })
//     return result
// }
// console.log(masala12(students));

//  13 
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function masala13(arr) {
//     return arr.map(value => value.score)
// }
// console.log(masala13(students));

//  14 
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' }
//   ];
// function masala14(arr) {
//        if(arr.length == 0) {
//         return [];
//        }
//        return Object.keys(arr[0])
// }
// console.log(masala14(students));

//  15
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function masala15(arr) {
//     return arr.concat(newStudent)
// }
// console.log(masala15(students));

//  17 
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function masala17(students) {
//       let result = students.map(function(value) {
//         if(value.age > 20) {
//             return  value.yosh = '20 yoshdan katta'
//           } else {
//             return value.yosh = '20 yoshdan kichik'
//           }
//       });
//       return result
// }
// console.log(masala17(students));

//  18
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// function masala18(students) {
//     let statuses = [];

//     students.forEach(student => {
//       statuses.push(student.status);
//     });
  
//     return statuses;
// };
// console.log(masala18(students));

//  19 albatta organib olaman

//  20
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];
// function masala20(students) {
//     let result = students[0];
//     for (let i = 1; i < students.length; i++) {
//       if (students[i].age < result.age) {
//         result = students[i];
//       }
//     }
//     return result;
// }
// console.log(masala20(students));