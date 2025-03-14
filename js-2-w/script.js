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

/*class Automobile {
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
console.log(myCar.saluta(), myCar.descrizione());*/

//QUINTO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, anno, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    #calcolaEtà(){
        const yearNow = new Date().getFullYear();
        return yearNow - this.anno;
    }
    mostraEtà(){
        return this.#calcolaEtà();
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
/*myCar.aggiungiChilometri(1000);
console.log(myCar.descrizione(), myCar.mostraChilometraggio());
console.log(myCar.mostraEtà());*/

//SESTO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, anno, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    #calcolaEtà(){
        const yearNow = new Date().getFullYear();
        return yearNow - this.anno;
    }
    mostraEtà(){
        return this.#calcolaEtà();
    }
    aggiungiChilometri(km){
        this.chilometraggio += km;
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    descrizione(){
        return `${this.marca} ${this.modello} ${this.anno}`;
    }
};
const myCar = new Automobile("Volkswagen", "Polo", 2019, 200000);
myCar.aggiungiChilometri(1000);
console.log(myCar.descrizione(), myCar.mostraChilometraggio());
console.log(myCar.mostraEtà());
console.log(myCar._controllaChilometri())

class Elettrica extends Automobile{
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
    controllaChilometri(){
        return super._controllaChilometri()
    }
    descrizione(){
        return `${super.descrizione()}, ${this.autonomia} km`
    }
}
const myElectricCar = new Elettrica ("Fiat", "500e", 2022, 15000, 500);
myElectricCar.aggiungiChilometri(500);
myElectricCar.aggiungiAutonomia(100);
// console.log(myElectricCar.descrizione(), myElectricCar.mostraChilometraggio(), myElectricCar.mostraAutonomia());
console.log(myElectricCar.controllaChilometri());*/

//SETTIMO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.chilometraggio = chilometraggio;
    }
    aggiungiChilometri(km){
        this.chilometraggio += km;
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
};

const auto1 = new Automobile("Toyota", "Aygo", 1200);
const auto2 = new Automobile("Alfa Romeo", "Giulietta", 1200);
console.log(Automobile.confrontaChilometri(auto1, auto2));*/

//OTTAVO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.chilometraggio = chilometraggio;
    }
    #contatoreChiamate;
    aggiungiChilometri(km){
        this.chilometraggio += km;
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
};*/

//NONO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.chilometraggio = chilometraggio;
    }
    #contatoreChiamate = 0;
    #incrementaContatore(){
        this.#contatoreChiamate++;
    }
    aggiungiChilometri(km){
        this.#incrementaContatore();
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
};*/

//DECIMO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.chilometraggio = chilometraggio;
    }
    #contatoreChiamate = 0;
    #incrementaContatore(){
        this.#contatoreChiamate++;
    }
    aggiungiChilometri(km){
        this.#incrementaContatore();
    }
    mostraContatoreChiamate(){
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
};

const myCar = new Automobile("Fiat", "500", 2000);
myCar.aggiungiChilometri(100)
myCar.aggiungiChilometri(50)
myCar.aggiungiChilometri(110)
myCar.aggiungiChilometri(20)
console.log(myCar.mostraContatoreChiamate());*/

