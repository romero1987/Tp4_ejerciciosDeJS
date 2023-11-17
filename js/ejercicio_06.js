/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() 
para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro{
    #ISBN;
    constructor(ISBN,titulo, autor, numeroDePagina){
        this.#ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePagina = numeroDePagina;
   }
    get ISBN(){
        return this.#ISBN;
    }
    set ISBN(ISBN){
        if(nuevoISBN  <= 1000){
            this.#ISBN = ISBN;
        }else{
            alert(`El numero ingresado es incorrecto`)
        }
    }

    get titulo(){
        return this.titulo
    }
    set titulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    mostrarLibros(){
        document.write(`ISBN: ${this.ISBN}, Titulo: ${this.titulo}`);
    }
}

const libro1 = new Libro(500, 'Martin fierro', 'Jose Hernandez', 78);
const libro2 = new Libro(500, 'Martin fierro', 'Desconocido', 112);

libro1.mostrarISBN()
libro1.mostrarISBN()