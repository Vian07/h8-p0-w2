function konversiMenit(menit) {
    var m = Math.floor(menit / 60)
    var s = menit % 60
    if (s < 10) {
        return (m + ':0' + s);
    } else {
        return (m + ':' + s)
    }
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120));