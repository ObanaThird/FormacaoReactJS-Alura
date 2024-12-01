import { IoIosCloseCircle } from "react-icons/io";
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <IoIosCloseCircle size={25} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h5>{colaborador.nome}</h5>
                <h4>{colaborador.cargo}</h4>
            </div>
        </div>
    )
}

export default Colaborador