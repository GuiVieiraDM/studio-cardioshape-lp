import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles  from './styles/global';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme} >
      <GlobalStyles />
      <App />
     </ThemeProvider>
  </StrictMode>,
)
