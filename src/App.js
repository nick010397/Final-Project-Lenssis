import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/itemDetail" element={<ItemDetail />} />
        <Route path="/itemList" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
