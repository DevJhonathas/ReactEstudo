import styles from './Frases.module.css'

function Frases(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um component com uma frase.</p>
        </div>
    )
}

export default Frases