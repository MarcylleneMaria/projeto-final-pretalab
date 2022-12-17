import { AddressBook, Alien, BracketsCurly } from 'phosphor-react'
import homeImg from '../assets/home.svg'
import { Header } from '../components/Header'
import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
    return (
      <>
        <Header text="Meu site pessoal" image={homeImg} />
        <div className={styles.homeContainer}>
          <div className={styles.cardContainer}> 
             <Alien size={150} weight="thin" />
             <h2 className={styles.cardTitle}> Vida </h2>
             <p className={styles.cardText}> Contar um pouco sobre ele</p>
          </div>

          <div className={styles.homeContainer}>
          <div className={styles.cardContainer}> 
             <BracketsCurly size={150} weight="thin" />
             <h2 className={styles.cardTitle}> Código </h2>
             <p className={styles.cardText}> Contar um pouco sobre ele</p>
          </div>

          <div className={styles.homeContainer}>
          <div className={styles.cardContainer}> 
             <AddressBook size={150} weight="thin" />
             <h2 className={styles.cardTitle}> Contatinho </h2>
             <p className={styles.cardText}> Contar um pouco sobre ele</p>
         </div>
      </>
 )
}
