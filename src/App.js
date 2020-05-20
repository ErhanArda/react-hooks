import React, { useState, useEffect } from 'react'
import "./App.css"

const App = () => {

  const [theme, setTheme] = useState("light")
  const [num, setNum] = useState(0)

  // componentDidMount(){
  //   document.title = "Basic Hook Usage"
  // }
  useEffect(() => {
    document.title = "Basic Hook Usage"
  }, [])

  return (
    <div className={theme}>
      <div >
        <button onClick={() => { setTheme("light") }}>Light</button>
        <button onClick={() => { setTheme("dark") }}>Dark</button>
      </div>
      <div>
        <h1>{num}</h1>
        <button onClick={() => { setNum(num + 1) }}>Increase</button>
        <button onClick={() => { setNum(num - 1) }}>Decrease</button>
        <button onClick={() => { setNum(0) }}>Reset</button>
      </div>
    </div>
  )
}

export default App

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: "light"
//     };
//   }
//   render() {
//     return (
//       <div className={this.state.theme} >
//         <button onClick={()=>{this.setState({
//           theme: "light"
//         })}} >Light</button>
//         <button onClick={()=>{this.setState({
//           theme: "dark"
//         })}}>Dark</button>
//       </div>
//     );
//   }
// }
