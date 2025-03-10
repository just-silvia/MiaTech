class automobile {
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
console.log(myCar.descrizione());