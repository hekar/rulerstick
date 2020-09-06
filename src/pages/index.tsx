import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Flow from '../components/flow'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rulerstick</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Container>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Flow />
      </Container>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