//UNDICESIMO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this._chilometraggio = chilometraggio;
    }
    #contatoreChiamate = 0;
    #incrementaContatore(){
        this.#contatoreChiamate++;
    }
    aggiungiChilometri(km){
        this.#incrementaContatore();
    }
    mostraContatoreChiamate(){
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    get chilometraggio(){
        return this._chilometraggio;
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
};

const myCar = new Automobile("Fiat", "500", 20000);
myCar.aggiungiChilometri(100);
console.log(myCar.chilometraggio);*/

//DODICESIMO ESERCIZIO

/*class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this._chilometraggio = chilometraggio;
    }
    #contatoreChiamate = 0;
    #incrementaContatore(){
        this.#contatoreChiamate++;
    }
    aggiungiChilometri(km){
        this.#incrementaContatore();
    }
    mostraContatoreChiamate(){
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    get chilometraggio(){
        return this._chilometraggio;
    }
    set chilometraggio(valore){
        if (valore >= this._chilometraggio){
            this._chilometraggio = valore;
        } else{
            console.error("Non puoi ridurre il chilometraggio.");
        }
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
};*/

/*const myCar = new Automobile("Fiat", "500", 12000);
myCar.aggiungiChilometri(100);
console.log(myCar.chilometraggio);
myCar.chilometraggio = 900;
console.log(myCar.chilometraggio);
myCar.chilometraggio = 20500;
console.log(myCar.chilometraggio);*/

//TREDICESIMO ESERCIZIO

/*class Camion extends Automobile{
    constructor(marca, modello, chilometraggio){
        super(marca, modello, chilometraggio)
    }
    descrizione(){
        return `${super.descrizione()}`
    }
};

const myCamion = new Camion("Iveco", "Eurocargo", 50000);
console.log(myCamion.descrizione());*/

//QUATTORDICESIMO ESERCIZIO

/*class Camion extends Automobile{
    constructor(marca, modello, chilometraggio, caricoMassimo){
        super(marca, modello, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this._caricoAttuale = 0;
    }

    get caricoAttuale(){
        return this.caricoAttuale;
    }
    carica(kg){
        if (this._caricoAttuale + kg <= this.caricoMassimo){
            this._caricoAttuale += kg;
            console.log(`${kg} kg caricati, il carico attuale è di ${this._caricoAttuale} kg.`);
        } else {
            console.log(`Impossibile caricare ${kg} kg, il carico massimo di ${this.caricoMassimo} kg è statp superato.`);
        }
    }
    descrizione(){
        return `${super.descrizione()}, ${this.caricoMassimo}, ${this._caricoAttuale}`;
    }
};*/

/*const myCamion = new Camion("Iveco", "Eurocargo", 50000, 5000);
myCamion.carica(1000); 
myCamion.carica(3500);*/  

//QUINDICESIMO ESERCIZIO

class Automobile {
    constructor(marca, modello, chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this._chilometraggio = chilometraggio;
    }
    #contatoreChiamate = 0;
    #incrementaContatore(){
        this.#contatoreChiamate++;
    }
    aggiungiChilometri(km){
        this.#incrementaContatore();
    }
    mostraContatoreChiamate(){
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`
    }
    mostraChilometraggio(){
        return `Il chilometraggio è: ${this.chilometraggio}`
    }
    _controllaChilometri(){
        if(this.chilometraggio > 100000){
            return `Attenzione: questa macchina ha già molti chilometri!`
        }else{
            return "I km di questa macchina sono nella norma."
        }
    }
    get chilometraggio(){
        return this._chilometraggio;
    }
    set chilometraggio(valore){
        if (valore >= this._chilometraggio){
            this._chilometraggio = valore;
        } else{
            console.error("Non puoi ridurre il chilometraggio.");
        }
    }
    static confrontaChilometri(auto1, auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.descrizione()} ha più chilometri di ${auto2.descrizione()}.`
        }else if(auto1.chilometraggio < auto2.chilometraggio){
            return `${auto2.descrizione()} ha più chilometri di ${auto1.descrizione()}.`
        }else{
            return `${auto1.descrizione()} e ${auto2.descrizione()} hanno lo stesso chilometraggio.`
        }
    }
    descrizione(){
    return `${this.marca} ${this.modello} ${this.chilometraggio}`;
    }
    static verificaIstanza(obj, classe){
        if (obj instanceof classe){
            return `${obj.descrizione()} è un'istanza della classe ${classe.name}.`;
        } else {
            return `${obj.descrizione()} non è un'istanza della classe ${classe.name}.`;
        }
    }
};

class Camion extends Automobile{
    constructor(marca, modello, chilometraggio, caricoMassimo){
        super(marca, modello, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this._caricoAttuale = 0;
    }

    get caricoAttuale(){
        return this.caricoAttuale;
    }
    carica(kg){
        if (this._caricoAttuale + kg <= this.caricoMassimo){
            this._caricoAttuale += kg;
            console.log(`${kg} kg caricati, il carico attuale è di ${this._caricoAttuale} kg.`);
        } else {
            console.log(`Impossibile caricare ${kg} kg, il carico massimo di ${this.caricoMassimo} kg è statp superato.`);
        }
    }
    descrizione(){
        return `${super.descrizione()}, ${this.caricoMassimo}, ${this._caricoAttuale}`;
    }
};

const myCar = new Automobile("Fiat", "500", 20000);
const myCamion = new Camion("Iveco", "Eurocargo", 50000, 5000);
console.log(Automobile.verificaIstanza(myCar, Automobile)); 
console.log(Automobile.verificaIstanza(myCamion, Camion)); 