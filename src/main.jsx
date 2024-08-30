// src/index.js or src/main.js

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './components/DashBoard.jsx';
import ProfileSection from './components/Profile.jsx';
import SignUpForm from './components/singup.jsx';
import Home from './components/home.jsx';
import QuizApp from './components/QuizApp.jsx';
import PostDetail from './components/postdetails.jsx';
import VoiceInterview from './components/Interview.jsx';
import Message from './components/Message.jsx';
import { UserProvider } from './context/UserContext'; // Import the UserProvider

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/dashboard', element: <DashBoard /> },
        { path: '/profile', element: <ProfileSection /> },
        { path: '/signup', element: <SignUpForm /> },
        { path: '/quiz', element: <QuizApp /> },
        { path: '/post', element: <PostDetail /> },
        { path: '/interview', element: <VoiceInterview /> },
        { path: '/message', element: <Message /> }
      ],
    },
  ],
  {
    basename: '/Interview-Mate-frontend/', // Add this line
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> {/* Wrap the entire app with UserProvider */}
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
