import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pettik</title>
        <meta name="description" content="PETTIK is a revolutionizing one stop application for pet lovers.We help consumers find & embrace pets for training, adoption and gifting as well. The app is designed to enable consumers to find best veterinary doctors, renowned trainers, book instant appointments, schedule vaccination with pre-set reminders and purchase Pet food." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={"/maintenance.png"} height="250" width="500" alt='Maintenance Image'/>
        <h1 className={styles.title}>
          Welcome to <a href="https://pettik.com">Pettik.com</a>
        </h1>

        <p className={styles.description}>
         The site is under maintenance. We are preparing to serve you better.
        </p>

        
      </main>
    </div>
  )
}
