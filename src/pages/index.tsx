import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import Flow from '../components/flow'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
    },
  }
}

export default function Home(props) {

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
        <Flow {...props} />
      </Container>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
