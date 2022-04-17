import Link from 'next/link';
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.options}>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <a href="/#contact">Contact</a>
            </div>
        </nav>
    )
}