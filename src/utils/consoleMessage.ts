interface ConsoleMessageConfig {
  mainMessage: string
  subtitle?: string
  links?: Record<string, string>
  showTips?: boolean
  showWarning?: boolean
  showAsciiArt?: boolean
  colors?: {
    title?: string
    message?: string
    links?: string
    linkUrls?: string
    tips?: string
    warning?: string
    ascii?: string
  }
}

export const displayConsoleMessage = (config: ConsoleMessageConfig) => {
  const {
    mainMessage,
    links = {},
    showTips = true,
    showWarning = true,
    showAsciiArt = true,
    colors = {}
  } = config

  const defaultColors = {
    title: '#ff6b6b',
    message: '#4ecdc4',
    links: '#96ceb4',
    linkUrls: '#feca57',
    tips: '#ff9ff3',
    warning: '#ffa726',
    ascii: '#54a0ff'
  }

  const finalColors = { ...defaultColors, ...colors }

  // Main title
  console.log(
    `%c🚀 Hey Developer! 👋`,
    `color: ${finalColors.title}; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);`
  )
  
  // Main message
  console.log(
    `%c${mainMessage}`,
    `color: ${finalColors.message}; font-size: 16px; font-weight: bold;`
  )
  
  // Links section
  if (Object.keys(links).length > 0) {
    console.log(
      `%c📍 Find me here:`,
      `color: ${finalColors.links}; font-size: 14px; font-weight: bold; margin-top: 10px;`
    )
    
    Object.entries(links).forEach(([name, url]) => {
      console.log(
        `%c🔗 ${name}: %c${url}`,
        `color: ${finalColors.links}; font-weight: bold;`,
        `color: ${finalColors.linkUrls}; text-decoration: underline;`
      )
    })
  }
  
  // Tips
  if (showTips) {
    console.log(
      `%c💡 Tip: You can inspect the code, fork it, or even contribute!`,
      `color: ${finalColors.tips}; font-style: italic; font-size: 12px; margin-top: 10px;`
    )
  }
  
  // Warning
  if (showWarning) {
    console.log(
      `%c⚠️  But hey, don't try anything malicious! 😉`,
      `color: ${finalColors.warning}; font-weight: bold; font-size: 14px;`
    )
  }
  
  // ASCII Art
  if (showAsciiArt) {
    console.log(
      `%c
      ╔══════════════════════════════════╗
                   Giocoliere             
                  Wesbite v0.7    
      ╚══════════════════════════════════╝
      `,
      `color: ${finalColors.ascii}; font-family: monospace; font-size: 12px;`
    )
  }
}
