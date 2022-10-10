import { Component } from '@angular/core'

@Component({
   selector: 'App-Heroes',
   templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
   nombre: string = 'Iroman'
   edad  : number = 45

   obtenerNombre(){
      return `${this.nombre} - ${this.edad}`
   }
   get nombreCapitalizado(){
      return this.nombre.toUpperCase()
   }
   cambiarNombre(): void{
      this.nombre = 'Spiderman'
   }
   cambiarEdad(){
      this.edad = 30
   }
}