//Soal 1
var str = ''
var row1 = 5
console.log('jika row1 = 5')
for (var i = 0; i < row1; i++) {
    console.log('*')
}

//Soal 2
var row2 = 5
console.log('jika row2 = 5')
for (var i = 0; i < row2; i++) {
    for (var j = 0; j < row2; j++) {
        str += '*'
    }
console.log(str)
str = ''
}


//Soal 3
var row3 = 5
console.log('jika row3 = 5')
for (var i = 1; i <= row3; i++) {
    for (var j = 0; j < i; j++) {
        str += '*'
    }
console.log(str)
str = ''    
}