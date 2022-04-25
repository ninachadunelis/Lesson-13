// //1

// let  user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//    studentstatus: 'active'
//   };
//   console.log(user.studentstatus);

//   //2

//   let array1=[ 'nino', 23, 50, 40, 'tornike', 'nana'];
//   for( let items of array1){
//       console.log(items);
//   }
  
//   let i=0;
//   while(i<array1.length){
//       console.log(array1[i])
//       i++;
//   }

//   //3
//   let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
//   for(let items of numbers){
//       if(items>5){
//         console.log(items);

//       }
     
//   }

//   //4

  
// let user20 = {
// 	name: 'giorgi',
// 	age:  20,
// 	studentstatus: 'active'
// }

// if(user20.age < 18 && user20.studentstatus == 'active'){
//     console.log('hello')
//  } else if (user20.name == 'giorgi'){
//      console.log('hello giorgi')
//  } else if (user20.studentstatus=='active' || user20.age <25){
//      console.log('hello world')

//  } else {
//      console.log ('error')
//  }

// //5
// let array2 = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
// for(let items of array2){
//     if(typeof items==='string' ){
//         console.log (items);
//     }
// }

// //6

// let array3 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
//   for(let x of array3){
//        for(let item of x){
//            if(item>0){
//                console.log(item);
//            }
//        }
//       }
      

// // 7
// let array4 = [32, 10, 'hello', null, 'hello2', 50 ]

// for(let x of array4){
//     if(x % 5 == 0){
//     console.log(x);
//     }
    
// }
// //  function 1

// function number (...args){
//      let sum=0;
//     for (let item of args){
//         if(item > 0){
//             sum+=item;
            
//         }
//     }
//     return sum;
// }

// let result=number(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);

// // function2

//  let result2=number(10, 50, 6, 7, 8, 11, 6, 3, 9);
//  console.log(result2);

// function3 
// let usergio = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   };
// function fullname(){
//     if(usergio.isloggedin == true){
//         return usergio.firstname + usergio.lastname ;
//     }else{
//         return false;
//     }

// }  

// let name_surname=fullname();
// console.log(name_surname);

//function 4
function Max(array5) {
    let maxValue=0

    for (let item of array5){
        if (item>maxValue){
            maxValue=item;
        }
    }
    return maxValue;
    
  }
  
  var max_arr = [44, 45, 67, -92, 100,410,304,555];
  
  console.log(Max(max_arr))
   

  
  