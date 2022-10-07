import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notice from './components/main/Notice';
import Main from "./pages/Main"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/notice" element={<Notice/>} />
    </Routes>
  </BrowserRouter>
 );
}

export default App;
