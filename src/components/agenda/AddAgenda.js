import {Link} from 'react-router-dom';
import './agenda.css';
const AddAgenda = () =>{
    return(
        <main class="main">
             <h2 id="tituloS"  class="tituloS">Cadastro Agendamento</h2>
            <div className="container">
                <div  className='gradebotoes'>
                   
                        <div className='sgradeBotoes'>
                            </div> 
                            <tr id='as' class='traddAgenda'>
                                <td id='AddAgenda' className='as'>
                                    <button className='Adicionar' class="btn btn-success"  data-toggle="tooltip" data-html="true" title='Novo Cadastro'><Link to="/addagenda"><span class="material-icons">add</span></Link></button>
                                 </td>
                            
                                <td id='AddAgenda' className='as'>
                                   {/* spam de comentário   */}
                                    <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="VOLTAR">
                                        <button className='Voltar' class="btn btn-success"><Link to="/agenda"><span class="material-icons">arrow_back</span></Link></button>
                                    </span>
                                </td>
                            </tr>

                            <div class="Cadastro" className="cadastro">
                                <form method="post" acceptCharset="utf-8" autoComplete="off" role="form">
                                    <div>
                                        <input type="hidden" name="_method" class="form-control" value="POST" />
                                    </div>
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text required">
                                            <td className='tdcadastro'><label className="lblcadastro" for="nome">Nome</label></td>
                                            < tr><td className='tdcadastro'><input className="imputcadastro"  type="text" name="nome"  id="idnome"/></td></tr>
                                       </div> 
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                        <td className='tdcadastro'><label className="lblcadastro"  for="celular">Celular</label></td>
                                        < tr><td className='tdcadastro'><input className="imputcadastro" type="text" name="celular"  id="celular" /></td></tr>
                                        </div>
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                                <td className='tdcadastro'>
                                                    <label className="lblcadastro"  for="celular">Categorias</label>
                                                </td>
                                           < tr>
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"   name="category"  id="category" />
                                                </td>
                                            </tr>
                                        </div>
                                    </tr>  
                                    <tr>
                                         <div className="divLinhaCadastro" class="form-group text">
                                                 <td className='tdcadastro'><label className="lblcadastro"  for="celular">Colaborador</label></td>
                                            < tr>
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="text" name="colaborador" id="colaborador" />
                                                </td>
                                            </tr>
                                        </div>
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro"   class="form-group text">
                                                <td className='tdcadastro'>
                                                        <label className="lblcadastro"  for="celular">Data</label>
                                                 </td>
                                            < tr> 
                                                    <td className='tdcadastro'>
                                                        <input className="imputcadastro" type="date" id="date" />
                                                    </td>
                                            </ tr>
                                          </div>   
                                    </tr>
                                   
                                        {/* <label className="lblcadastro"  for="celular">Horario</label> 
                                          <select className='imputselect'>
                                               <option value="" disabled selected>-Selecione um Horário</option>
                                               <option value="1">1 horario</option>
                                               <option value="2">2 horario</option>
                                               <option value="3">3 horario </option>
                                            </select>
                                        */}
                                        
                                        <button className="btnSalvar" class="btn btn-success" type="submit" data-toggle="tooltip" data-html="true" title='SALVAR'><span class="material-icons">save</span></button>
                                    
                                    <div class="input-field col s12">
                                    </div>
                                </form>
                            </div>
                </div>
            </div>
        </main>
    )
}

export default AddAgenda;