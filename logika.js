let a = true;
let b = false;
let c = true;
let d = false;
console.log(a); // true
//OR = Jika salah satu benar hasilnya ikut benar
console.log(a || b); // true
console.log(d || b); // false
console.log(d || b || a); //true
//AND = Jika salah satu salah hasilnya ikut salah
console.log(a && b && c);

let x = 8;
let y = 7;
console.log(x>y); //true
console.log(x<y); //false
console.log(x==y);//false
console.log(x>=y);//true
console.log(x<=y);//false

let lima = 5;
let five = "5";
console.log(lima==five); // true
console.log(lima===five); // false