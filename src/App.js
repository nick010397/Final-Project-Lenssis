import { useCallback, useEffect } from 'react';

function App() {
  // TODO: @hoil 테스트 코드 참고하시라고 남겨놨어요. 아무나 지워주세요ㅎㅎ
  const fetchProducts = useCallback(async () => {
    const response = await fetch('/products');
    const data = await response.json();
    console.log('data: ', data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return <div>lens website</div>;
}

export default App;
