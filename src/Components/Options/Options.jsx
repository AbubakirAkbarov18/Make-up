import './Options.css'

const Options = () => {
  return (
    <section className='options'>
        <div className='container'>
                <form>
                <select>
                    <option value="Все разделы">Все разделы</option>
                </select>
                <select>
                    <option value="Все разделы">Все подразде…</option>
                </select>
                <select>
                    <option value="Все разделы">Все бренды</option>
                </select>
                <input className='options__input' type="text" placeholder='Мин. цена'/>
                <input className='options__input' type="text" placeholder='Макс. цена'/>
                <button onClick={(e) => {e.preventDefault()}} className='options__btn'>Посмотреть</button>
                </form>
        </div>
    </section>
  )
}

export default Options