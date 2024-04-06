import ButtonFatec from "../button-fatec"
import InputFatec from "../input-fatec"

function FormFatec() {
    return (
        <>
            <div>
                <p>Entre em Contato</p>
                <hr />
                <div>
                    <InputFatec text='Nome' defaultvalue='Luis Gaspari' type='input' />
                </div>
                <div>
                    <InputFatec text='E-mail' defaultvalue='' type='input' />
                </div>
                <div>
                    <InputFatec text='Telefone' defaultvalue='' type='input' />
                </div>
                <hr />
                <ButtonFatec type='button' label='Fatec: Enviar mensagem' />
            </div>

        </>
    )
}

export default FormFatec