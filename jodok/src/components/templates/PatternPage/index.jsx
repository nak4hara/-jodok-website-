import styles from './PatternPage.module.css'
import { Outlet } from "react-router-dom";

export default function PatternPage() {
    return(
        <main className={styles.container} >
            <Outlet />
        </main>
    )
}