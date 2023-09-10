let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
x=""
let button = document.getElementById("calculate")
let result = document.getElementById("result");


function countA (b, c){
   return Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
}

function countB (a, c){
   return Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2));
}

function countC (a, b){
   return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function pressButton() {
   let aValue = parseFloat(a.value);
   let bValue = parseFloat(b.value);
   let cValue = parseFloat(c.value);

   if (isNaN(aValue) && !isNaN(bValue) && !isNaN(cValue)) {
     result.innerText = countA(bValue, cValue);
   } else if (!isNaN(aValue) && isNaN(bValue) && !isNaN(cValue)) {
     result.innerText = countB(aValue, cValue);
   } else if (!isNaN(aValue) && !isNaN(bValue) && isNaN(cValue)) {
     result.innerText = countC(aValue, bValue);
   } else if (isNaN(aValue) || isNaN(bValue) || isNaN(cValue)) {
     result.innerText = "Please enter valid numeric values for a, b, and c.";
   }
}




button.addEventListener("click", pressButton)