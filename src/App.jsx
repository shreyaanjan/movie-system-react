import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import AddMovie from "./pages/AddMovie"
import DisplayMovie from "./pages/DisplayMovie"
import Description from "./pages/Description"
import EditMovie from "./pages/EditMovie"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-movie" element={<AddMovie />} />
                <Route path="/display-movie" element={<DisplayMovie />} />
                <Route path="/description/:id" element={<Description />} />
                <Route path="/edit-movie/:id" element={<EditMovie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App