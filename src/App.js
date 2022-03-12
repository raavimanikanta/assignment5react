import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Student from "./components/Student"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import StudentProvider from "./components/Studentcontext"
import Addstudent from "./components/Addstudent"


const App =() => {
    return(
        <StudentProvider>
        <div className="background">
        
        <Router>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/Addstudent" element={<Addstudent />} />
                 <Route path="/Addstudent/:id" element={<Addstudent/>}/> 
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            
        </Router>
        
        
             
    
        </div>
        </StudentProvider>
    )

}
export default App