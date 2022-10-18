import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ItemDetail" element={<ItemDetail />} />
          <Route path="/itemList" element={<ItemList />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
export default App;
