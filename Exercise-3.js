var nama = 'Arvian';
var peran = 'Tabib';

if (nama === null){
    console.log('Nama harus diisi!')
}else if (nama , peran === null){
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game!')
}else if (nama , peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia,' + nama)
    console.log('Hallo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
}else if (nama , peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia,' + nama)
    console.log('Hallo Tabib '+ nama + ', kamu akan membantu temanmu yang terluka.')
}else if (nama , peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia,' + nama)
    console.log('Hallo Penyihir '+ nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
