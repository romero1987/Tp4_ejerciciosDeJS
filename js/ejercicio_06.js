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
        return this._titulo
    }
    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo;
    }
    get autor(){
        return this._autor
    }
    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
    get numeroDePagina(){
        return this._numeroDePagina
    }
    set numeroDePagina(nuevoNumeroDePagina){
        if(nuevoNumeroDePagina )
        this._numeroDePagina = nuevoNumeroDePagina;
    }

    mostrarLibros(){
        document.write(`<p>El libro ${this._titulo} con ISBN ${this.ISBN} creado por el autor ${this._autor} tiene páginas ${this._numeroDePagina}</p>`);
    }
}

const libro1 = new Libro(500, 'Martin fierro', 'Jose Hernandez', 78);
const libro2 = new Libro(500, 'El Principito', 'Antoine de Saint-Exupéry', 112);

libro1.mostrarLibros()
libro2.mostrarLibros()

if(libro1._numeroDePagina > libro2._numeroDePagina){
    document.write(`El libro "${libro1._titulo}" tiene mas numeros de paginas que "${libro2._titulo}"`);
}else if(libro1._numeroDePagina < libro2._numeroDePagina){
    document.write(`El libro "${libro2._titulo}" tiene mas numeros de paginas que "${libro1._titulo}"`);
}else{
    document.write(`Los libros tienen la misma cantidad de paginas`);
} 