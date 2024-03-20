var styles = [ "джаз" , `блюз`] ;
var stylesplus = styles.push(`рон-н-ролл`);
console.log(styles)

 var styles =  [`джаз`, `блюз`,`рон-н-ролл`] ;
 var position = parseInt(styles.length /2);
 var remove = styles.splice( position, 1, `классика`);
 console.log(styles)



var styles = [`джаз`, `блюз`,`рон-н-ролл`] ;
var shifted = styles.shift();
console.log( styles);
console.log('Удалён этот элемент: джаз');

var styles = [`джаз`, `блюз`,`рон-н-ролл`] ;
var stylesplus = styles.unshift(`Реп`, `Реггі`);
console.log(styles)



var age = prompt ("Введите свой возраст")
var checkAge = age >= 18  ? `true` : `Родители разрешили?`
 console.log(checkAge)


function map(fn,arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(square(arr[i]));
    }
    return newArr;
}
function square(x) { return x * x; } 
12
console.log(map(square, [1,2,3,4]));
      
   
       
   
   