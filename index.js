// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "Heitamienkatu 16",
//     pobox: 2002,
//     city: "Helsinki",
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
//   },
// };

// //Object methods: Object.assign, Object.keys, Object.values, Object.entries
// //hasOwnProperty

// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);
// const values = Object.values(copyPerson)
// console.log(values)
// const entries = Object.entries(copyPerson)
// console.log(entries)
// console.log(copyPerson.hasOwnProperty('name'))

// class Person {
//   constructor(
//     firstName = "Asabeneh",
//     lastName = "Yetayeh",
//     age = 250,
//     country = "Finland",
//     city = "Helsinki"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }
// const person1 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// const person = new Person();
// console.log(person, person1);

// class MathOperations {
//     // static method
//     static add(x, y) {
//       return x + y;
//     }

//     // normal method
//     multiply(x, y) {
//       return x * y;
//     }
//   }

//   // static method doğrudan sınıf üzerinden çağrılır
//   const result1 = MathOperations.add(5, 3);
//   console.log(result1); // Çıktı: 8

//   // normal method için sınıf örneği oluşturulması gerekir
//   const calculator = new MathOperations();
//   const result2 = calculator.multiply(5, 3);
//   console.log(result2); // Çıktı: 15

// class People {
//   #gender;
//   #name;
//   // constructor(name, age, gender) {
//   //   this.name = name;
//   //   this.age = age;
//   //   this.#gender = gender;
//   //   this.info = "";
//   // }

//   set setInfo(name) {
//     return (this.#name = name);
//   }
//   get getInfo() {
//     return `my name is ${this.#name}`;
//   }
//   // getInfo() {
//   //   return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.#gender}`;
//   // }
// }

// const kamran = new People();
// kamran.setInfo = "kamran";
// console.log(kamran.getInfo);
// console.log(kamran.#gender);
// console.log(kamran.getInfo());

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") + ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     return skills[index];
//   }
//   static showDateTime() {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let date = now.getDate();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     let dateMonthYear = date + "." + month + "." + year;
//     let time = hours + ":" + minutes;
//     let fullTime = dateMonthYear + " " + time;
//     return fullTime;
//   }
// }

// class Student extends Person {
//   saySomething() {
//     console.log("I am a child of the person class");
//   }
// }

// const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
// console.log(s1);
// console.log(s1.saySomething());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo());

// class Person {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   getName() {
//     return this.#name;
//   }
//   setName(name) {
//     this.#name = name;
//     return this.#name;
//   }
// }

// const existing = { a: 1, b: 2, c: 3 };
// const clone = Object.assign({}, existing);
// console.log(clone);

// var obj = { };
// Object.defineProperty(obj, 'foo', { value: 'gfnnfndg' });
// console.log(obj.foo);










