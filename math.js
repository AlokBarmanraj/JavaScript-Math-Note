//---------JavaScript Math-------//


const num = 30;
console.log(num);

//Round Number//
const num1 = 30.986668785985;
console.log(Math.round(num1));     //Round Number মানে দশমিকের পরে সংখ্যা অনুযায়ি মান  {0-4} কোন পরিবর্তন হবে না {5-9} +1 বারবে //

//Ceil//
const num2 = 30.086668785985;
console.log(Math.ceil(num2));   // দশমিকের পরে যেই সংখ্যা থাকুুক না কেন +1 বাড়বে //

//Floor//
const num3 = 30.986668785985;
console.log(Math.floor(num3));     //দশমিকের পরে যেই সংখ্যা থাকুুক না কেন দশমিকের আগের সংখ্যা দেখাবে//


//Squre Value//
const numb = 2;
console.log(Math.pow(2, 2));

//Root Value//
console.log(Math.sqrt(81));

console.log(Math.abs(-6));     //মান নেগেটিভ  এবং পজেটিভ যেটাই হোক না কেন Output মান পজেটিভ হবে//

console.log(Math.min(1,2,3,4,5,6,7,8,9,0));  //Min Value মানে সবথেকে ছোট সংখ্যা //
console.log(Math.max(1,2,3,4,5,6,7,8,9,0));  //Max Value মানে সবথেকে বড় সংখ্যা //

//PI Man //
console.log(Math.PI);      

console.log(Math.sin((90*Math.PI)/180));   // Sin 0,30,45,60,90 Degree  মান বের করতে //
console.log(Math.cos((90*Math.PI)/180));    // cos 0,30,45,60,90 Degree  মান বের করতে//

// Random //
console.log(Math.random());        //Refresh সাথে সাথে দশমিকের পর Random নাম্বার দেখতে //

console.log(Math.random().toFixed(3));    //Refresh সাথে সাথে দশমিকের পর 3 Random নাম্বার দেখতে  (toFixed পর যত সংখ্যা সেই পরিমান দশমিকের পর সংখ্যা)//

console.log(Math.random().toFixed(3)*10);     //Refresh সাথে সাথে দশমিকের আগে পূর্ণ সংখ্যা দেখতে  (toFixed(3)পর যত সংখ্যা দিয়ে গুণ করবেন তার নিচের সংখ্যা গুলো দেখাবে//

console.log(Math.random().toFixed(3)*10+1);    //Refresh সাথে সাথে দশমিকের আগে পূর্ণ সংখ্যা দেখতে  (toFixed(3)পর যত সংখ্যা দিয়ে গুণ করবেন তার সাথে +1 করলে যত সংখ্যা দিয়ে গুণ করবেন সেই সংখ্যা পর্যন্ত দেখাবে//

console.log(Math.floor(Math.random().toFixed(4)*10+1));    //Refresh সাথে সাথে দশমিকের পর কোন সংখ্যা না দেখতে চাইলে//


const upperValue = 6;
const lowerValue = 1;
const result = Math.ceil(Math.random()*upperValue);  //Console করবে//
console.log(result);



//LUDO Event//
function ludoEvent(){
    const randomNumber = Math.floor(Math.random()*6)+1;
    const imageSource = 'img/' + randomNumber + '.png';
    document.getElementById('ludo').src=imageSource;
}
 











