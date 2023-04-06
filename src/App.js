
import { Routes, Route} from "react-router-dom"
import Home from "./routes/home/home.component"

const Store = ()=> {
  return (
    <div>
      <h1>This is my shop</h1>
    </div>
  )
}
const App = () =>{
  
  return (
  <Routes>
      <Route path="/home" element= { <Home />}/>
       <Route path="/store" element= { <Store/>}/>
  </Routes>
 
  );
}

export default App;
