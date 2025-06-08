import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { displayConsoleMessage } from './utils/consoleMessage'

// Display console message with custom configuration
displayConsoleMessage({
  mainMessage: "Ye I'm not hiding the website code as you can see, because i don't care tbh",
  subtitle: "Developer Portfolio",
  links: {
    "GitHub": "https://github.com/giocoliere",
    "Website": "https://giocoliere.dev",
    "X (Twitter)": "https://x.com/giocolieredev",
    "Links": "https://links.gioco.lol",
    "CreeperHUB": "https://creeperhub.net"
  },
  showTips: true,
  showWarning: true,
  showAsciiArt: true
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
