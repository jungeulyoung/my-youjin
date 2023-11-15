// SignUpWithPhone.js
import React, { useState } from 'react';
import axios from 'axios';

function SignUpWithPhone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const sendVerificationCode = async () => {
    try {
      const response = await axios.post(
        'YOUR_TWILIO_VERIFY_SERVICE_API_ENDPOINT',
        { phoneNumber }
      );
      console.log(response.data); // Handle the response accordingly
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };

  const verifyPhoneNumber = async () => {
    try {
      const response = await axios.post(
        'YOUR_TWILIO_VERIFY_SERVICE_API_ENDPOINT/verification-check',
        { phoneNumber, code: verificationCode }
      );
      console.log(response.data); // Handle the response accordingly
      setIsVerified(response.data.valid);
    } catch (error) {
      console.error('Error verifying phone number:', error);
    }
  };

  return (
    <div>
      <h2>회원가입 페이지 (휴대폰 본인인증)</h2>
      <label>
        휴대폰 번호:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <button onClick={sendVerificationCode}>인증번호 전송</button>

      {isVerified ? (
        <p>휴대폰 번호가 성공적으로 인증되었습니다!</p>
      ) : (
        <div>
          <label>
            인증번호:
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </label>
          <button onClick={verifyPhoneNumber}>인증번호 확인</button>
        </div>
      )}
    </div>
  );
}

export default SignUpWithPhone;
