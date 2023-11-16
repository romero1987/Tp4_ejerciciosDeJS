/* Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar(){
        document.write(`<p>Hola mi nimbre es ${this.nombre}, tengo ${this.edad} años y mi profesion es ${this.profesion}</p>`)
    }

    despedirse(){
        document.write(`<p>Chau, nos vemos</p>`)
    }
}

const persona1 = new Persona('Luis', 35, 'Tecnico en Desarrollo');
const persona2 = new Persona('carlos', 49, 'Ingeniero');

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
