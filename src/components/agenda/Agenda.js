import {Link} from 'react-router-dom'
import './agenda.css';
const Agenda = () => {
    return(
        <main>
            
            <div  className='top'>
               
                <h2 id="titulo" class="titulo">Agendamentos</h2>
                
            </div>
            <div class="containerA" className='containeerA'>
                    <div className='info'>
                        <form className='pesquisa' > 
                                <input id="imputbusca" className='busca' type="text"/>
                                <button  className='envia' class="btn btn-success" type='submit' data-toggle="tooltip" data-html="true" title='PESQUISAR AGENDAMENTO'><Link to=""><span class="material-icons">search</span></Link></button>
                                <button  className='envia' class="btn btn-success"  type='submit' data-toggle="tooltip" data-html="true" title='CADASTRAR AGENDAMENTO'><Link to="/addagenda"><span class="material-icons" onMouseLeave="asasassas" >add</span></Link></button>
                        </form>
                        <div className='table' >
                            <table className='table'>
                                <thead>
                                    <tr class="trlegenda">
                                        <th><a class="legenda" href=''>Nome</a></th>
                                        <th><a class="legenda" href=''>Celular</a></th>
                                        <th><a class="legenda" href=''>Categorias</a></th>
                                        <th><a class="legenda" href=''>Colaborador</a></th>
                                        <th><a class="legenda" href=''>Data</a></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Auto incremento conforme adicionado colaboradores */} 
                                </tbody>
                                <tfoot>
                                    {/* <tr>
                                        <td colSpan="5" className='footable-visible'>
                                            <div className='paginator'>
                                                <ul className='pagination-pull-right'>
                                                    <li className="disabled" ><a>«</a></li>
                                                    <li className="disabled"><a>»</a></li>
                                                </ul>
                                                <div className='pull-left'>Pagina 1 de 1, mostrando 0 resultados de 0, iniciando em 0, terminando em 0
                                                </div>
                                            </div>
                                        </td>
                                    </tr> */}
                                </tfoot>
                            </table>
                        </div>
                    </div>
                 </div>   
        </main>
    )
}

export default Agenda;