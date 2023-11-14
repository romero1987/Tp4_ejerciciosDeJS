/* 1- Crea un objeto llamado auto que tenga algunas características 
como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
 */
const auto = {
    color: 'Rojo',
    marca: 'Ford',
    modelo: 'Taunus',

enceder: function(){
    document.write(`<p>Auto encendido</p>`)
},
apagar: function(){
    document.write(`<p>El auto se apago</p>`)
},
}

document.write(`<h1>Auto</h1>`)
document.write(`<p>Color: ${auto.color}</p>`)
document.write(`<p>Marca: ${auto.marca}</p>`)
document.write(`<p>Modelo: ${auto.modelo}</p>`)

auto.enceder()
auto.apagar()
