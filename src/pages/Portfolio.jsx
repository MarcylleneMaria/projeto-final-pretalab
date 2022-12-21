import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import Axios from 'axios';
import { ArrowBendDownRight } from "phosphor-react"
import styles from '../styles/pages/portfolio.module.css'


const projetos = [
    {
        id: 1,
        nome: "Lista de tarefas",
        descricao: "Projeto final do módulo II do Ciclo Formativo Pretalab. Feito usando HTML, CSS e JavaScript.",
        link: "https://github.com/MarcylleneMaria/todolist-modulo2-pretalab"
    },
    {
        id: 2,
        nome: "Portfólio",
        descricao: "Projeto final do módulo I do Ciclo Formativo Pretalab. Feito usando HTML e CSS.",
        link: "https://portfolio-marcyllene-maria.netlify.app/"
    },
]

export function Portfolio() {
    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        async function pegaRepositorios() {
            const repos = await Axios.get("https://api.github.com/users/MarcylleneMaria/repos")
            setRepositorios(repos.data)
        }
        pegaRepositorios();
    })

    return (
        <>
            <Header text="Projetos" image={portfolioImg} />
            <div className={styles.projetosContainer}>
                <h1 className={styles.projetosTitle}>Projetos</h1>
                <div className={styles.cardContainer}>
                    {projetos.map(repo => {
                        return (
                            <div className={styles.card} key={repo.id}>
                                <h2>{repo.nome}</h2>
                                <img className={styles.cardImg} src={repo.imagem} />
                                <p className={styles.cardTexto}>{repo.descricao}</p>
                                <a className={styles.cardLink} href={repo.link} target='_blank'>Veja aqui</a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.projetosContainer}>
                <h2 className={styles.projetosTitle}>Outros projetos</h2>
                <div className={styles.repoContainer}>
                    <div className={styles.repoCardContainer}>
                        {repositorios.map(repo =>
                            <div className={styles.cardRepo}>
                                <h3 className={styles.repoTitle} key={repo.id}>{repo.name}</h3>
                                <p className={styles.repoTexto}>{repo.description}</p>
                                <a className={styles.repoLink} href={repo.html_url} target='_blank'><ArrowBendDownRight size={150} color="#686AAC"/></a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}