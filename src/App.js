import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from './all/Navbar'
import Navbar2 from './all/Navbar2'
import Navbar3 from './all/Navbar3'
import Navbar4 from './all/Navbar4'
import Notes from './all/Notes'
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
                path="/header"
                element={
                  <ProtectedRoute>
                    <Header />
                  </ProtectedRoute>
                }
              >


<Route path='/header/mec' element={<Navbar4/>}>
 <Route
          path="/header/mec/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/header/mec/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/mec/18ME86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>

 </Route>
 <Route path='/header/eee' element={<Navbar3/>}>
 <Route
          path="/header/eee/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/header/eee/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/eee/18EE86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>

 </Route>
 <Route path='/header/ece' element={<Navbar2/>}>
 <Route
          path="/header/ece/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/header/ece/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/ece/18EC86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>

 </Route>
 <Route path="/header/cse" element={<Navbar/>} >
 <Route
          path="/header/cse/21Mat11"
          element={
            <Notes
              title="CALCULUS AND DIFFERENTIAL EQUATIONS"
         
              name1="Differential Calculus - 1"
              name2="Differential Calculus - 2 "
              name3="Ordinary Differential Equations (ODE’s) of first order"
              name4="Ordinary Differential Equations (ODE’s) of first order"
              name5="Linear Algebra"
              link1="https://drive.google.com/file/d/1Cz-j6U3rGk4kIuxAueSp4y5w-p3A_58Q/view"
              link2="https://drive.google.com/file/d/1kuFzaVgL2BAqBUvoDpUDDXv6ktBeFM30/view"
              link3="https://drive.google.com/file/d/1FaULAf0_iXu2otoN-u7GA-dNvXcZMJq-/view"
              link4="https://drive.google.com/file/d/1NyT3kVfSzSAeZtWvbF5IVtR1NMFvxo9s/view"
              link5="https://drive.google.com/file/d/1XugslSc0oAWx33m87XUkedHplTvC7hQK/view"
            />
          }
        />
        <Route
path="/header/cse/21CHE12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21CPS13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21ELN14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21ME15"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21Mat21"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21PHY12"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21ELE13"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21CIV14"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/21EGDL25"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18MAT31"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS32"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS33"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS34"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS35"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS36"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18MAT41"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS42"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS43"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS44"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS45"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS46"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS51"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS52"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS53"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS54"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS55"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS56"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS61"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS62"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS63"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS64"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS65"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS66"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS71"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS72"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS73"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS74"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS75"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS76"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS81"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS82"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS83"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS84"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS85"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
<Route
path="/header/cse/18CS86"
element={
  <Notes
    title=""
 
    name1=" "
    name2=""
    name3=""
    name4=""
    name5=""
    link1=""
    link2=""
    link3=""
    link4=""
    link5=""
  />
}
/>
 </Route>
              </Route>
              

              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
             
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
