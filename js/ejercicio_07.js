/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, 
indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, 
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */

    class Contacto {
        constructor(nombre, telefono) {
          this.nombre = nombre;
          this.telefono = telefono;
        }

        get nombre(){
          return this._nombre;
        }
        set nombre(nuevoNombre){
          this._nombre = nuevoNombre;
        }

        get telefono(){
          return this._telefono;
        }
        set telefono(nuevoTelefono){
          this._telefono = nuevoTelefono;
        }
      }    
      
      class Agenda {
        constructor(tamanoAgenda = 10) {
          this.contactos = [];
          this.tamano = tamanoAgenda;
        }

        get contactos(){
          return this._contactos
        }
        set contactos(nuevoContactos){
          this._contactos = nuevoContactos;
        }

        get tamano(){
          return this._tamano;
        }
        set tamano(nuevoTamano){
          this._tamano = nuevoTamano;
        }
      
      
        aniadirContacto(contacto) {
          if (this.agendaLlena()) {
             alert('Su agenda esta llena, no puede guardar mas contactos');
      
      
          } else if(this.existeContacto(contacto)){
      
            alert(`El contacto "${contacto.nombre}" ya existe!`);
      
          } else {
            this.contactos.push(contacto);
            alert('Contacto guardado con exito!');
          }
      
        }
      
        existeContacto(contacto) {
          return this.contactos.some((c) => c.nombre === contacto.nombre);
        }
      
      
        listarContactos() {
          document.write('<h2>Lista de contactos:</h2>');
          console.log('<h2>Lista de contactos:</h2>');
          this.contactos.forEach((contacto) => {
            document.write(`<p>Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}</p>`);
            console.log(`<p>Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}</p>`);
          }
          );
        }
      
      
        buscarContacto(nombre) {
          const contacto = this.contactos.find((c) => c.nombre === nombre);
          if (contacto) {
            console.log(`Nombre: ${contacto.nombre} Telefono: ${contacto.telefono}`);
            alert(`Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}`);
          } else {
            alert('No se encontro el contacto!');
          }
        }
      
        eliminarContacto(contacto) {
          const contactoAgendado = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
          if (contactoAgendado !== -1) {
            this.contactos.splice(contactoAgendado, 1);
            alert(`El Contacto "${contacto.nombre}" ah sido eliminado!`);
          } else {
            alert(`No se encontro el contacto para eliminar!`);
          }
        }
           
        agendaLlena() {
          return this.contactos.length >= this.tamano;
        }
        huecosLibres() {
          return this.tamano - this.contactos.length;
        }
      }
      
      
      function mostrarMenu() {
        let agenda = new Agenda();
      
        while (true) {
          const opcion = prompt('Menú:\n 1. Añadir contacto\n 2. Buscar contacto\n 3. Listar contactos\n 4. Eliminar contacto\n 5. Huecos libres\n 6. Salir');
      
          switch (opcion) {
            case "1":
              const nombre = prompt('Ingrese el nombre del contacto:');
              const telefono = prompt('Ingrese el número de teléfono:');
              const nuevoContacto = new Contacto(nombre, telefono);
              agenda.aniadirContacto(nuevoContacto);
              break;
      
            case "2":
              const nombreBuscar = prompt('Ingrese el nombre del contacto que desea buscar:');
              agenda.buscarContacto(nombreBuscar);
              break;
      
            case "3":
              agenda.listarContactos();
              break;
      
            case "4":
              const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
              const contactoEliminar = new Contacto(nombreEliminar, ""); 
              agenda.eliminarContacto(contactoEliminar);
              break;
      
            case "5":
              alert(`Los lugares libres en la agenda son: ${agenda.huecosLibres()}`);
              console.log(`Los lugares libres en la agenda son: ${agenda.huecosLibres()}`);
              break;
      
            case "6":
              alert(`Saliendo de la agenda`);
              return;
      
            default:
              alert(`Opción no válida!`);
          }
        }
      }
      
      
      mostrarMenu();