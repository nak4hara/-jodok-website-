import styles from './Steps.module.css'

export default function Steps({ steps }) {
    return (
        <section className={styles.instructions}>
            <h3>Instructions:</h3>
            <ol>
                {steps.map((step, index) => { return(
                    <li key={index}>{step}</li>
                )
                })}
            </ol>

        </section>
    )
}