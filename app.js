//Chapter no 25-30

// Answer no 1
// var num = +prompt("Enter the positive integer");
// document.write("Number: " + num + "<br>")
// var roundoff = Math.round(num)
// document.write("Round Off: " + roundoff + "<br>")
// var floor = Math.floor(num)
// document.write("Floor value : " + floor + "<br>")
// var ceil = Math.ceil(num)
// document.write("Ceil value : " + ceil)

// Answer no 2
// var num = +prompt("Enter the positive integer");
// document.write("Number: " + num + "<br>")
// var roundoff = Math.round(num)
// document.write("Round Off: " + roundoff + "<br>")
// var floor = Math.floor(num)
// document.write("Floor value : " + floor + "<br>")
// var ceil = Math.ceil(num)
// document.write("Ceil value : " + ceil)

// Answer no 3
// var value = prompt("Enter a number")
// var random = Math.abs(value)
// document.write("The absolute value of " + value + " is " + random)

// Answer no 4
// var num = Math.random();
// var diceno = (num  * 6) + 1;
// var numberOfdice1 = Math.floor(diceno);
// var diceno2 = (num  * 5) + 1;
// var numberOfdice2 = Math.floor(diceno2);
// document.write("Random Dice Value "+ numberOfdice1 + "<br>")
// document.write("Random Dice Value "+ numberOfdice2)

