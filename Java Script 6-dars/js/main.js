/* localStorage in JS (Mahalliy ombor)*/

/*localStorage.setItem('ism','Sunnatbek');*/
/*localStorage.setItem('familiya','Ravshanov');*/
/*localStorage.setItem('yoshi','16 yoshda');*/
/*localStorage['ism'] = "Baxtiyor";*/
/*localStorage['familiya'] = "Kuchkarov";*/
/*localStorage['yoshi'] = "18 yoshda";*/
/*localStorage.removeItem('ism');*/
/*localStorage.removeItem('familiya');*/
/*localStorage.removeItem('yoshi');*/
/*localStorage.clear();*/
/*let uningIsmi = localStorage.getItem('ism');*/
/*let uningFamiliyasi = localStorage.getItem('familiya');*/
/*let uningYoshi = localStorage.getItem('yoshi');*/
/*console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/

/* HTTPS requests in JS (HTTPS so'rovlar) */
/*let sorov = new XMLHttpRequest();*/
/*sorov.open('get', 'https://getty.uz/serverdan/malumot/olish');*/
/*sorov.send();*/
/*sorov.onload = function (){
    console.log(sorov.responseText);
}*/




/* JSON in JS */

/*let jsFile = {'ism':'Guli','yoshi':'16 yoshda'};*/
/*let jsonFile = '{"ism": "Komila","yoshi":"38 yoshda"}';*/
/*console.log(JSON.stringify(jsFile));*/    /* JSni JSONga ozgartirish */
/*console.log(JSON.parse(jsonFile));   */   /* JSONni JSga o'zgartirish */

/*let sorov = new XMLHttpRequest();
sorov.open('get', 'jsonFile.json');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

fetch('jsonFile.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));








