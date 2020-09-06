import '../styles/globals.css'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../components/app-bar'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
