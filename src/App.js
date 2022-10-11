import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ItemDetail" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
