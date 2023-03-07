export class Libro {
    private titulo: string;
    private autor: string;
    private entregado: boolean;
  
    constructor(titulo: string, autor: string, entregado: boolean) {
      this.titulo = titulo;
      this.autor = autor;
      this.entregado = entregado;
    }
  
    
  
    public getTitulo(): string {
      return this.titulo;
    }
  
    public setTitulo(titulo: string): void {
      this.titulo = titulo;
    }
  
    public getAutor(): string {
      return this.autor;
    }
  
    public setAutor(autor: string): void {
      this.autor = autor;
    }
  
    public getEntregado(): boolean {
      return this.entregado;
    }
  
    public setEntregado(entregado: boolean): void {
      this.entregado = entregado;
    }
  
  }

    
  