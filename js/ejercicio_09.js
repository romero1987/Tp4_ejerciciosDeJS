/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" 
para verificar que cada animal emite el sonido adecuado. 
 */

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Perro extends Animal{
    constructor(nombre, edad){
        super (nombre,edad);
    }

    emitirSonido(){
        document.write(`<h1>Perro</h1>`);
        document.write(`<p>Nombre: ${this.nombre}</p>`);
        document.write(`<p>Edad: ${this.edad}</p>`);
        document.write(`<p>Ladrar</p>`);

    }
}
class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    emitirSonido(){
        document.write(`<h1>Gato</h1>`);
        document.write(`<p>Nombre: ${this.nombre}`);
        document.write(`<p>Edad: ${this.edad}`);
        document.write(`<p>Maullar</p>`);
    }
}

const animales = new Animal('Tini', 3)
const perro = new Perro('ramses', 5)
const gato = new Gato('kokis', 6)

animales.emitirSonido()
perro.emitirSonido()
gato.emitirSonido()