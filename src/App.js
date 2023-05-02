import logo from './logo.svg';
import { UserOutlined, UnlockFilled, DollarCircleOutlined, RightCircleFilled, RightCircleOutlined ,SketchOutlined} from '@ant-design/icons';
import './App.css';
import Login from './Login';
import styled, { ThemeProvider } from "styled-components";
import Lightmode from './Lightmode';
import { useState } from 'react';
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme,setTheme]=useState("light");
  const themetoggler=()=>{
    theme=='light'?setTheme("dark"):setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    <div className="App">
      <center className='mt-5'>
        <div>
            <div className="row">
                <div className="col-11"><h2 style={{paddingLeft:"20px"}}> <SketchOutlined />&nbsp;Lookscout</h2></div>
                <div className="col-1"><a className="btn" onClick={() => themetoggler()}><h2><i class="bi bi-moon-fill"></i></h2></a></div>
            </div>
           
          <div style={{ border: '2px solid green', height: "600px", width: "800px" }} className='mt-4'>
            <div className='my-3'>
              <h1><UnlockFilled /> ----------<UserOutlined />----------<DollarCircleOutlined />----------<RightCircleOutlined /></h1>
            </div>
            <div className='row'>
              <div className='col-3'>
                <h5 className='ml-3 text-primary'>Account</h5>
              </div>
              <div className='col-3'>
                <h5 className='ml-3'>Personal</h5>
              </div>
              <div className='col-3'>
                <h5 className='ml-3'>Billing</h5>
              </div>
              <div className='col-3'>
                <h5 className='ml-3'>Done</h5>
              </div>
            </div>
            <Login></Login>
          </div>

        </div>
      </center>
    </div>
     
    </StyledApp>
  </ThemeProvider>
  );
}

export default App;
