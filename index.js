// console.log('Hello world!')
// var a = 5;
// let b;
// const c = 5;

/*
function mojaFunkcija() {
    var a = prompt();
    if (+a > 10) {
        return 'veci';
    }
    return 'manji';
}

console.log(mojaFunkcija());
*/

//i++;
//i--;

//var polje = [1.2, '13', 55, 22, 1, 100, 102]; //arry -> skup istih tipova vrijednosti
//var objekt = {}; //objekt -> skup razlicitih tipova vrijednosti

/*
for(inicijalizacija; uvjet; promjena) {
    kod;
}

1. inicijalizacija (SAMO PRVI PUT)
2. provjera uvjeta - ako je uvjet zadovoljen, ide izvrsavanje koda
3. izvrsavanje koda
4. promjena => ponovno na 2.
*/

/*
for(let i = 0; i < polje.length; i++) {
    console.log(polje[i]);
}
*/

/*
function ispisiSveDoOvogBroja(broj) {
    for(let i=0; i <= broj; i++) {
        console.log(i);
    }
}

ispisiSveDoOvogBroja(10);
*/

// objekt je skup key : value parova
/*
var osoba = {
    ime : 'Pero',
    prezime : 'Peric',
    godina : 25 
};
*/

//console.log('Ime:' + osoba.ime);
//console.log('Prezime:' + osoba.prezime);
//console.log('Godina:' + osoba.godina);

/*
var zivotinja = {
    vrsta : 'pas',
    dob : '4',
    ime : 'Kiki'
};
*/

//console.log('\nVrsta:' + zivotinja.vrsta);
//console.log('Dob:' + zivotinja.dob);
//console.log('Ime:' + zivotinja.ime);

/*
var osobe = [
    {
        ime : 'Pero'
    },
    {
        ime : 'Ivo'
    },
    {
        ime : 'Marko'
    }
];
*/

//console.log(osobe[1].ime);

/*
function ispisiImeIPrezime(o) {
    console.log(o.ime + " " + o.prezime);
}

ispisiImeIPrezime(osoba);
*/

/*
function ispisVremena() {
    console.log(new Date().toLocaleTimeString());
}

//setTimeout(ispisVremena, 5000);
a = setInterval(ispisVremena, 2000);

setTimeout(() => {
    clearInterval(a, 2000);
}, 10000);
*/

/*
var osoba = {
    ime : 'Stjepan',
    ispisiIme: function() {
        console.log(this.ime);
    },
    
    prezime : 'Kresic',
    ispisiPrezime: function() {
        console.log(this.prezime);
    },

    dob : 22,
    ispisiDob: function() {
        console.log(this.dob);
    }
};

//console.log(osoba);

osoba.ispisiIme();
osoba.ispisiPrezime();
osoba.ispisiDob();
*/


var pravokutnici = document.getElementsByClassName('pravokutnik');
console.log(pravokutnici);

for(let i = 0; i < pravokutnici.length; i++) {
    console.log(pravokutnici[i].innerHTML);
    pravokutnici[i].style.backgroundColor = prompt();
}