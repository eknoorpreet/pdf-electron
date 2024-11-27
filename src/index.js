import { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>
);
