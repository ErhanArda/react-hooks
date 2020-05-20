import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [theme, setTheme] = useState("light")
  
  return (
    <div className={theme}>
      <button onClick={()=>{setTheme("light")}}>Light</button>
      <button onClick={()=>{setTheme("dark")}}>Dark</button>
    </div>
  )
}


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



export default App
