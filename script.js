function ninja(nombre){
    this.nombre = nombre
    this.vida = 100;

    var velocidad = 3;
    var fuerza = 3;
   
    this.sayName = function (){
        console.log("El nombre de mi ninja es " + this.nombre);

    };
    this.showStats = function (){
        console.log("Nombre: " + this.nombre + ", vida: " + this.vida + ", velocidad: " + velocidad + ", fuerza: " + fuerza + "");
    };
    this.drinkSake = function (){
        this.vida += 10;
        console.log("Se aumenta la vida en 10: " + this.vida);
    };
    this.punch = function (instancia){
        console.log(this.nombre +" golpeó a " + instancia.nombre + " y perdió 5 de vida")
    }
    this.kick= function (instancia){
        console.log(this.nombre + " golpeó a " + instancia.nombre + " y perdió 15 de vida")
    }
}

var blueNinja = new ninja("Goemon");
var redNinja = new ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Bill Gates golpeó a Goemon y perdió 5 de vida"

blueNinja.kick(redNinja);
// -> "Goemon golpeó a Bill Gates y perdió 15 de vida"
// En este caso, el redNinja Bill Gates perdió 15 de vida porque blueNinja Goemon tiene 1 punto de fuerza

