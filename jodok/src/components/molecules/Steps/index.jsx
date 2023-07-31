import styles from './Steps.module.css'

export default function Steps({ steps , classNameTitle }) {
    return (
        <section className={styles.instructions}>
            <h3 className={classNameTitle}>
                Instructions:
            </h3>
            <ol>
                {steps.map((step, index) => { return(
                    <li key={index}>{step}</li>
                )
                })}
            </ol>
        </section>
    )
}