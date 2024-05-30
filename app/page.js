// /app/page.js
"use client";

import { useState } from 'react';
import Signup from './signup/page';
import Login from './login/page';

export default function Page() {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <div>
      <button onClick={() => setShowSignup(!showSignup)}>
        {showSignup ? 'Go to Login' : 'Go to Signup'}
      </button><br/><br/>
      {showSignup ? <Signup /> : <Login />}
    </div>
  );
}
