import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { AppContextProvider } from './context/AppContext.jsx';
import StickyCallUs from './components/StickyCallUs.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <StickyCallUs/>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
