
// Zadacha N1
// let findDaysInMonth = (month,year) => {
//     console.log(month,year)
//         if(month === 'February' && year % 4 === 0){
//             x = "The Month has 29 days";
//             return x;
//         }
//         else if(month === 'February' && year % 4 !== 0){
//             x = "The Month has 28 days";
//             return x;
//         }
//         else if(month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December'){
//             x = "The Month has 31 days";
//             return x;
//         }
//         else if(month === 'April' || month === 'June' || month === 'September' || month === 'November'){
//             x = "The Month has 30 days";
//             return x;
//         }
// }

// console.log(findDaysInMonth('February', 2016))
// ////////////////
// function findDaysInMonth(month, year) {
//     return new Date(year, month,0).getDate();
//   }
// console.log(findDaysInMonth(2016, 2))
  
// Zadacha N2
// let arr = ['+', '-', '*', '/'];
// let operator;
// do {operator = prompt('оператор (+, -, *, /)').trim()}
// while(!arr.includes(operator));
// let firstnumber
// do {firstnumber = prompt('What is your firstnumber?', '').trim()}
// while(isNaN(firstnumber));
// let secondnumber
// do {secondnumber = prompt('What is your secondnumber?', '').trim()}
// while(isNaN(secondnumber));
// if(operator == '/'){
//     let sum = (firstnumber / secondnumber);
//     if(firstnumber == 0 || secondnumber == 0){
//         sum = 0;
//         alert('На 0 делить нельзя')
//     }
//     console.log(sum)
// }
// else if(operator == '-'){
//     let sum = (firstnumber - secondnumber);
//     console.log(sum)
// }
// else if(operator == '+'){
//     let sum = (firstnumber + secondnumber);
//     console.log(sum)
// }
// else if(operator == '*'){
//     let sum = (firstnumber * secondnumber);
//     if(firstnumber == 0 || secondnumber == 0){
//         sum = 0;
//         alert('На 0 множить нельзя')
//     }
//     console.log(sum)
// }

// Zadacha N3
// function checkAnagram(word1,word2) {
//     if(word1.toLowerCase().split('').sort().join('') == word2.toLowerCase().split('').sort().join('')){
//         y = 'true'
//     }
//     else{
//         y = 'false'
//     }
//     console.log(y)
// }
// checkAnagram("sleep", "speel")
// checkAnagram("sLeEP", "speel") 
// checkAnagram("Hi", "Bye")
