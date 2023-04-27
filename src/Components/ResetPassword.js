import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams,useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [params,setParams]= useSearchParams(); // use useSearchParams to get email from URL
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://url-shortener-backend-s80x.onrender.com/changepassword/${params.get("email")}`, { password1, password2 });
      console.log(response.data);
      // show success message to user
      alert("Password Reset Successful!")
      navigate('/success');
    } catch (error) {
      console.log(error);
      // show error message to user
      alert("Password Reset Failed!")
    }
  };

  return (
     
    <form onSubmit={handleSubmit} className='password-form'>
      <div>
        <label className='password-label'>New Password:</label>
        <input type="password" value={password1} onChange={(event) => setPassword1(event.target.value)} className='password-input' />
      </div>
      <div>
        <label className='password-label'>Confirm New Password:</label>
        <input type="password" value={password2} onChange={(event) => setPassword2(event.target.value)} className='password-input' />
      </div>
      <button type="submit">Reset Password</button>
    </form>
    
  );
}

function ResetPasswordPage() {
  return (
    <div>
      <h1 className='password-title'>Reset Your Password Here!</h1>
    <div className="password-container">
    
      <ResetPassword />
     
    </div>
    </div>
  );
}

export default ResetPasswordPage;