//Soal 1
var counter = 2
console.log('LOOPING PERTAMA')
while (counter <= 20){
    console.log(counter + ' - I love coding')
    counter = counter + 2
}
var counter2 = 20
console.log('LOOOPING KEDUA')
while(counter2 >= 2){
    console.log(counter2 + ' - I will become fullstack developer')
    counter2 = counter2 - 2
}


//Soal 2
var i = 1
console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++){
    console.log(i + ' - I love coding')
}
var i2 = 20
console.log('LOOOPING KEDUA')
for (var i2 = 20; i2 >= 1; i2--) {
    console.log(i2 + ' - I will become fullstack developer')
}

//Soal 3
for (var i=1; i<101; i++) {
    if (i % 2 === 0) {
      console.log('GENAP');
    } else {
      console.log('GANJIL');
    }
  }
  for (var i=1; i<101; i+=2) {
    if (i % 3 === 0) {
      console.log(i, 'KELIPATAN 3');
    }
  }
  for (var i=1; i<101; i+=5) {
    if (i % 6 === 0) {
      console.log(i, 'KELIPATAN 6');
    }
  }
  for (var i=1; i<101; i+=9) {
    if (i % 10 === 0) {
      console.log(i, 'KELIPATAN 10');
    }
  }