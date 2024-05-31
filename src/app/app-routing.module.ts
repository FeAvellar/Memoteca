import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [/*A constante const representa as rotas da aplicação.Ela possui o nome routes e o tipo Routes — este último
                        sendo um objeto de configuração que define as rotas. As rotas de nossa aplicação serão um array,
                         pois são múltiplas. Portanto, para cada rota, informaremos um objeto diferente.*/
{path: '',
redirectTo: 'listarPensamento',    /*Ver aula 3 - 3 Angular 14: aplique conceitos... */
pathMatch:'full'
},

{
  path: 'criarPensamento',
  component:CriarPensamentoComponent
}, /*Essa foi a primeira rota, agora coloco as demais rotas abaixo, separadas por vírgula */

{
  path: 'listarPensamento',
  component:ListarPensamentoComponent
},
{
  path: 'pensamentos/excluirPensamento/:id',
  component:ExcluirPensamentoComponent
},
{
  path: 'pensamentos/editarPensamento/:id',
  component:EditarPensamentoComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
