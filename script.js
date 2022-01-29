console.log("Hallo JS");

// Let & Const
// let city = "Bandung"
// let state = "Jawabarat"
// state = "Jawa Timur"
// let address = city + ' ' + state
// console.log(address)

// const nilai = 10
// nilai = 5
// console.log(nilai)

// let angka = 5 // Global Scope
// if (true) {
//   let angka2 = 10
//   console.log(angka, 'test')
// }
// console.log(angka)

// var i = 5;
// for (var i = 0; i < 10; i++) { // some statements
// }
// console.log (i)
// // Disini i adalah 10

// const j = 5;
// for (let j = 0; j < 10; j++) {
//   const j = 'hello'
//   // some statements
//   console.log(j)
// }
// console.log(j)

// const name = 'john'
// const age = 24

// if (true) {
//   age = 25
// }

// console.log(name)
// console.log(age)

// template literal
// ``
// ${nama_variable}

// const name = 'John'
// const lastname = 'Due'

// const fullname = name + ' ' + lastname
// const fullname6 = `${name} ${lastname}`

// console.log(fullname)
// console.log(fullname6)

// const penjumlahan = `1 + 1 = ${1 - 4}`
// console.log(penjumlahan)

// const people = {
//   name: "John",
//   lastName: "Due",
//   age: 25,
// };
// const text = `Nama saya ${people.name}, nama panjang saya ${people.lastName} umur saya ${people.age} tahun`;
// console.log(text)

// const cars = ['bmw', 'nissan']
// const text2 = `Mobil saya ${cars[0]}`
// console.log(text2)

// function getName() {
//   return text
// }

// console.log(`ini duplikat ${getName()}`)

// ARRAY HELPER

// foreach
// definisi :fungsinya mirip2 loop
// const colors = ['blue', 'green', 'red']
// colors.forEach(function (value) {
//   console.log(value)
// })

// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "Steve" },
//   { id: 3, name: "Michael" },
// ];
// users.forEach(function (user) {
//   console.log(user);
// });

