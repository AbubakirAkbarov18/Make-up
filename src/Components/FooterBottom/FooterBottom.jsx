import './FooterBottom.css'

const FooterBottom = () => {
  return (
    <section className='footer-bottom'>
        <div className='container'>
            <div className='footer-bottom__wrapper'>
                <p className='footer-bottom__years'>© 2016-2024 <br /> <strong>Makeupshop™</strong></p>
                <div className='footer-bottom__copyright'>
                       <p className='footer-bottom__copyright-text'>Все материалы защищены законом Республики Узбекистан об авторском праве.</p>
                       <p className='footer-bottom__copyright-text'>Копирование материалов разрешается только со ссылкой на сайт <strong>makeup.uz.</strong></p> 
                </div>
                <p className='footer-bottom__tas-ix'>Сайт находится в сети TAS-IX</p>
            </div>
        </div>
    </section>
  )
}

export default FooterBottom