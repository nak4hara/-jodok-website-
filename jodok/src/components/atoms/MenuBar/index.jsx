import styles from './Menu.module.css'
import { Menu } from '@mui/icons-material'

export default function MenuBar() {
    return (
        <div className={styles.menu}>
            <Menu sx={{fontSize: 30}} />
        </div>
    )
}