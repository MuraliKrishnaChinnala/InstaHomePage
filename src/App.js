import logo from './logo.svg';
import './App.css';
import insta from "./Images/instadevice.png"
import { BsFacebook } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import {SiGoogleplay} from "react-icons/si"

function App() {
  return (
    <div className="main_container">
      <div className="image_container">
        <img src={insta} alt="logo" className="image"/>
      </div>
      <div className='forms'>
      <div className="form_container">
        <h1 className="heading">Instagram</h1>
        {/* <div className="inputs"> */}
          <input type="text" placeholder="email or phone number or username" className="input_container_mail"/>
          <input type="password" placeholder="password" className="input_container"/>
        {/* </div> */}
        <div className="lines_container">
          <div className="line"/>
          <p>OR</p>
          <div className="line"/>
        </div>
        <div className='facebook'>
          <BsFacebook/>
          <p>Login in with Facebook</p>
        </div>
        <p>Forgot Password?</p>
      </div>
      <div className='form_container'>
        <p>Don't have an account?<span>Sign up</span></p>
        <p>Get the App.</p>
        <div className='box_container'>
          <div className='boxes right'>
            <BsApple className='icon'/>
            <div>
              <p className='small'>Download on the</p>
              <h1 className='big'>App Store</h1>
            </div>
          </div>
          <div className='boxes'>
            <SiGoogleplay className='icon'/>
            <div>
              <p className='small'>Get it on</p>
              <h1 className='big'>Google Play</h1>
            </div>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
