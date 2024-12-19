import Imagem from '../../assets/banner.png'
import './Banner.css'

const Banner = () =>{
    return (
        <header className='banner'>
            <img src={Imagem} alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner