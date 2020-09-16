import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import Flow from '../components/flow'
import FlowService from '../services/flow-service';
import FeedService from '../services/feed-service';
import ItemService from '../services/item-service';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const flowService = new FlowService()
  const flows = flowService.list(0, 0)
  const feedService = new FeedService()
  const feeds = feedService.list(0, 0)
  return {
    props: {
      flows,
      feeds,
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
