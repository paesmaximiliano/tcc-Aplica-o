import {Link} from 'react-router-dom'
const AddUser = () =>{
    return(
        <main>
            <h2 id="tituloS"  class="tituloS">Cadastro Usuário</h2>
            <div className="container">
                <div  className='gradebotoes'>
                        <div className='sgradeBotoes'>
                            </div> 
                            <tr id='as' class='traddAgenda'>
                                <td id='AddAgenda' className='as'>
                                    <button className='Adicionar' class="btn btn-success"  data-toggle="tooltip" data-html="true" title='Novo Cadastro'><Link to="/adduser"><span class="material-icons">add</span></Link></button>
                                 </td>
                                <td id='AddAgenda' className='as'>
                                   {/* spam de comentário   */}
                                    <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="VOLTAR">
                                        <button className='Voltar' class="btn btn-success"><Link to="/user"><span class="material-icons">arrow_back</span></Link></button>
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
                                            < tr>  
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="text" name="user[username]" onfocus="this.removeAttribute('readonly')" data-toggle="tooltip" data-html="true" title='Preencher Nome do Usuário'/>
                                                </td>
                                            </tr>
                                       </div> 
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text required">
                                            <td className='tdcadastro'><label className="lblcadastro" for="nome">Telefone</label></td>
                                            < tr>  
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="text" name="user[username]" onfocus="this.removeAttribute('readonly')" data-toggle="tooltip" data-html="true" title='Preencher telefone do Usuário'/>
                                                </td>
                                            </tr>
                                       </div> 
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text required">
                                            <td className='tdcadastro'><label className="lblcadastro" for="nome">Endereço</label></td>
                                            < tr>  
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="text" name="user[username]" onfocus="this.removeAttribute('readonly')" data-toggle="tooltip" data-html="true" title='Preencher Endereço do Usuário'/>
                                                </td>
                                            </tr>
                                       </div> 
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text required">
                                            <td className='tdcadastro'><label className="lblcadastro" for="nome">Usuário</label></td>
                                            < tr>  
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="text" name="user[username]" onfocus="this.removeAttribute('readonly')" data-toggle="tooltip" data-html="true" title='Preencher Nome do Login'/>
                                                </td>
                                            </tr>
                                       </div> 
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                            <td className='tdcadastro'><label className="lblcadastro"  for="celular">Senha</label></td>
                                            < tr>
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro" type="password" name="user[password]" data-toggle="tooltip" data-html="true" title='Preencher Senha' />
                                                </td>
                                            </tr>
                                        </div>
                                    </tr>  
                                    <tr>
                                        <div className="divLinhaCadastro" class="form-group text">
                                                <td className='tdcadastro'>
                                                    <label className="lblcadastro"  for="celular">Confirmar Senha</label>
                                                </td>
                                           < tr>
                                                <td className='tdcadastro'>
                                                    <input className="imputcadastro"  type="password" name="user[password]"data-toggle="tooltip" data-html="true" title='Preencher Senha Novamente'/>
                                                </td>
                                            </tr>
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
                                                                   <input className='checkmark' type="checkbox" name="is_total" value="1" onchange="checkOptionsColaborador(this,this.value);" id="is-total" data-toggle="tooltip" data-html="true" title='O Colaborador Estará Ativo?'/> 
                                                               </td>
                                                               <td>
                                                                 <label  className='lblcadastro' for="is-total"> É Funcionário ?</label>
                                                               </td>
                                                        </tr>
                                                        <tr>
                                                               <td>
                                                                   <input className='checkmark' type="hidden" name="is_total" class="form-control" value="0" />
                                                                   <input className='checkmark' type="checkbox" name="is_total" value="1" onchange="checkOptionsColaborador(this,this.value);" id="is-total" data-toggle="tooltip" data-html="true" title='Permissão de Administrador Estará Ativa?'/> 
                                                               </td>
                                                               <td>
                                                                 <label  className='lblcadastro' for="is-total">É Colaborador?</label>
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

export default AddUser;