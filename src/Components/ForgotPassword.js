import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://url-shortener-backend-s80x.onrender.com/sendmail", {
        email,
      });
      console.log(response.data);
      alert(' OTP sent to your mail successfully')
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerificationSubmit = (event) => {
    event.preventDefault();
    console.log(verificationCode);
    setShowModal(false);
    // Redirect to the password reset page
    window.location.href = `/reset-password?email=${email}`;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid black",
          borderRadius:"10px",
          
        }}
      >
        <h1 style={{ textAlign: "center" }}>Forgot Password!</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Enter Your Email address:
            </label>
            <input
              type="email"
              id="email"
              required
              style={{
                width: "375px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "150px",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#463a3a",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Send Verification
          </button>
        </form>
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "5px",
                maxWidth: "400px",
                height:"260px",
                width: "400px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Enter Verification Code</h2>
              <form onSubmit={handleVerificationSubmit}>
                <div style={{ marginBottom: "10px" }}>
                  <label
                    htmlFor="verificationCode"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    E-mail verification code here:
                  </label>
                  <input
                    type="text"
                    id="verificationCode"
                    required
                    style={{
                      width: "380px",
                      padding: "10px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    value={verificationCode}
                    onChange={(event) =>
                      setVerificationCode(event.target.value)
                    }
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "150px",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#ff5a5f",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
