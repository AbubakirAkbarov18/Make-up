import './Footer.css'
import { Link } from 'react-router-dom'
import facebook from './facebook.png'
import instagram from './instagram.png'
import OK from './OK.png'
import Telegram from './Telegram.png'
import video from './video.png'
import VK from './VK.png'


const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                  <div className='footer__make-up-shop'>
                        <h2 className='footer__make-up-shop--head'>Makeup Shop</h2>
                        <div className='footer__make-up-shop__info'>
                                <Link className='footer__make-up-shop__info__link'>О магазине</Link>
                                <Link className='footer__make-up-shop__info__link'>Вакансии</Link>
                                <Link className='footer__make-up-shop__info__link'>Дисконтная программа</Link>
                                <Link className='footer__make-up-shop__info__link'>Контакты</Link>
                        </div>
                  </div> 
                  <div className='footer__make-up-shop'>
                        <h2 className='footer__make-up-shop--head'>Online Магазин</h2>
                        <div className='footer__make-up-shop__info'>
                                <Link className='footer__make-up-shop__info__link'>Акции</Link>
                                <Link className='footer__make-up-shop__info__link'>Доставка</Link>
                                <Link className='footer__make-up-shop__info__link'>Оплата</Link>
                                <Link className='footer__make-up-shop__info__link'>Поставщикам</Link>
                                <Link className='footer__make-up-shop__info__link'>Как оформить заказ?</Link>
                                <Link className='footer__make-up-shop__info__link'>Оплата с помощью Сlick</Link>
                        </div>
                  </div> 
                  <div className='footer__make-up-shop'>
                        <h2 className='footer__make-up-shop--head'>Блог</h2>
                        <div className='footer__make-up-shop__info'>
                                <Link className='footer__make-up-shop__info__link'>Статьи</Link>
                                <Link className='footer__make-up-shop__info__link'>Блоггерам</Link>
                        </div>
                  </div> 
                  <div className='footer__social-media'>
                        <h2 className='footer__make-up-shop--head'>Подпишитесь!</h2>
                        <div className='footer__socials'>
                            <Link target='blank' to={'https://www.facebook.com/'}><img src={facebook} alt="" /></Link>
                            <Link target='blank' to={'https://www.instagram.com/'}><img src={instagram} alt="" /></Link>
                            <Link target='blank' to={'https://web.telegram.org/'}><img src={Telegram} alt="" /></Link>
                            <Link target='blank' to={'https://www.youtube.com/'}><img src={video} alt="" /></Link>
                            <Link target='blank' to={'https://m.vk.com/'}><img src={VK} alt="" /></Link>
                            <Link target='blank' to={'https://ok.ru/'}><img src={OK} alt="" /></Link>
                        </div>
                  </div> 
            </div>
        </div>
    </footer>
  )
}

export default Footer