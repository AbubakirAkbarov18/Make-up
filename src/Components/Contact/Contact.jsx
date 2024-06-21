import './Contact.css'
import logo from './logo.svg'
import Video from './Video.png'
import Telegram from './Telegram.svg'
import Instagram from './Instagram.svg'
import Facebook from './Facebook.svg'
import buy from './buy.png'
import search from './search.png'

const Contact = () => {
  return (
    <section className='contact'>
        <div className='container'>
              <div className='contact__wrapper'>
                  <div className='contact__logos'>
                    <img src={logo} alt="logo" />
                    <h2 className='contact__logo-text'>Онлайн магазин косметики</h2>
                  </div>
                  <address className='contact__telephone-numbers'>
                    <h2 className='contact__phone-text'>Доставка по Узбекистану</h2>
                    <a href='tel:+99833 258-99-79' className='contact__phone'>+99833 258-99-79</a>
                  </address>
                  <div className='contact__working-hours'>
                      <h2 className='contact__times-text'>Время работы</h2>
                      <h2 className='contact__working-hours-times'>с 10:00 до 20:00</h2>
                  </div>
                  <div className='contact__icons'> 
                      <div className='contact__icons-socials'>
                            <h2 className='contact__icons-socials-language'>RU</h2>
                            <img src={Facebook} alt="" />
                            <img src={Telegram} alt="" />
                            <img src={Instagram} alt="" />
                            <img width={20} height={19} src={Video} alt="" />
                      </div>
                      <div className='contact__icons-search-and-buy'>
                            <img src={buy} alt="" />
                            <img src={search} alt="" />
                      </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Contact