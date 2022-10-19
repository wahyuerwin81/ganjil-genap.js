//TASK 1(CHECKGANJILDANGENAP)

//Genap
//buat variabel Number angka dan isi dengan nilai 16
var angka=16;
 
// jika sisa hasil bagi (mod) variabel angka dengan 2 adalah 0, 
// maka jalankan perintah console.log()
if (angka%2==0)
   console.log("Angka adalah bilangan genap");
else
   console.log("Angka adalah bilangan ganjil");

//Ganjil
   //buat variabel Number angka dan isi dengan nilai 17
var angka=17;
 
// jika sisa hasil bagi (mod) variabel angka dengan 2 adalah 0, 
// maka jalankan perintah console.log()
if (angka%2==0)
   console.log("Angka adalah  bilangan genap");
else
   console.log("Angka adalah bilangan ganjil");



   //repetition replaces numbers into words
//  Buatlah proses looping dari 1 hingga 15 yang nantinya 
//  angka akan di cetak dengan tambahan kondisi didalam looping yaitu:
// -jika angkanya bisa dibagi 3, maka akan cetak "fazz" bukan angka
// - jika angkanya bisa dibagi 5, maka akan cetak "track" bukan angka
// - jika angkanya bisa dibagi 3 & 5, maka akan cetak "fazztrack" bukan angka
// - jika tidak memenuhi kondisi diatas maka akan cetak angka


for ( let i = 1; i <= 15; i++ ){
   if ( i % 3 == 0 && i % 5 == 0 ) {
       console.log("FazzTrack");
   }
   else if ( i % 5 == 0 ) {
      console.log("Track");
   }
   else if ( i % 3 == 0 ) {
      console.log("Fazz");
   } else {
      console.log(i)
   }  
}

