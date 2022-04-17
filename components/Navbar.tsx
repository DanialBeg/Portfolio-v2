import Link from 'next/link';
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.options}>
                <Link href="/">Home</Link>
                <a href="/#about">About</a>
                <a href="/#projects">Projects</a>
                <a href="/#contact">Contact</a>
            </div>
        </nav>
    )
}