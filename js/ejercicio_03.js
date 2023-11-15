/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificar(alto, ancho) {
      if (alto > 0 && ancho > 0) {
        this.alto = alto;
        this.ancho = ancho;
      } else {
        console.log("Deben ser valores positivos");
      }
    }
  
    mostrar() {
        document.write(`<h1>Perimetro y area de un rectangulo</h1>`)
      document.write(`<p>El alto es: ${this.alto} y el ancho es: ${this.ancho}</p>`);
    }
  
    perimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    area() {
      return this.alto * this.ancho;
    }
  }
  
  let rectObj = new Rectangulo(10, 20);
  
  rectObj.mostrar();
  
  document.write(`<p>El PERIMETRO es: ${rectObj.perimetro()} y el AREA es: ${rectObj.area()}</p>`);
  
  rectObj.modificar(15, 25);
  
  rectObj.mostrar();
  
  document.write(`<p>El PERIMETRO es: ${rectObj.perimetro()} y el AREA es: ${rectObj.area()}</p>`);  