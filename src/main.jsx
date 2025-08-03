// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext';
import { GlowTrailProvider } from './context/GlowTrailContext'; // ⬅️ import it

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <GlowTrailProvider> {/* ⬅️ wrap App inside GlowTrailProvider */}
        <App />
      </GlowTrailProvider>
    </ThemeProvider>
  </StrictMode >,
)