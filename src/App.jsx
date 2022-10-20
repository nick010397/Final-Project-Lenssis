import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store } from './store/store';

const queryClient = new QueryClient();

function App() {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={<Main products={products} setProducts={setProducts} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ItemDetail" element={<ItemDetail />} />
            <Route path="/itemList" element={<ItemList />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
