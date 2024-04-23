import { Input } from '@chakra-ui/react'

interface Props {
    type: 'text' | 'email' | 'tel'
    text: string
    defaultvalue: string
}

function InputFatec({ type, text, defaultvalue }: Props) {
    return (
        <Input
            placeholder={text}
            _placeholder={{ color: 'gray.500' }}
            type={type}
            defaultValue={defaultvalue}
            color='red'
        />
    )
}

export default InputFatec