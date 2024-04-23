import { Button } from "@chakra-ui/react";
// import './ButtonFatec.css' //className='botao-fatec'
// import styles from './ButtonFatec.module.css' //className={styles.BotaoFatec}

interface Props {
    type: "button" | "submit" | "reset";
    label: string;
}

function ButtonFatec({ type, label }: Props) {
    return (
        /* 
        <button className='botao-fatec' type={type}>
        <button className={styles.BotaoFatec} type={type}>
        */

        <Button type={type} colorScheme='red' variant="solid">
            {label}
        </Button>
    );
}

export default ButtonFatec;
