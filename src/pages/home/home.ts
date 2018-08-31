import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Servico } from '../../model/Servico';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search: string ="";
  servicos: Servico[] =[];

  constructor(public navCtrl: NavController, private servicoProvider: ServicosProvider, public menuCtrl: MenuController ) {
     
  }
  
  pullServices(){
    this.servicoProvider.getServicos().then((dados) => {
      for(let _i = 0;_i<=10; _i++){          
        this.servicos.push({id:dados[_i].id,nome:dados[_i].name});
      }
     /* dados.forEach(servico => {
        console.log(servico.name);

        this.servicos.push({id:servico.id,nome:servico.name});
        if(this.servicos.length == 10) ? false: true ;
        
      }); */
      console.log(this.servicos.length);
  });
  }

  getItems(ev:any){   
    
    const val = ev.target.value;    

    if(val && val.trim() != ''){     
      this.servicos = this.servicos.filter((servico)=>{
        return (servico.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidEnter() {
    this.pullServices();  
    this.menuCtrl.enable(true);
  }

}
