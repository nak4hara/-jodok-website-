import styles from './Menu.module.css'
import Bars from '../../../assets/bars-solid.svg'

export default function Menu() {
    return (
        <div className={styles.menu}>
            <img src={Bars} alt="Menu Icon" />
        </div>
    )
}