// Answer no 5
// var head = 1;
// var tail = 2;
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("1 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("2 <br> Random Coin Value: Tails")
// }

// Answer no 6
// var random_no = (Math.random() * 101) + 1;
// var floor = Math.floor(random_no)
// document.write("Random no between 1 and 100: " + floor);

// Answer no 7

// var weight =parseInt(prompt("Enter your weight in kilogram")); 
// document.write("The weight of the user is: " + String(weight));



// Answer no 8
// var random_no = (Math.random() * 10) + 1;
// var floor = Math.floor(random_no)
// var userinput = +prompt("Enter a no between 1 to 10")
// if(userinput === 6)
// {
//     alert("Congratulation")
// }
// else
// {
//     alert("Try Again! \nPrevent this page for additional dailogs")
// }

// Chapter no 31-34

// Answer no 1
// var now = new Date()
// document.write(now)

// Answer no 2
// var month_names = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
// var now = new Date();
// var month = now.getMonth();
// var name_of_month = month_names[month]
// alert("Current Month: " + name_of_month);

// Answer no 3
//  var Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  var now = new Date();
//  var Day = now.getDay();
//  var Present_Day = Day_Names[Day].slice(0,3);
//  document.write("Today is " + Present_Day)

// Answer no 4
// var Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var Day = now.getDay();
// var Present_Day = Day_Names[Day];
// if (Present_Day === "Saturday"){
//     document.write("It's Fun day")
// }else if(Present_Day === "Sunday"){
//     document.write("It's Fun day")
// }else if(Present_Day === "Monday"){
//     document.write("It's a busy day")
// }else if(Present_Day === "Tuesday"){
//     document.write("It's a boring day")
// }else if(Present_Day === "Wednesday"){
//     document.write("It's a bad day")
// }else if(Present_Day === "Thrursday"){
//     document.write("It's a good day")
// }else if(Present_Day === "Friday"){
//     document.write("It's a very good day")
// }

// Answer no 5
// var now = new Date();
// var Days = now.getDate();
// if(Days<=15){
//     document.write("first fifteen days of the month");
// }
// else{
//     document.write("last days of the month");
// }

// Answer no 6
// var now = new Date();
// var ms = now.getTime();
// var min = now.getTime()/60000;
// document.write("Current Date: " + now + "<br>");
// document.write("Elapsed milliseconds since january 1, 1970: " + ms +"<br>");
// document.write("Elapsed minutes since january 1, 1970: " + min);

// Answer no 7

// var now = new Date();
// var hrs = now.getHours();
// if(hrs = 0){
//     document.write("Midnight");
// }
// if(hrs >= 1 || hrs < 12){
//     document.write("its AM");
// }
// else{
//     document.write("its PM");
// }


// Answer no 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later date:"+laterDate+"<br>");

// Answer no 9
// var Given_Date = new Date("June 18, 2015");
// var now = new Date();
// var today_sec = now.getTime();
// var past_sec = Given_Date.getTime();
// var diff = today_sec - past_sec ;
// var Days = diff / (1000 * 60 * 60 * 24);
// var past_days = Math.floor(Days)
// document.write(past_days + " days have past since " + Given_Date + "<br>");


// Answer no 10
// var Given = new Date("Dec 05, 2015");
// var begin = new Date("Jan 01, 2015");
// var beg_time = begin.getTime();
// var Given_time = Given.getTime();
// var diff = Given_time - beg_time ;
// var secs = diff / (1000);
// var Final_sec = Math.floor(secs)
// document.write("On reference date "+ Given +", " + Final_sec + " Seconds had passed since the begining of 2015");

// Answer no 11
// var rightNow = new Date();
// var newd=rightNow.setHours()
// document.write("Current Date "+newd+"<br>")
// document.write("1 hour ago it was Date "+rightNow+"<br>")

// Answer no 12

// var present = new Date();
// document.write("Current Day: " + present + "<br>");
// var now = new Date();
// var pastYear = now.getFullYear() - 100;
// now.setFullYear(pastYear);
// document.write("100 year back,it was : " + now)


// Answer no 13
// var a = +prompt("Whats your age?")
// var present = new Date();
// var year = present.getFullYear()
// birth_year = year - a;
// document.write("Your age is " + a + "<br>");
// document.write("Your birth Year is "+ birth_year);


// Answer no 14
// var d= new Date();
// var monthlst = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
// monthnum=d.getMonth()
// var month = monthlst[monthnum];
// var namec=prompt("Please Enter Your Name?")
// var unitno=+prompt("Please Enter Your Number Of Units?")
// document.write("K-ElectricBill"+"<br>")
// document.write("Customer Name: "+ namec+"<br>")
// document.write("Month: "+month+"<br>");
// document.write("Number Of Units:"+unitno+"<br>");
// document.write("Charges Per Unit: 16"+"<br>");
// var payable=unitno*16
// document.write("Net Amount Payble (within Due Date):"+ payable+"<br>");
// document.write("Late Payment Surcharge: 350"+"<br>");
// var payabledue= payable+350
// document.write("Gross Amount Payble (after Due Date):"+ payabledue+"<br>");


// Chapter no 35-38


// Answer no 1
//  function Current_Date() {
//      var now = new Date();
//      document.write(now)
//      }
//      Current_Date();
    
// Answer no 2
// function Myfunction(){
//     var first = prompt("Enter your first name");
//     var last = prompt("Enter your last name");
//     alert("Hello " + first + " " + last)
// }
// Myfunction();

// Answer no 3
// function Addition(){
//     var a = +prompt("Enter a first no");
//     var b = +prompt("Enter a second no");
//     var c = a + b;
//     alert(c)
// }
// Addition();

// Answer no 4
// function Calculator(num1,num2,op){

//     if(op == "plus"){ 
//         result = num1 + num2;
//         document.write("The Result is " + result)
//     }
//     else if(op == "multiply"){
//         result = num1 * num2;
//         document.write("The Result is " + result)
//     }
//     else if(op == "minus"){
//         result = num1 - num2;
//         document.write("The Result is " + result)
//     }

// }
// Calculator(2,20,"plus");

// Answer no 5
// function Square(num1,num2){
// alert("The Squares of Argument is " + num1 + " , " + num2)

// }
// Square(Math.pow(3,2),Math.pow(2,2))

// Answer no 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = 4;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// Answer no 7 

// function Counting()
// {
//     var firstno = +prompt("Enter a first no")
//     var secondno = +prompt("Enter a second no")
//     for(var i = firstno; i<=secondno; i++){
//         document.write(i + "<br>")
//     }
// }
// Counting()


// Answer no 10

// function checkPalindrome(str) {

 
//     var len = string.length;

//     for (var i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// var string = prompt('Enter a string: ');
// var value = checkPalindrome(string);
// document.write(value);
    

// Answer no 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("Example String:the quick brown fox <br>")
// document.write(uppercase("Expected String: " + " the quick brown fox"));

// Answer no 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// Answer no 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count("JSResourceS.com", "o"));

// Answer no 14
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumfrence is " + y + "."+ "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x + ".");
//   }
  
