// import logo from './logo.svg';
import { useState } from 'react'
import './App.css'

function App() {
  const styles = { fontSize: 20, color: 'Blue' }
  const [state, setstate] = useState(styles)
  const [text, settext] = useState([])
  const [formtext, setformtext] = useState("")
  const handlefontsize = (e) => {
    setstate((prev) => {
      const newstate = structuredClone(prev)
      newstate.fontSize = e.target.value
      return newstate
    })
  }
  const handlecolor = (e) => {
    setstate((prev) => {
      const newstate = structuredClone(prev)
      newstate.color = e.target.value
      return newstate
    })
  }
  const textchange = (e) => {
    setformtext(e.target.value)
  }
  const handleaddtext = (e) => {
    settext((prev) => {
      const newstate = structuredClone(prev)
      
      
      newstate.push(formtext)
      
      
      return newstate
    })
    setformtext("")
  }
  return (
    <div className="app">
      <div className="editSpace">
        
        {text.map((t, index) => {
          return (
            <p
              key={index}
              style={{
                border:"1px solid Red",
                backgroundColor:"red",
                fontSize: `${state.fontSize}px`,
                color: state.color,
              }}
            >
              {t}
            </p>
          )
        })}
      </div>
      <div className="styleSpace">
        <label htmlFor="fsize">Font Size</label>
        <br />
        <input
          type="text"
          onChange={handlefontsize}
          id="fsize"
          name="fsize"
          value={state.fontSize}
        />
        <br />
        <label htmlFor="color">Colour</label>
        <br />
        <input
          type="text"
          onChange={handlecolor}
          id="color"
          name="color"
          value={state.color}
        />
        <br />
        <br />
        <label htmlFor="newtext">Add Text</label>
        <br />
        <input type="text" value={formtext} onChange={textchange} id="newtext" name="newtext" placeholder="addtext" />
        <br />
        <button onClick={handleaddtext}>Add Text</button>
      </div>
    </div>
  )
}

export default App
