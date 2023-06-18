"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("../Persona");
var Direccion_1 = require("../Direccion");
var Telefono_1 = require("../Telefono");
var Mail_1 = require("../Mail");
var nuevadireccion = new Direccion_1.Direccion('Avenida Gran Canarias', 77, 1, 'A', 28022, 'Madrid', 'Madrid');
var nuevoemail = new Mail_1.Mail('Personal', 'mario_vv@gmail.com');
var nuevotelefono = new Telefono_1.Telefono('Personal', 982458467);
var nuevadireccion2 = new Direccion_1.Direccion('Avenida Meza', 30, 3, 'B', 28022, 'Madrid', 'Madrid');
var nuevoemail2 = new Mail_1.Mail('Personal', 'maria123.33@gmail.com');
var nuevotelefono2 = new Telefono_1.Telefono('Personal', 624557836);
var nuevadireccion3 = new Direccion_1.Direccion('Avenida Rulo', 20, 2, 'C', 28022, 'Madrid', 'Madrid');
var nuevoemail3 = new Mail_1.Mail('Personal', 'jloe@gmail.com');
var nuevotelefono3 = new Telefono_1.Telefono('Personal', 620574801);
var persona1 = new Persona_1.Persona('Mario', 'Villa', 28, '12345678A', new Date(1994, 8, 24), 'azul', 'Masculino', [nuevadireccion], [nuevoemail], [nuevotelefono], 'Primer Registro de persona');
var persona2 = new Persona_1.Persona('Maria', 'Rey', 28, '12345678B', new Date(1994, 9, 29), 'rosa', 'Femenino', [nuevadireccion2], [nuevoemail2], [nuevotelefono2], 'Primer Registro de persona');
var persona3 = new Persona_1.Persona('Juana', 'Loèz', 55, '12345678V', new Date(1968, 10, 5), 'morado', 'Femenino', [nuevadireccion3], [nuevoemail3], [nuevotelefono3], 'Primer Registro de persona');
console.log(persona1, persona2, persona3);
var agendita = new Array(persona1, persona2, persona3);
var busquedaDNI = '12345678A';
var editarDatos = agendita.find(function (persona) { return persona.dni === busquedaDNI; });
var nuevoemail4 = new Mail_1.Mail('Laboral', 'mario_villa@datainfor.com');
var nuevotelefono4 = new Telefono_1.Telefono('Laboral', 982458466);
editarDatos.agregarMail(nuevoemail4);
editarDatos.agregarTelefono(nuevotelefono4);
console.log(persona1);