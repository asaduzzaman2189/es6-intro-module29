const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);//spread operator...

// const max = Math.max([23, 65, 99, 21, 34]);//ভুল
const max = Math.max(23, 65, 99, 21, 34);// বড় নাম্বার দেখার জন্য

// const maxInArray = Math.max(numbers);//ভুল, কারন array থেকে সরাসরি Math কাজ করে না। 
const maxInArray = Math.max(...numbers);//সঠিক , এখানে spread ব্যবহার করে নাম্বার গুলোকে (23, 65, 99, 21, 34) এভাবে আনা হয়েছে। 

// console.log(max, maxInArray);


const numbers2 = [22, ...numbers, 88];// ... spread ব্যবহার করলে মূল arary এর শুধু কপি হবে কিন্তু পরবর্তীতে যদি পুশ বা পপ করা হয় তবু পরিবর্তন হবে না। 
numbers.push(55);
console.log(numbers);
console.log(numbers2);

