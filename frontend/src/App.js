import Appbar from './components/Appbar';
import { Routes, Route } from 'react-router-dom'
import FormPage from './pages/FormPage'
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
