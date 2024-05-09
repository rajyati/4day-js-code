//*------------------------------------------
//* Interview Question 
//*------------------------------------------
 //? Write a function called checkTringleType that three paramerters representing the length of the sides of a tringle , the function should retrun a string indincating the type of tringle : " rquilateral", "isosceles",or "scalene" .
  

const checkTringleType = (a,b,c) =>{
    if(a==b && b==c ) return "equilateral ";
    if(a==b ||b==c|| a==c) return "isosceles";
    return "scalene";
}

 console.log(checkTringleType(5,5,5));
//output "equilateral"
console.log(checkTringleType (5,4,5));
//output " isosceles"
console.log(checkTringleType(5,8,7));
//output "scalene"

//todo the function should adhere to the following rules;
//? if all three side are equal length, retrun " equilateral"
//? If only two side are equal length , return "isosceles"
//? If all side three side have different lenghs, return "scalene"
