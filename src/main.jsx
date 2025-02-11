import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
//import Cbc from './Component/Cbc.jsx'
//import Fbc from './Component/Fbc.jsx'
import MyselfClass from './Component/MyselfClass.jsx'
import MySelfFun from './Component/myselfFun.jsx'
import Props from './Props/Props.jsx'
//import Parent from './Props/Parent.jsx'
//import AssParent from './Props/AssParent.jsx'
//import State from './State/State.jsx'
import Inline from './Styles/Inline.jsx'
//import Comp1 from './Styles/Comp1.jsx'
//import "../src/Styles/globally.css"
import Comp2 from './Styles/Comp2.jsx'
//import External from './Styles/External.jsx'
import Ref from './UseRef/Ref.jsx'
//import List from './List-Keys/List.jsx'
import CompA from './useContext/CompA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompA></CompA>
  </StrictMode>,
  
)
