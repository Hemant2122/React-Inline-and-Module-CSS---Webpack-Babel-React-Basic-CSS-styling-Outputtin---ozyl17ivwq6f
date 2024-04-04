import React from 'react'
import '../styles/App.css';
import Styles from "../styles/appStyles.module.css"
const App = () => {

  let heading = {
    color: "red",
    fontSize: "50px"
  }

  return(
    <>
      <div id='main'>
          <h1 className={Styles.success}>Success</h1>
          <h1 id='error' style={heading}>Error</h1>
      </div>
    </>
  )

}


export default App;
