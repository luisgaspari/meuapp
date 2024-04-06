import './ButtonFatec.css' //className='botao-fatec'
import styles from './ButtonFatec.module.css' //className={styles.BotaoFatec}

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({ type, label }: Props) {
    return(
        // <button className='botao-fatec' type={type}>
        <button className={styles.BotaoFatec} type={type}>
            {label}
        </button>
    )
}

export default ButtonFatec