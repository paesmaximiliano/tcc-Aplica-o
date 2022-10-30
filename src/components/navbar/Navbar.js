import "./Navbar.css";
import avatar from '../../assets/Grupo.png'

const Navbar = ({sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a className="navbar-minimize" href="#"><span class="material-icons">menu</span></a>

                <p>Bem-vindo a Beauty Sallom </p> 
            </div>

            <div className="navbar__right">
                
             <a href="#"><span class="material-icons"data-toggle="tooltip" data-html="true" title='AGENDAMENTOS RECENTES'>calendar_month</span></a>

             <a href="#" ><span data-toggle="tooltip" data-html="true" title='ABRIR MENSAGENS DO SISTEMA'class="material-icons" >mail_outline</span></a>
                    
            <a href="#"> <span class="material-icons" data-toggle="tooltip" data-html="true" title='SAIR DO SISTEMA'>logout</span></a>  

            </div>
        </nav>
    )
}

export default Navbar;