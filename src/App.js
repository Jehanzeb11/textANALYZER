// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'
import Navbar from './prop component/Navbar';
import Text from './prop component/Text';
import Alert from './prop component/Alert';
import About from './prop component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] =useState("light")


const toggleMode=()=>{

  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = "#030b2c";
    document.body.style.color = "white";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "#030b2c"
    document.getElementById("exampleFormControlTextarea1").style.color = "white"
      showAlert("primary","dark mode enabled")

  }else{
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white"
    document.getElementById("exampleFormControlTextarea1").style.color = "black"
      showAlert("primary","light mode enabled")

  }

}





const [alert , setAlert] = useState(null)


const showAlert=(type , mesg)=>{
setAlert({
type : type,
mesg : mesg
})
setTimeout(() => {
  setAlert(null)
}, 2000);
}

  
  return (

//     <Router>
//  <Navbar name = "Home" about = "About" mode={mode} toggleMode={toggleMode}/>
//  <Alert alert={alert} />
//  <Switch>
//           <Route exact path="/about">
//             
//           </Route>
//           <Route exact path="/">
// 
//           </Route>
//         </Switch>
// </Router>


//  <BrowserRouter>
//   <Navbar name = "Home" about = "About" mode={mode} toggleMode={toggleMode}/>
//   <Alert alert={alert} />
//     <Routes>
//       <Route exact path="/" />
//       <Text heading = "Text Analyzer" />
//       <Route exact path="/about">  
//       <About />  
//         </Route>
      
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
<BrowserRouter>
<Navbar name = "Text Analyzer" about = "About" home="Home" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
<Routes>
  <Route path="/" element={<Text heading = "Text Analyzer" />} />
    
      <Route path="/about" element={<About mode={mode} />} />
      
</Routes>
</BrowserRouter>


);

 
}

export default App;
