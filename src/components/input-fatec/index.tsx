import './InputFatec.css'

interface Props {
    type: string
    text: string
    defaultvalue: string
}

function InputFatec({ type, text, defaultvalue }: Props) {
    return (
        <input className='input-fatec' type={type} defaultValue={defaultvalue} placeholder={text}></input>
    )
}

export default InputFatec