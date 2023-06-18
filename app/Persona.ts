import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from './Telefono';

export class Persona{

    
    private _nombre : string;
    private _apellidos : string;
    private _edad : number;
    private _dni : string;
    private _cumpleanhos : Date;
    private _colorFavorito : string;
    private _sexo : string;
    private _direcciones: Array<Direccion>;
    private _mails:Array<Mail>;
    private _telefonos:Array<Telefono>;
    private _notas : string;
   

 constructor(nombre:string,apellidos:string, edad:number, dni:string, cumpleanhos:Date, colorFavorito:string, sexo:string, direcciones:Array<Direccion>,
    mails:Array<Mail>,telefonos:Array<Telefono>,notas:string) {
    this._nombre=nombre;
    this._apellidos=apellidos;
    this._edad=edad;
    this._dni=dni;
    this._cumpleanhos=cumpleanhos;
    this._colorFavorito=colorFavorito;
    this._sexo=sexo;
    this._mails=mails;
    this._telefonos=telefonos;
    this._notas=notas;
 }


    public get notas() : string {
    return this._notas;
    }
    public set notas(v : string) {
    this._notas = v;
    }


    public get nombre() : string {
        return this._nombre;
    }
    public set nombre(v : string) {
        this._nombre = v;
    }
    
    public get apellidos() : string {
        return this._apellidos;
    }
    public set apellidos(v : string) {
        this._apellidos = v;
    }
    
    
   
    public get edad() : number {
        return this._edad;
    }
    public set edad(v : number) {
        this._edad = v;
    }
    

    

    public get dni() : string {
        return this._dni;
    }
    public set dni(dni : string) {
        this._dni = dni;
    }

    
 
    public get cumpleanhos() : Date {
        return this._cumpleanhos;
    }
    public set cumpleanhos(v : Date) {
        this._cumpleanhos = v;
    }
    
    

    public get colorFavorito() : string {
        return this._colorFavorito;
    }
    public set colorFavorito(v : string) {
        this._colorFavorito = v;
    }
    
    
    
    public get sexo() : string {
        return this._sexo;
    }
    public set sexo(v : string) {
        this._sexo = v;
    }
    

 agregarMail(m:Mail){
this._mails.push(m);

 }
 public get mails(): Mail []{
    return this._mails;
}
 public set mails(value: Mail[]) {
    this._mails = value;
}
    
    
 agregarTelefono(m:Telefono){
    this._telefonos.push(m);
 }

 public get telefonos(): Telefono[] {
    return this._telefonos;
}

public set telefonos(value: Telefono[]) {
    this.telefonos = value;
}


 agregarDireccion(m:Direccion){
    this._direcciones.push(m);
 }
 public get direcciones(): Direccion []{
    return this._direcciones;
}
 public set direcciones(value: Direccion[]) {
    this._direcciones = value;
}
    


}