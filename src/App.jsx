import Player from "./components/Player.jsx"

function App() {
  

  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
        <Player initialName="Player1" symbol="x"/>
        <Player initialName="Player2" symbol="O"/>
    
        </ol>

        Game Board 
      </div>
      LOG
    </main>
  

  )
}

export default App
