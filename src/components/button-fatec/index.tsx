import './ButtonFatec.css' //className='botao-fatec'
//import styles from './ButtonFatec.module.css' //className={styles.BotaoFatec}

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({ type, label }: Props) {
    return (
        // <button className={styles.BotaoFatec} type={type}></button>
        <button className='botao-fatec' type={type}>
            {label}
        </button>
    )
}

export default ButtonFatec