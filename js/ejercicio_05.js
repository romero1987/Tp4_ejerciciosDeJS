/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo 
característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
 */

class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
    mostrarGeneracion(anioDeNacimiento){
        this.anioDeNacimiento = parseInt(prompt(`Ingrese el año de su nacimiento:`));
        if(this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948){
            document.write(`Sos Generacion Silent Generation`);
        }else if (this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            document.write(`Sos Generacion Baby Boom`);
        }else if (this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            document.write(`Sos Generacion X`);
        }else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            document.write(`Sos Generacion Y`);
        }else if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            document.write(`Sos Generacion Z`);
        }
    }

    esMayorDeEdad(edad){
        this.edad = parseInt(prompt(`Ingrese su edad:`));
        if(this.edad >= 18){
            alert(`Usted es mayor de edad`);
        }else{
            alert(`Usted es menor de edad`);
        }
    }

    mostrarDatos(){
        this.nombre = prompt(`Ingrese su nombre:`);
        document.write(`<p>Nombre: ${this.nombre}</p>`);
        document.write(`<p>Edad: ${this.edad}`)
        this.dni = Math.floor(Math.random() * 99999999)+11111111;
        document.write(`<p>Dni: ${this.dni}</p>`)
        this.sexo = prompt(`Ingrese su sexo:`);
        document.write(`<p>Sexo: ${this.sexo}</p>`)
        this.peso = parseFloat(prompt(`Ingrese su peso:`));
        document.write(`<p>Peso: ${this.peso}</p>`);
        this.altura = parseFloat(prompt(`Ingrese su altura:`));
        document.write(`<p>Altura: ${this.altura}</p>`);
        document.write(`<p>Año de nacimiento: ${this.anioDeNacimiento}</p>`)
    }
}

const personaObj = new Persona();

personaObj.mostrarGeneracion()
personaObj.esMayorDeEdad()
personaObj.mostrarDatos()
