// var user = { name : "Tara" , age : 23};
// var nameVar = user.name;
// var ageVar = user.age;
// console.log("name:" +nameVar +"\nage:" + ageVar);


// function add( num1 , num2){
//     var sum = num1+num2;
//     return sum;
// }
//   var result= add(1,2);
//   console.log("result="+ result);

// var user = {
//    name : "Tanvi", age : 14,
//    display : function(){
//     console.log(this.name+ ' '+ this.age);
//    }
  
// }
// user.display();




// function method(){
//   if(true){
//     let i = 10;
//    // i++;ij
//   }
//   console.log("i="+i);
// }
// method();


// function add (... args){
//   let result = 0;
//   for( let iterated of args){
//     result = result+ iterated;
//   }
//    return result;
// }
//  const result1 = add(1);
//  const result2 = add(1,2);
//  const result3 = add(1, 2,3,4);
 
//  console.log("result1 :"+ result1);
//  console.log("result2 :"+ result2);
//  console.log("result3 :"+ result3);


// function add(num1,num2){
//   return num1 +num2;
// }
//  function addused(callback, num1,num2){
//   const result = callback(num1,num2);
//   return result;
//  }
//  const result =addused(add,1,2);
//  console.log(`result = ${result}`);

// function add(num1,num2){
//     return num1 +num2;
//   }
//    function addused(Bhaska, num1,num2){
//     const result = Bhaska(num1,num2);
//     return result;
//    }
//    const result =addused(add,1,2);
//    console.log(`result = ${result}`);
// add->(num1, num2)


// arrowfun

// let add=(num1 ,num2)=>{
//   return num1+num2;
// }

// let mul = (num1,num2)=>num1*num2;

// const addResult =add(1,2);
// console.log("addResult:" +addResult);
// const mulResult =mul(1*2);
// console.log("mulResult:" +mulResult);

// const array=[1,6,2,3];
// //descending comparator
// // const compararator=(e1,e2)=>e2-e1
// array.sort((e1,e2)=>e1-e2);
// console.log(array);


// let array =[1,2,3,4];
// //const callback=e=>e+1;
//   const array2=array.map(Math.sqrt)
//   //console.log("e="+e);
//  // return e+1;


// console.log("original array:"+array);
// console.log("new array:"+array2);


// to string 

// const user = { name:"roy", age: 1};
// user.toString=()=>user.name+" -" + user.age;

// console.log("arg1:" + user);
// console.log("arg2:"+ user);


// class Employee{
//    static employeesCount=0;
//    constructor(id,name){
//     this.id=id;
//     this.name=name;
//     Employee.employeesCount++;

//    }
//    display(){
//     console.log(this.id+"-"+this.name);
//    }
   
// }
// const emp1= new Employee(1,"SS");
// const emp2= new Employee(1,"S2");

// console.log(emp1);
// console.log(emp2);
// console.log("employeeCount:"+Employee.employeesCount);


//inheritance

// class Product{
//    constructor(id, name){
//     this.id=id;
//     this.name=name;
//    }
// }

// class Phone extends Product {
//   constructor(os, id,name){
//     super(id,name);
//     this.os=os;
//   }
//   getOperatingSystem(){
//     return this.os;
//   }

//   display(){
//     console.log("os:"+ this.os+"-"+this.id+"-"+this.name);
//   }
// }

//  const product = new Phone("ios",2,"sj");
//  d= product.display();
//   const os = product.getOperatingSystem();
//   console.log(d);
//   console.log(product);

// function isEven(num) {
//   const executor = resolve.reject => {
     
//   }
// }

function calculateDateTime(){
  //if you want to stop interval
 const id = setInterval(()=>{
    const date =new Date();
    console.log("date="+date);
  },1000);
}
calculateDateTime();
clearInterval(id);

