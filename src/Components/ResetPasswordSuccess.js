import React from 'react';
import { Link } from 'react-router-dom';

function ResetPasswordSuccess() {
  return (
    <div className="success-message">
      <h2>Password Reset Successful!</h2>
      <p>Your password has been reset successfully. You can now <Link to="/">login</Link> with your new password.</p>
    </div>
  );
}

export default ResetPasswordSuccess;
