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

/*class Automobile {
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
console.log(myCar.descrizione(), myCar.mostraChilometraggio());*/

//TERZO ESERCIZIO

/*class Elettrica extends Automobile{
    constructor(marca, modello, anno, chilometraggio, autonomia){
        super(marca, modello, anno, chilometraggio)
        this.autonomia = autonomia;
    }
    aggiungiAutonomia(km){
        this.autonomia += km;
    }
    mostraAutonomia(){
        return `L'autonomia è di: ${this.autonomia} km.`
    }
    descrizione(){
        return `${super.descrizione()}, ${this.autonomia} km`
    }
}
const myElectricCar = new Elettrica ("Fiat", "500e", "2022", 15000, 500);
myElectricCar.aggiungiChilometri(500);
myElectricCar.aggiungiAutonomia(100);
console.log(myElectricCar.descrizione(), myElectricCar.mostraChilometraggio(), myElectricCar.mostraAutonomia());*/

//QUARTO ESERCIZIO

class Automobile {
    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }
    descrizione(){
        return ` Questa macchina è una ${this.marca} ${this.modello}`;
    }
};
Automobile.prototype.saluta = function() {
    return "Ciao!";
};
const myCar = new Automobile("Volkswagen", "Polo");
console.log(myCar.saluta(), myCar.descrizione());