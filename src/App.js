import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import App1 from "./all/App1";

import Navbar from './all/Navbar'
import Navbar2 from './all/Navbar2'
import Navbar3 from './all/Navbar3'
import Navbar4 from './all/Navbar4'

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Header from "./Header";


function App() {
  return (
    <Container style={{ width: "100%",padding:"0px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/ssce/header"
                element={
                  <ProtectedRoute>
                    <Header />
                  </ProtectedRoute>
                }
              >
              <Route path='/ssce/header/chat' element={<App1/>}/>
              <Route path='/ssce/header/cse' element={<Navbar/>}>

 </Route>
 <Route path='/ssce/header/ece' element={<Navbar2/>}>

 </Route>
 <Route path='/ssce/header/eee' element={<Navbar3/>}>

 </Route>


<Route path='/ssce/header/mec' element={<Navbar4/>}>

 </Route>
              </Route>
              

              <Route path="/ssce" element={<Login />} />
              <Route path="/ssce/signup" element={<Signup />} />
             
            </Routes>
         
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
