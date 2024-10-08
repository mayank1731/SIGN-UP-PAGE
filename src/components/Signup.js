import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, Input, Button, CheckboxWrapper } from '../styles/LoginSignupStyles';
// import Header from '../components/Header';

const Signup = ({ setIsSignedUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [termsAccepted, setTermsAccepted] = useState(false); // Terms acceptance flag
  const [captchaVerified, setCaptchaVerified] = useState(false); // CAPTCHA verified flag
  const navigate = useNavigate();

  // Handle form submission (Signup)
  const handleSignup = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('Please read all terms and conditions'); // Alert if terms not accepted
      return;
    }

    if (!captchaVerified) {
      alert('Please complete the CAPTCHA verification'); // Alert if CAPTCHA not verified
      return;
    }

    // Check if all fields are filled
    if (!username || !email || !password) {
      alert('Please fill all fields'); // Alert if any field is empty
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords don't match"); // Show popup if passwords don't match
      return;
    }

    // Mock signup, set is signed up to true
    setIsSignedUp(true);
    navigate('/login'); // Redirect to login after signup
  };

  // Commented out OTP functionality
  /*
  // Handle OTP request
  const requestOtp = () => {
    if (validatePhoneNumber(phone)) {
      setOtpSent(true); // OTP is sent, show the OTP input field
      setTimer(30); // Start a 30-second timer
    } else {
      alert('Please enter a valid phone number');
    }
  };

  // Validate phone number (Indian phone number validation as an example)
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Basic validation for 10 digits starting with 6-9
    return phoneRegex.test(phone);
  };

  // Handle resend OTP
  const resendOtp = () => {
    setOtp(''); // Clear previous OTP
    setTimer(30); // Reset timer
  };
  */

  // Handle CAPTCHA checkbox toggle
  const handleCaptcha = () => {
    setCaptchaVerified(!captchaVerified);
  };

  return (
    <>
      <FormWrapper>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Confirm Password field */}
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Commented out phone number and OTP section */}
          {/*
          <PhoneNumberWrapper>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button type="button" onClick={requestOtp} style={{ marginLeft: '10px' }}>
              Send OTP
            </Button>
          </PhoneNumberWrapper>

          {otpSent && (
            <OtpInputWrapper>
              <Input
                type="password"  // Hides OTP input like a password
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {timer > 0 ? (
                <p>Resend OTP in {timer} seconds</p>
              ) : (
                <Button type="button" onClick={resendOtp}>
                  Send Again OTP
                </Button>
              )}
            </OtpInputWrapper>
          )}
          */}

          {/* Terms and Conditions Checkbox */}
          <CheckboxWrapper>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            {termsAccepted && <span>✔️</span>} {/* Show checkmark if accepted */}
            <label style={{ marginLeft: '5px' }}>
              I agree with <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a>
            </label>
          </CheckboxWrapper>

          {/* Custom CAPTCHA Checkbox */}
          <CheckboxWrapper>
            <input
              type="checkbox"
              checked={captchaVerified}
              onChange={handleCaptcha}
            />
            {captchaVerified && <span>✔️</span>} {/* Show checkmark when verified */}
            <label style={{ marginLeft: '5px' }}>I'm not a robot (CAPTCHA)</label>
          </CheckboxWrapper>

          <Button type="submit" disabled={!termsAccepted || !captchaVerified}>Signup</Button>

          {/* Link to Signin page */}
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </form>
      </FormWrapper>
    </>
  );
};

export default Signup;
