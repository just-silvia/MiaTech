import React from "react"
import ItemList from "./components/ItemList"


const App = () => {
  const colori = ["red", "blue", "green", "yellow"];
  const numeri = [1, 2, 3, 4, 5];

  return(
    <div>
      <ItemList items={colori} />

      <ItemList items={numeri} />

      <ItemList items={[]} />

      <ItemList />
    </div>
  )
}

export default App