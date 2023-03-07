/**Crear la clase Biblioteca con sus atributos (nombre, direccion, telefono,localidad), constructor, getters y setters.
La misma estará compuesta por libros (deben crear la clase libro completa y utilizarla
como atributo de la Biblioteca).
Crear instancias de la biblioteca y a traves de la misma consultar el nombre del libro y mostrarlo por consola.
Crear una funcionalidad libre de la biblioteca y utilizarla para mostrar algun tipo de salida por consola. */


import { Libro } from "./libro";


class Biblioteca {
  private nombre: string;
  private direccion: string;
  private telefono: string;
  private localidad: string;
  private libros: Libro[];

  constructor(nombre: string, direccion: string, telefono: string, localidad: string, libros: Libro[]) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.localidad = localidad;
    this.libros = [];
  }


  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  public getLocalidad(): string {
    return this.localidad;
  }

  public setLocalidad(localidad: string): void {
    this.localidad = localidad;
  }
  //Funcionalidad para agregar libros a la biblioteca
  public agregarLibro(libro: Libro): void {
    this.libros.push(libro);
  }
  //Funcionalidad para comprobar la existencia del libro en la biblioteca...  
  public buscarLibroPorTitulo(tituloBuscado: string): void {

    let libroBuscado = this.libros.find(libro => libro.getTitulo() === tituloBuscado);
    if (libroBuscado) {
      console.log(`El libro '${tituloBuscado}' existe en nuestra biblioteca`);
    } else {
      console.log(`No contamos con el libro '${tituloBuscado}' en nuestra biblioteca`);
    }

  }

  // Funcionalidad para verificar si un libro está disponible
  public verificarDisponibilidadLibro(titulo: string): void {
    const libro = this.libros.find((libro) => libro.getTitulo() === titulo);
    let disponible = libro?.getEntregado()

    if (disponible) {
      console.log(`El libro ${titulo} se encuentra disponible para ser entregado`);
    } else {
      console.log(`El libro ${titulo} no se encuentra disponible para ser entregado`);

    }
  }
}

//Creo instancias de biblioteca y de algunos libros


const libro1 = new Libro("El Quijote", "Miguel de Cervantes", false);
const libro2 = new Libro("La Odisea", "Homero", true);
const libro3 = new Libro("El Alquimista", "Paulo Cohelo", true);

const biblioteca = new Biblioteca("Biblioteca 25 de Mayo", "Av. Rivadavia 323", "443363", "Las Flores", []);

//Agrego libros a la biblioteca...

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

//Imprimo por consola nombre de libros y propiedades de la biblioteca...
console.log(libro1.getTitulo());

console.log(biblioteca.getNombre());
console.log(biblioteca.getDireccion())

//Busco en la biblioteca libros por titulo y verifico su disponibilidad...

biblioteca.buscarLibroPorTitulo("La Odisea");
biblioteca.verificarDisponibilidadLibro("La Odisea");

biblioteca.buscarLibroPorTitulo("El Alquimista");
biblioteca.verificarDisponibilidadLibro("El Alquimista");

biblioteca.buscarLibroPorTitulo("El Quijote");
biblioteca.verificarDisponibilidadLibro("El Quijote");

biblioteca.buscarLibroPorTitulo("El Aleph");







