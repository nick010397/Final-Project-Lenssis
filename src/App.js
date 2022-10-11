import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemList from './pages/ItemList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ItemList" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
