import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  { 
   heroes: string[] = [
      'spiderman',
      'Iroman',
      'Superman',
      'Hulk',
      'Thor'
   ]
   elementoBorrado: string = ''
   borrarHeroe(){
      this.elementoBorrado = this.heroes.shift()||''
   }
   
  }


