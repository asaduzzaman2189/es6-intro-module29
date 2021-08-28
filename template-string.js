const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`; // ES6 new code
const multiLine = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here.\n' +
    'fourth line text here.';
console.log(multiLine);

//same 
const multiLineNew = `this is multi line
this is second line
this is third line
this is fourth line`


const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;//notun niyom, ei niyomei sob korte hobe. 


const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is' + first + ' ' + last;//old

const fullNew = `This persion name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}.He lives in Dhaka.`;//new
console.log(fullNew);

