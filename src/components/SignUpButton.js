// SignUpButton.js

import React from 'react';
import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <Link to="/signup">
      <button>회원가입버튼</button>
    </Link>
  );
}

export default SignUpButton;
