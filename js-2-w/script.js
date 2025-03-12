/*class automobile {
    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }
    descrizione(){
        return `${this.marca} ${this.modello} ${this.anno}`;
    }
};
const myCar = new automobile("Volkswagen", "Polo", "2019");
console.log(myCar.descrizione());*/

// SECONDO ESERCIZIO

class Automobile {
    constructor(marca, modello, anno, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    aggiungiChilometri(km){
        this.chilometraggio += km;
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    descrizione(){
        return `${this.marca} ${this.modello} ${this.anno}`;
    }
};
const myCar = new Automobile("Volkswagen", "Polo", "2019", 20000);
myCar.aggiungiChilometri(1000);
console.log(myCar.descrizione(), myCar.mostraChilometraggio());