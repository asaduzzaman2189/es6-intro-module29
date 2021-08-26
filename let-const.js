

// পরবর্তিতে আমরা var ব্যবহার করব না। শুধু let এবং const ব্যবহার করব। 

let balance = 1240;
balance = 1340;
const userName = 'janpakhi potas potas';
const weTogether = 'ami' + userName;
console.log(weTogether);
// userName = 'moyna pakhi';//TypeError: Assignment to constant variable.

// array তে const ব্যবহার- 
const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 3];//const এর ভেরিয়েবল re-assign করা যাবে না। TypeError: Assignment to constant variable.
numbers.push(555);//allowed
numbers[1] = 333;//allowed

let sum = 0;//sum এর মান পরিবর্তন হচ্ছে তাই let ব্যবহার করতে হবে। 

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);//allowed
    sum = sum + number;
}


//object এর ক্ষেত্রে- 
const student = { roll: 101, name: 'Mofij', job: 'intern' };
student.name = 'Mofazzol';//allowed
// student={name:'Mofazzol'};// not allowed

