 let addElement = (value) => {
  document.getElementById("screen").value += value;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let res = "";

   let operation = document.getElementById("screen").value;
  console.log(operation);
  
  




//obtencion de los números
//numero1
 let numero1 = [];
 for (let i = 0; i < operation.length + 1; i++){
   numero1[0] = operation[0];
   if (isNaN(operation[i + 1])){
    i = operation.length;
   }
   else{
     numero1.push(operation[i + 1]);
   }
 }
 let num1 = parseInt(numero1.join(""));
 


 //numero2
 let numero2 = [];
 for (let i = 0; i < operation.length; i++){
   if (isNaN(operation[i]) &&  isNaN(operation[i + 1])){
     if (operation[i + 1] == "+" || operation[i + 1] == "-") {
       numero2[0] = operation[i + 1]
    }
     }
  if (isNaN(operation[i + 1]) && !isNaN(operation[i + 2])){
     for(let j = 0; j < operation.length; j++){
       numero2.push(operation[i + j + 2]);
     }
   } 
   }
   let num2 = parseInt(numero2.join(""));


 //signo de operacion 
let sym = (ope) => {
let symbol = "";
for (let i = 0; i < operation.length - 1; i++){
  if (!isNaN(operation[i]) && isNaN(operation[i+1])){
    symbol = operation[i+1];
  }
}
return symbol;
}


//CASOS DE ERROR
//casos de error en entrada
let first_bug = (ope_first_bug) => {
let res = false;
  if (ope_first_bug[0] != "+" &&
    ope_first_bug[0] != "-" &&
    isNaN(ope_first_bug[0])
    ){
  res= true;
}
return res;
}


//casos de error el final 
let last_bug = (ope_last_bug) => {
let res = false;
if (isNaN(ope_last_bug[ope_last_bug.length - 1] )
    ){
  res = true;
}
return res
}


//error si falta 1 número
let other_bug1 = (n1, n2) => {
  let res = false;
  if (isNaN(n1) || isNaN(n2)){
    res= true;
  }
  return res;
}


//error si el segundo signo es incorrecto
  let other_bug2 = (ope) => {
    let res = false;
    for (let i = 0; i < ope.length; i++){
      if (isNaN(ope[i]) && isNaN(ope[i + 1])){
        if(ope[i + 1] != "+" && ope[i+1] != "-") {
          res = true;
        }
      }
    }
    return res;
  }


//error si hay 3 signos seguidos
  let other_bug3 = (ope) => {
    let res = false;
    for (let i = 0; i < ope.length; i++){
      if (isNaN(ope[i]) && isNaN(ope[i + 1]) && isNaN(ope[i + 2])){
          res = true;
      }
    }
    return res;
  }
 

// error si hay mas de 2 num
  let other_bug4 = (ope) => {
    let res = false;
    let cont = 0;
    for (let i = 0; i < ope.length; i++){
      if (!isNaN(ope[i]) && isNaN(ope[i+1]) ){
          cont++;
      }
    }
    if(cont > 2){
      res = true;
    }
    return res;
  }
  

//operaciones
let sumar = (n1, n2) => {return n1 + n2};
let restar = (n1, n2) => {return n1 - n2};
let multiplicar = (n1, n2) => {return n1 * n2};
let dividir = (n1, n2) => {
let res = null;
  if (n2 != 0){
   res = n1 / n2;
  }
  else{
    res = "Oh, no!!!"
  }
  return res;
}


//Programa
if(first_bug(operation) == false && last_bug(operation) == false && other_bug1(num1, num2) == false && other_bug2(operation) == false && other_bug3(operation) == false && other_bug4(operation) == false){
  
  if(sym(operation) == "+"){
     res= sumar(num1, num2);}
  if(sym(operation) == "-"){
     res= restar(num1, num2);}
  if(sym(operation) == "*"){
     res= multiplicar(num1, num2);}
  if(sym(operation) == "/"){
     res= dividir(num1, num2);}
}
else {res = "Oh, no!!!"}


document.getElementById("screen").value = res;

}











