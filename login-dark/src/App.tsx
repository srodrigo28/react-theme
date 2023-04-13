import './styles.css'
import { Login } from "./Login"
import ReactSwitch from "react-switch";
import { useState } from 'react';
// npm i react-switch
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(btn => (btn === "light" ? "dark" : "light"));
  }

  return (
    <div className='App' id={theme}>
       <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}

        /** Opcionais */
        checkedIcon={false}
        uncheckedIcon={false}
        onColor='#000'
        /** Opcionais */
      />
      
      <Login />
    </div>
  )
}

export default App