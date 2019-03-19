//Task 1
let value = prompt('Please enter value',"");

function convert(amount) {
    return amount * 8;
}

alert("It's " + convert(value) + " UAH");


//Task 2
let reversedString = prompt('Please enter string',"");

function reverse(str){
  let reversedStr = "";    
  for (let i = str.length - 1; i >= 0; i--){        
    reversedStr += str[i];
  }    
  return reversedStr;
}

alert (reverse(reversedString));


//Task 3
function printStairs(n){
	let newStair = '';
	let i = 0;
	do{
		newStair += '#';
		console.log(newStair);
		i++;
	} while (i<n)
	return newStair;
}
printStairs(4);


//Task 4
function sumRange(start, end) { 
    sum = 0; 
    while ( start <= end ) {
        sum += start; 
        start++;  
    }
    if (start=end) {
        console.log(sum)
    }
    return sum;
    
 }

 sumRange(2, 4) // 9  
 sumRange(-1, 3) // 5 
 sumRange(4, 8) // 30


//Task 5
function minValue(a,b,c) {
	if (a<b && a<c) {
		console.log(a);
	} else if (b<a && b<c) {
		console.log(b);
	} else {
		console.log(c);
	}
}
minValue(10,5,11);

function min(a, b, c) { 
  let minNumber = Math.min(a, b, c);
  console.log(minNumber);
}
min(10,5,11);


//Task 6
function printPyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = ``;
    for (let j = 1; j < (n-i); j++) {
      str = str + ` `;
    }
    for (let k = 1; k <= (2*i+1); k++){
      str = str + `#`;
    }
    console.log(str);
  }
}
printPyramid(5);


//Task 7
function firstAndLastToUpper(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1,str.length - 1) + str.charAt(str.length - 1).toUpperCase();
    console.log(result);
}
firstAndLastToUpper('hello');


//Task 8
function cursorCheck(str) {
	let res = str.toLowerCase()
	    let low_case1 = res.includes(`ostap`);
	    let low_case2 = res.includes(`cursor`);
	    let low_case3 = res.includes(`ironman`);
	if (low_case1 == true || low_case2 == true || low_case3 == true) {
	    console.log(true);
	} else {
	    console.log(false);
	}
}
cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false
cursorCheck('What about iRonMan?') //true


//Task 9
function toUppercase(str) {
  let newStr = '';
  for(let i = 0; i <= str.length-1; i++){
    newStr += str[i].toUpperCase();
  }
  console.log(newStr);
}
toUppercase('hello');


//Task 10
function removeDuplicationLetters(str) {
	let duplicate='';
	for (let i=0; i < str.length; i++) {
		if ( str[i] === ' ') {
			duplicate += str[i];
		}
		if (duplicate.toLowerCase().indexOf(str.toLowerCase().charAt(i)) == -1) {
			duplicate += str[i];
		}
	}
	return duplicate;  
}  
console.log(removeDuplicationLetters('Hello I am Iron Man'));


//Task 11
function fibonacci(n) { 
    let a = 1; 
    let b = 1;
	    for (let i = 3; i <= n; i++) {
	    	let c = a + b;
	    	a = b;
	    	b = c;
	    }
    return b;
 }
console.log(fibonacci(6));