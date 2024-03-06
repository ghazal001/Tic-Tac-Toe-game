import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
function App() {
  

  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
        <Player initialName="Player1" symbol="x"/>
        <Player initialName="Player2" symbol="O"/>
    
        </ol>

        <GameBoard/>
      </div>
      LOG
    </main>
  

  )
}

export default App
