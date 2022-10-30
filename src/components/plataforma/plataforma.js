
import './Plataforma.css'
import max from './dev.max.jpg'
import richard from './dev.richard.jpg'
import negrelo from './dev.negrelo.jpg'
import faculdade from './dev.unip.jpg'
const Plataforma = () =>{
    return(
        <main>
            <div class="">
                <div class="body">
                        <div class="row">
                            <div class="card yellow" data-toggle="tooltip" data-html="true" title='Sobre'>
                                <h2>Sobre</h2>
                                <div class="visivel">Aplicação para administração de Salões de Cabeleireiro</div>
                            </div>
                        </div>
                        <div class="row">   
                            <div class="card yellow" data-toggle="tooltip" data-html="true" title='Desenvolvedor e Planejamento'>
                            <tr>
                                        <tr><td><h3>MAXIMILIANO PAES</h3></td></tr>
                                        <td>Responsável pelo desenvolvimento da Aplicação do Trabalho</td>
                                        <td><img src={max} class="image"/></td>
                                    </tr>
                            </div>
                         
                                <div class="card yellow" data-toggle="tooltip" data-html="true" title='Desenvolvedor e Planejamento'>
                                
                                    <tr>
                                        <tr><td><h3>GABRIEL NEGRELO</h3></td></tr>
                                        <td>Responsável pelo desenvolvimento da documentação do Trabalho</td>
                                        <td><img src={negrelo} class="image"/></td>
                                    </tr>
                                </div>
                       </div>
                        <div class="row">   
                                <div class="card yellow" data-toggle="tooltip" data-html="true" title="Desenvolvedor e Planejamento">
                                    <tr>
                                         <tr><td><h3>RICHARD FRANKLIN</h3></td></tr>
                                        <td>Responsável pelo desenvolvimento da Aplicação do Trabalho</td>
                                        <td><img src={richard} class="image"/></td>
                                    </tr>

                                 </div>
                            
                            <div class="card yellow" data-toggle="tooltip" data-html="true" title='Sobre a Universidade'>
                                <tr>
                                         <tr><td><h3>UNIVERSIDADE</h3></td></tr>
                                        <td>Ciência da Computação Unip Campus Araçatuba 2022 </td>
                                        <td><img src={faculdade} class="image"/></td>
                                    </tr>

                            </div>
                      </div>
                </div> 
            </div>
        
        
        
        
        </main>
    )
}

export default Plataforma;