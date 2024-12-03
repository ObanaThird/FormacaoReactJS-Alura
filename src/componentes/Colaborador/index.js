import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <IoIosCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)} />

            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h5>{colaborador.nome}</h5>
                <h4>{colaborador.cargo}</h4>
                <div className="favoritar">
                    {colaborador.favorito 
                    ? <FaHeart {...propsfavorito} color="#FF0000" /> 
                    : <CiHeart {...propsfavorito} />}

                </div>
            </div>
        </div>
    )
}

export default Colaborador