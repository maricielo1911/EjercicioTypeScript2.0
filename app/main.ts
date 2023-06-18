import { Persona } from './Persona';
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";


const nuevadireccion= new Direccion('Avenida Gran Canarias',77,1,'A',28022,'Madrid','Madrid');
const nuevoemail=new Mail('Personal','mario_vv@gmail.com');
const nuevotelefono=new Telefono('Personal',982458467);

const nuevadireccion2= new Direccion('Avenida Meza',30,3,'B',28022,'Madrid','Madrid');
const nuevoemail2=new Mail('Personal','maria123.33@gmail.com');
const nuevotelefono2=new Telefono('Personal',624557836);

const nuevadireccion3= new Direccion('Avenida Rulo',20,2,'C',28022,'Madrid','Madrid');
const nuevoemail3=new Mail('Personal','jloe@gmail.com');
const nuevotelefono3=new Telefono('Personal',620574801);

const persona1= new Persona('Mario','Villa',28,'12345678A',new Date(1994,8,24),'azul','Masculino',[nuevadireccion],[nuevoemail],[nuevotelefono],'Primer Registro de persona');
const persona2= new Persona('Maria','Rey',28,'12345678B',new Date(1994,9,29),'rosa','Femenino',[nuevadireccion2],[nuevoemail2],[nuevotelefono2],'Primer Registro de persona');
const persona3= new Persona('Juana','Loèz',55,'12345678V',new Date(1968,10,5),'morado','Femenino',[nuevadireccion3],[nuevoemail3],[nuevotelefono3],'Primer Registro de persona');

console.log(persona1,persona2,persona3);

const agendita: Array<Persona>=new Array(persona1,persona2,persona3);
const busquedaDNI = '12345678A'
const editarDatos: Persona = agendita.find(persona => persona.dni === busquedaDNI) as Persona;

const nuevoemail4= new Mail('Laboral','mario_villa@datainfor.com');
const nuevotelefono4=new Telefono('Laboral',982458466);

editarDatos.agregarMail(nuevoemail4);
editarDatos.agregarTelefono(nuevotelefono4);

console.log(persona1);