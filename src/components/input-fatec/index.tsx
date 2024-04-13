import styles from './InputFatec.module.css'

interface Props {
    type: 'text' | 'email' | 'tel'
    text: string
    defaultvalue: string
}

function InputFatec({ type, text, defaultvalue }: Props) {
    return (
        <input className={styles.inputFatec} type={type} defaultValue={defaultvalue} placeholder={text}></input>
    )
}

export default InputFatec