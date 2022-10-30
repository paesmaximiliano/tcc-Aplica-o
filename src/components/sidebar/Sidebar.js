import './Sidebar.css';
import logo from '../../assets/KALLU.png'

const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt="logo"/>
                    <h1>Kallu Salão</h1>
                </div>
                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id='sidebarIcon'
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <h2>ADMIN</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href='/'>Dashboard</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-archive'></i>
                    <a href='/service'>Serviços</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-bars'></i>
                    <a href='/category'>Categorias</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-calendar-o'></i>
                    <a href='/agenda'>Agendamentos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-users'></i>
                    <a href='/user'>Usuarios</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-user'></i>
                    <a href='/client'>Clientes</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-money'></i>
                    <a href='/payment'>Pagamentos</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-tasks'></i>
                    <a href='/plataforma'>A Plataforma</a>
                </div>
                <div className='sidebar__logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='#'>Log out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;