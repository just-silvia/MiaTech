import React from "react"
import Card from "./components/Card"

const App = () => {

  return(
    <>
      <Card>
        <h1>Title</h1>
        <p>Ciao questa è una card creata con il props.children, ma non ha nessuno stile css.</p>
      </Card>
    </>
  )
}

export default App 