// // map;
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(function (number) {
//   return number * 10;
// });
// console.log(doubled, "map");

// // foreach
// let numbers2 = [1, 2, 3, 4];
// const newArray = []
// numbers2.forEach(function (value) {
//   newArray.push(value * 10)
// })
// console.log(newArray, 'foreach');

// map
// const peoples = [
//   { name: "Mark", age: 10, gender: "L" },
//   { name: "Dina", age: 20, gender: "P" },
//   { name: "Bob", age: 30, gender: "L" },
//   { name: "Putri", age: 30, gender: "P" },
// ];

// const newPeoples = peoples.map(function (value) {
//   return {
//     fullname: value.name,
//     age: `${value.age} tahun`,
//   };
// });

// console.log(newPeoples, "map");

// const newArrayPeoples = []
// peoples.forEach(function (value) {
//   newArrayPeoples.push({
//     fullname: value.name,
//     age: `${value.age} tahun`
//   })
// })
// console.log(newArrayPeoples, 'foreach');
// console.log(newArray, 'foreach');

// // filter
//definisi : menyaring data dari arry / objek
// const peoples = [
//   { name: "Mark", age: 10, gender: "L" },
//   { name: "Dina", age: 20, gender: "P" },
//   { name: "Bob", age: 30, gender: "L" },
//   { name: "Putri", age: 30, gender: "P" },
// ];

// const filterPeople = peoples.filter(function (value) {
//   return value.age > 10 && value.gender === "P";
// });
// console.log(filterPeople);

// find
// mirip filter, tapi proses dihentikan bila sudah ketemu 1 dan tidak di lanjutkan lg
// const peoples = [
//   {name: 'Mark', age: 10, gender: 'L'},
//   {name: 'Dina', age: 20, gender: 'P'},
//   {name: 'Bob', age: 30, gender: 'L'},
//   {name: 'Putri', age: 30, gender: 'P'},
// ]

// const filterPeople = peoples.find(function (people) {
//   return people.age > 10 && people.gender === 'P'
// })
// console.log(filterPeople)

// // findIndex
// const peoples = [
//   {name: 'Mark', age: 10, gender: 'L'},
//   {name: 'Dina', age: 20, gender: 'P'},
//   {name: 'Bob', age: 30, gender: 'L'},
//   {name: 'Putri', age: 30, gender: 'P'},
// ]

// const filterPeople = peoples.findIndex(function (value) {
//   return value.name === 'Mark'
// })
// console.log(filterPeople)

// every / some => boolean

// const computers = [
//   {name: 'Apple', ram: 24},
//   {name: 'Asus', ram: 8},
//   {name: 'Lenovo', ram: 16},
// ]

// const every = computers.every(function (value) {
//   return value.ram > 8
// })

// const some = computers.some(function (value) {
//   return value.ram > 30
// })

// console.log(every)
// console.log(some)

// reduce

// const myArray = [1, 2, 3, 4, 5];
// const result = myArray.reduce(function(acc,val){
//   console.log(acc);
//   console.log(val);
//   console.log("-------------------------------")
//   return acc + val;
// },100);
// console.log(result);

// 100
// 1 + 100 => 101
// 2 + 101 => 103
// 3 + 103 => 106

// const peoples = [
//   {name: 'Mark', age: 10, gender: 'L'},
//   {name: 'Dina', age: 20, gender: 'P'},
//   {name: 'Bob', age: 30, gender: 'L'},
//   {name: 'Putri', age: 30, gender: 'P'},
// ]

// const users = ['john', 'mark', 'bob']

// const reduceUsers = users.reduce(function (acc, user) {
//   console.log(acc)
//   // return acc.push({ name: user, gender: 'L'})
//   return [
//     ...acc,
//     { name: user, gender: 'L'}
//   ]
// }, [])

// acc = []
// ...acc = [], {name: 'john', gender: 'L'}
// ...acc = [{name: 'john', gender: 'L'}], {name: 'mark', gender: 'L'}
// ...acc = [{name: 'john', gender: 'L'}, {name: 'mark', gender: 'L'}], {name: 'bob', gender: 'L'}

// // console.log(reduceUsers)

// // spread operator

// const arr1 = [11, 12, 13]
// const arr2 = [16, 17, 18]
// const allArr = [...arr1, ...arr2]
// console.log(allArr)

// const peoples = [
//   {name: 'john', age: 20},
//   {name: 'due', age: 21},
// ]

// const andre = {
//   name: 'andre',
//   age: 24
// }

// const newPeoples = [...peoples, andre, {name: 'steven', age: 26}]
// console.log(newPeoples)

// const mahasiswa = [
//   { nama: "wahyu", umur: "25" },
//   { nama: "widi", umur: "24" },
// ];

// const {}

// class

// const test =

// class People {
//   constructor(name, age, nilai) {
//     this.name = name;
//     this.age = age;
//     this.nilai = nilai;
//     this.kkm = 80
//   }

//   getName() {
//     return this.name
//   }

//   getAge() {
//     return `umurnya : ${this.age} tahun`
//   }

//   checkLulus() {
//     return
//   }
// }

// const john = new People('john', 24)
// const steven = new People('steven', 24)

// console.log(john);
// // console.log(john.getAge());

// file 1 => sum()
// file 2 => sum()

// Rp.

// class Helper {

//   getRupiah(angka) {
//     return `Rp. ${angka}`
//   }

//   getSummary(carts) {
//     return
//   }
// }

// class Calculator {
//   constructor(angka1, angka2, operator) {
//     this.angka1 = angka1
//     this.angka2 = angka2
//     this.operator = operator
//   }

//   getSum() {
//     return `${angka1} ${operator} ${angka2}`
//   }
// }

// const penjumlahan = new Calculator(1, 2, '+')

// destructuring

// const colors = ['green', 'red', 'blue']
// const [green, red] = colors

// console.log(green)

// const people = {
//   name: 'john',
//   age: 24,
//   address: 'Bandung',
//   telp: '083487'
// }

// const { name, age, address } = people
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(telp)

// const mahasiswa = [
//   { nama: "wahyu", umur: "25" },
//   { nama: "widi", umur: "24" },
// ];

// const [user1, user2] = mahasiswa
// const {nama, umur} = user1

// console.log(user1)
// console.log(nama)
// console.log(umur)

// data storage
// localStorage

// set data
// // setItem => key => value
// localStorage.setItem('username', 'Stephen')
// localStorage.setItem('age', 24)
// // JSON.stringify
// // ['red', 'blue'] => "['red', 'blue']"
// localStorage.setItem('colors', JSON.stringify(['red', 'blue']))
// localStorage.setItem('user', JSON.stringify({ name: 'john', age: 24 }))

// // getItem
// const username = localStorage.getItem('username')
// const age = localStorage.getItem('age')
// const colors = JSON.parse(localStorage.getItem('colors'))
// const user = JSON.parse(localStorage.getItem('user'))
// console.log(username);
// console.log(age);
// console.log(colors);
// console.log(user);

// // removeItem atau clear()
// localStorage.removeItem('username')
// localStorage.clear()

const head = document.querySelector(".head");
console.log(head);
console.log(head.innerHTML);

const text = document.createElement("div");
