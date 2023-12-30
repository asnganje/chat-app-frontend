import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";
import { BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Chat/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/register" element = {<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;