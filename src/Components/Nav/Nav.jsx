import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <div className='container'>
            <ul className='nav__list'>
                    <li><NavLink className="nav__link">Макияж</NavLink></li>
                    <li><NavLink className="nav__link">Уход</NavLink></li>
                    <li><NavLink className="nav__link">Аксессуары</NavLink></li>
                    <li><NavLink className="nav__link">Подарки</NavLink></li>
                    <li><NavLink className="nav__link">Скидки</NavLink></li>
                    <li><NavLink className="nav__link">Бренды</NavLink></li>
                    <li><NavLink className="nav__link">ВХОД / РЕГИСТРАЦИЯ</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav