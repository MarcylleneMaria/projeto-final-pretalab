import { Header } from '../components/Header'
import sobreimage from '../assets/sobre.svg'
import Home from '../assets/sobreperf.png'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return (
        <>
            <Header text="Minha Trajetória" image={sobreimage} />
            <dev className={styles.sobreContainer}>
                <img className={styles.bioImage} src={Home} />
                <div className={styles.bioContainer}>
                    <h2 className={styles.bioTitle}>Um pouco da minha história!</h2>
                    <p className={styles.bioDescricao}>
                        Olá! Meu nome é Marcyllene Santos,
                        nasci na cidade de São Gonçalo- RJ, hoje moro em Armação dos Búzios,
                        tenho 26 anos, possuo bacharelado em Ciência Ambiental pela Universidade Federal Fluminense - UFF Niterói. 
                        Sou curiosa e amo estar imersa na natureza, fazer trilhas e ir a praia. 
                        Sou desenvolvedora Front-End através do curso da PretaLab, onde me desenvolvi muito nas práticas das aulas e, e através do curso consegui desenvolver  e aperfeiçoar skills.
                    </p>
                </div>
            </dev>

        </>
    )
}