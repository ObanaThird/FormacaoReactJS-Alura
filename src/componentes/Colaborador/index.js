import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h5>{nome}</h5>
                <h4>{cargo}</h4>
            </div>
        </div>
    )
}

export default Colaborador