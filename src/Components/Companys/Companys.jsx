import './Companys.css'
import First from './First.png'
import Second from './Second.png'
import Third from './Third.png'
import Fourth from './Fourth.png'
import Fifth from './Fifth.png'

const Companys = () => {
  return (
    <section className='Companys'>
        <div className='container'>
            <div className='companys__wrapper'>
                <img src={First} alt="" />
                <img src={Second} alt="" />
                <img src={Third} alt="" />
                <img src={Fourth} alt="" />
                <img src={Fifth} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Companys