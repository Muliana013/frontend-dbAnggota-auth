import React, { useState } from 'react';
import "./Sign_In.css";
import { BsFillShieldLockFill } from "react-icons/bs";



export default function Sig_in() {
  const [formData, setFormData] = useState({
    nra: '',
    password: ''
});
let nra = '';

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
};


const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("Data",formData);

  const apiUrl = 'https://a15e-140-213-1-44.ngrok-free.app/signin';

  try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              // Include any additional headers here
              'Authorization': 'Bearer your_access_token'
          },
          body: JSON.stringify(formData)
      });

      if (!response.ok) {
          // throw new Error('Network response was not ok');
          alert("error : " + response.json());
      } else if (response.ok) {
        alert("Login Berhasil ");
      }

      const data = await response.json();

      console.log('Login successful:', data);
      // Handle response data as needed (e.g., store user session)
  } catch (error) {
      console.error('Error during login:', error.message);
      // Handle errors (e.g., show error message to user)
  }
};


  return (
    <div className='main-container'> 
    <h1 className='title DATA'>Database Anggota</h1>
      <div className='database-anggota' />
      <div className='frame'>
        <form onSubmit={handleSubmit}>
        <span className='sign-in-1'>Sign In</span>
        <div className='flex-row-fb'>
          <div className='bendera1' />
          <button className='rectangle' type='submit'/>
          <span className='sign-in-2'>Sign In</span>
        </div>
        <span className='sign-in-manage-devices'>
          Sign In to manage all your devices
        </span>
        <span className='nra'>NRA</span>
        <input className='rectangle-3' name='nra' onChange={handleChange}/>
        <span className='password'>Password</span>
        {/* <div className='flex-row' >
        <BsFillShieldLockFill className='icon'/>
          <div className='image' />
          <input className='rectangle-4' />
        </div> */}

        {/* start input */}
        <div className="flex-row">
      <input
        type={passwordVisible ? "text" : "password"}
        className="rectangle-4 btnicon"
        name='password'
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <button
        type="button"
        className="toggle-password-visibility"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? '🙉':'🙈' }

      </button>
    </div>
    </form>
        {/* end input */}

        <span className='forget-password'>Forget Password?</span>
        <span className='login-with'>Or login with</span>
        <div className='flex-row-5'>
          <button className='rectangle-6'/>
          <div className='logo-google' />
          <div className='sign-up-section'>
            <span className='do-not-have-account'>
              Do not have an account?
            </span>
            <span className='sign-up-button'>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}

