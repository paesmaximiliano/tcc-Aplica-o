import {Link} from 'react-router-dom';
import './Service.css';
const AddService = () =>{
    return(
        <main>
            
        <h2 id="tituloS"  class="tituloS">Cadastro de Serviços</h2>
            <div className="container">
                <div  className='gradebotoes'>
                   
                        <div className='sgradeBotoes'>
                            </div> 
                            <tr id='as' class='traddAgenda'>
                                <td id='AddAgenda' className='as'>
                                    <button className='Adicionar' class="btn btn-success"  data-toggle="tooltip" data-html="true" title='Novo Cadastro'><Link to="/addservice"><span class="material-icons">add</span></Link></button>
                                 </td>
                                <td id='AddAgenda' className='as'>
                                   {/* spam de comentário   */}
                                    <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="VOLTAR">
                                        <button className='Voltar' class="btn btn-success"><Link to="/service"><span class="material-icons">arrow_back</span></Link></button>
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
                                            <td className='tdcadastro'>
                                                <label className="lblcadastro" for="nome">Titulo</label>
                                            </td>
                                            < tr>  
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="text" name="nome"  id="idtitulo" data-toggle="tooltip" data-html="true" title='Preencher Titulo'/>
                                                </td>
                                            </tr>
                                       </div> 
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                        <td className='tdcadastro'>
                                            <label className="lblcadastro"  for="celular">Descrição</label>
                                        </td>
                                        < tr>
                                            <td className='tdcadastro'>
                                                <input className="imputcadastro" type="text" name="descricao"  id="iddescricao" data-toggle="tooltip" data-html="true" title='Preencher Descrição' />
                                            </td>
                                        </tr>
                                        </div>
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                            <td className='tdcadastro'>
                                                <label className="lblcadastro"  for="celular">Valor</label>
                                            </td>
                                            < tr>
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro" type="text" name="descricao"  id="iddescricao" data-toggle="tooltip" data-html="true" title='Preencher Valor' />
                                                </td>
                                            </tr>
                                        </div>
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                                <td className='tdcadastro'>
                                                    <label className="lblcadastro"  for="celular">Categorias</label>
                                                </td>
                                            < tr> 
                                                    <td className='tdcadastro'>
                                                    <select name='categoria-service' className='imputcadastro' tabIndex="-1" aria-hidden ="true" data-toggle="tooltip" data-html="true" title='Selecione'>
                                                            <option value>-Selecionar Categoria-</option>
                                                            <option value>Cabeleireira</option>
                                                            <option value>Manicure</option>
                                                            <option value>Depiladora</option>
                                                            <option value>Esteticista</option>
                                                            <option value>Maquiadora</option>
                                                    </select>
                                                    </td>
                                            </ tr>
                                          </div>   
                                    </tr>
                                    <tr>
                                         <div className="divLinhaCadastro" class="form-group text">
                                                 <td className='tdcadastro'><label className="lblcadastro"  for="celular">Situação</label></td>
                                            < tr> 
                                                <td className='tdcadastro'>
                                                        <tr>
                                                               <td>
                                                                   <input className='checkmark' type="hidden" name="is_total" class="form-control" value="0" />
                                                                   <input className='checkmark' type="checkbox" name="is_total" value="1" onchange="checkOptionsColaborador(this,this.value);" id="is-total" data-toggle="tooltip" data-html="true" title='A Categoria Estará Ativa?'/> 
                                                               </td>
                                                               <td>
                                                                 <label  className='lblcadastro' for="is-total"> Ativo ?</label>
                                                               </td>
                                                        </tr>
                                                </td>
                                             </tr>
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

export default AddService;