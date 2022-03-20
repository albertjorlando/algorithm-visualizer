import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css';

import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'

import App from './App'

const customTheme = extendTheme({
  ...theme,
  config: {
    useSystemColorMode: true,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App 
          title="Should I Mask?"
          subtitle="Is the 7-day-avg per 100k above 9?"
      />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
