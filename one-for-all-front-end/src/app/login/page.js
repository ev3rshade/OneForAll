'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the login logic like API calls or state updates.
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Login</div>
        <div className="flex gap-6 items-center">
        <Link href="/" className="hover:font-bold">
          Home
        </Link>
        <Link href="/ResourceHub" className="hover:font-bold">
          Resource Hub
        </Link>
        <Link href="/DocumentVault" className="hover:font-bold">
          Document Vault
        </Link>
        <Link href="/LegalAdvocacy" className="hover:font-bold">
          Legal Advocacy
        </Link>
        <Link href="/ReflectionTools" className="hover:font-bold">
          Reflection Tools
        </Link>
        <Link href="/EmergencyAndCrisis" className="hover:font-bold">
          Emergency and Crisis
        </Link>
        <Link href="/login" className="">
        <Image
          className="dark:invert"
          src="/iconLogin.png"
          alt="Next.js logo"
          width={50}
          height={8}
          priority
        />
        </Link>
        </div>
      </nav>
    <main className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-pink-600 mb-6">Login</h2>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg shadow hover:bg-pink-700 transition-all"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password and Register links */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Don't have an account?{' '}
            <Link href="/register" className="text-pink-600 hover:underline">
              Register here
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/forgot-password" className="text-pink-600 hover:underline">
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </main>
    </div>
  );
}