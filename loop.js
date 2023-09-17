let mulai = 0, selesai =10;

while (mulai <= selesai) {
    console.log(mulai);
    mulai++; //decrement mulai
} // output 0.1.2.3.4.5.6.7.8.9.10

let start = 0, finish=10;

do {
    console.log(start);
    start++; //decrement start wajib ada di setiap loop
}while(start < finish); // output 0,1,2,3,4,5,6,7,8,9

let awal = 10;
let akhir = 25;

for (awal; awal<=akhir; awal++) {
    console.log(awal);
} // output 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25

console.log(`======================`);
for (let i=0; i<10; i+=2) {
    console.log(i); // output 0,2,4,5,6,7,8
}