//   calcCircumfrence(20);
//   calcArea(10);


// Chapter no 38-42

// Answer no 01

// function varPower(a,b){
//     document.write(Math.pow(a,b));
// }
// varPower(2,3);

// Answer no 02

// function leapYear(){
//     var year=+prompt("Enter year: ");
//     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         document.write("leap year");
//     }
//     else{
//         document.write("not a leap year");
//     }
// }
// leapYear();



// Answer no 3
// function areas() {
//     var a = 5
//     var b = 5
//     var c = 6
//     var s
//     function inner() {
//         s = (a + b + c) / 2
//     }
//     inner()
//     var area = s * (s - a) * (s - b) * (s - c)
//     document.write(" side a = 5 side b = 3 side c = 2 <br> the are of triangle is " + area)
// }
// areas()



// Answer no 4

// function main() {

//     var a = +prompt("enter the first subject marks")
//     var b = +prompt("enter the 2 subject marks")

//     var c = +prompt("enter  the 3 subject marks")

//     var obt= a+b+c
//     document.write(" <H1>Mark sheet of  ali bahadur </h1> <br>")
//     function average() {
//         var average = (a+b+c)/2
//         return document.write( "math = " + a + " physics =" + b + "chemistry = "+ c + "<br>")
        
//     }
//     var ave = average()
//     function percentage() { 
//         var percentage =  ((a+b+c)/300)*100
//         document.write( "percentage is = " + percentage )

        
//     }
//     var per = percentage()

    
// }

// main()


// Answer no 5
// function index() {
//     var a = prompt("enter a letter")
//     var name = "alibahadur"
//     fir (var i=0 ; i<name.length ; i++){
//         var sel = name.charAt(i)
//         switch (true){
//             case ( input == sel)
//             document.write( "your character " + a + "on my sentence at index = " +i)
//             var i=num.length
//             case (i== name.length )
//             console.log ("-1")
//         }
//     }
// }
// index ()


// Answer no 6
// function remove() {

//     var a =prompt("enter the sentence")
//     var b 

//      b=a.replace(/[aeiou]/gi, '');

//      document.write(b)
//   }

//   remove()


// Answer no 7
// function findOccurrences() {
//     var str = "Pleases  read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
  
//   document.write("the count of vowels appearing twice is " + findOccurrences());


// Answer no 08

// var distanceInKm=+prompt("distance between two cities in km: ");
// function meters(){
//     var m=distanceInKm*1000;
//     document.write("meters: "+m+"<br>");
// }
// function feet(){
//     var m=distanceInKm*3281;
//     document.write("feet: "+m+"<br>");
// }
// function inches(){
//     var m=distanceInKm*39370;
//     document.write("inches: "+m+"<br>");
// }
// function centimeters(){
//     var m=distanceInKm*100000;
//     document.write("centimeters: "+m);
// }
// meters();
// feet();
// inches();
// centimeters();

// Answer no 09

// var empCount=1;
// while(empCount<=4){
// var workingHours=+prompt("enter working hours of employee "+empCount+ ": " );
// if(workingHours>40){
//     var overTime=workingHours-40;
//     var overTimePay=overTime*12;
//     document.write("employee no " +empCount+ " overtime pay is: " +overTimePay+ "<br>");
// }
// else{
//     document.write("employee no " +empCount+ " you have to work for more than 40 hours to get over time pay"+"<br>");
// }
// empCount++;
// }

// Answer no 10

// var amount= +prompt("enter amount to be withdrawn (in hundreds): ");
// var h=amount/100;
// var f=(amount%100)/50;
// var t=(((amount%100)%50)/10);
// var r=(((amount%100)%50)%10);
// document.write("notes of RS.100: "+h+"<br>");
// document.write("notes of RS.50: "+ f+"<br>");
// document.write("notes of RS.10: "+ t+"<br>");
// document.write("remaining amount: "+ r);