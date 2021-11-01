import Link from 'next/link';
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.options}>
                <Link href="/">Home</Link>
                <a href="#">About Me</a>
            </div>
        </nav>
    )
}