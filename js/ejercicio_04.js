/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`<h1>Producto:</h1>`)
        document.write(`<p>Codigo: ${this.codigo}</p>`)
        document.write(`<p>Nombre: ${this.nombre}</p>`)
        document.write(`<p>Precio: ${this.precio}</p>`)
    }
}

let productoObj1 = new Producto(121212, 'Galletas', '$550');
let productoObj2 = new Producto(123123, 'Gaseosa', '$1200');
let productoObj3 = new Producto(12341234, 'Escoba', '$3200');

productoObj123 = [productoObj1, productoObj2, productoObj3];

for (let productos of productoObj123) {
    productos.imprimeDatos();
    document.write(`_________________`)
  }
