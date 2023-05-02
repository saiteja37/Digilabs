import React from "react";
import logo from './logo.svg';
import { UserOutlined, UnlockFilled, DollarCircleOutlined, RightCircleFilled, RightCircleOutlined ,SketchOutlined} from '@ant-design/icons';
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './Login';
import { ThemeProvider } from 'react-bootstrap';

const Lightmode=()=>{
    return(
        <div>
    <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}minBreakpoint="xxs">
   
    </ThemeProvider>
        </div>
    )
}
export default Lightmode;