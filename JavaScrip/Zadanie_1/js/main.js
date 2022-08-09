// console.log('hey');


class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        if (this.przeczytana) {
            return `Ksiazka ma tytul ${this.tytul} autorem jest ${this.autor} jest przeczytana`;
        }
        else {
            return `Ksiazka ma tytul ${this.tytul} autorem jest ${this.autor} jest nie przeczytana`;
        }

    }
};


let ksiazka1 = new Ksiazka('Samsara', 'Michniewicz', true);

let ksiazka2 = new Ksiazka('Cien Wiatru', 'Carlos Ruiz Zafon', true);

let ksiazka3 = new Ksiazka('Hipnotyzer', 'Lars Kepler', false);

let ksiazki = [ksiazka1, ksiazka2, ksiazka3];

// console.log(array[1]);

const iloscPrzeczytanych = (arr) => {

let ksiazkiPrzeczytane = 0;

    for (i = 0; i < arr.length; i++) {
        
        console.log(arr[i]);
        if (arr[i].przeczytana == true) {
           ksiazkiPrzeczytane ++  
        } 

    }
    
    return ksiazkiPrzeczytane;
}

console.log(iloscPrzeczytanych(ksiazki));




