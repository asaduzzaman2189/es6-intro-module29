// যদি দুইটি প্যারামিটারের একটি মান না দিয়েই কল করা হয় তবে যেটি পাবে না সেটি undefined দেখাবে। তাই যদি একটির মান না দেয়া হয় তবে সেটিকে ফাংশনের প্যারামিটারে ডিফল্টভাবে একটা মান দেয়া যায়। 

//first
function add(num1, num2 = 33) {
    //option2
    // num2 = num2 || 0;

    //option1
    /*  
     if (num2 == undefined) {
         num2 = 0;
     }
      */
    const total = num1 + num2;
    return total;
}
const result = add(10, 0);
console.log(result);// output 10 দেখাবে কারন যখন দ্বিতীয়টির মান দেয়া হবে তখন ডিফল্ট আর কাজ করবে না। 

//second 
function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

