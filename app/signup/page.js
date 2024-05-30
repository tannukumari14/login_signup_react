// /app/signup/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password');
      return;
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
      <button onClick={handleSignup}>Sign Up</button><br/><br/>
    </div>
  );
};

export default Signup;
