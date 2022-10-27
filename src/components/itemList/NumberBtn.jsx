import { useQuery } from 'react-query';
import { getProductPage } from '../../api/PageApi';
import { useState } from 'react';
import NewItem from './NewItem';
import PageButton from './PageButton';

const Example2 = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(['/Products', page], () => getProductPage(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading Products...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  const content = NewItem.data.data.map((NewItem) => (
    <NewItem key={data.id} Product={data} />
  ));

  const lastPage = (Products) => setPage(Products.total_pages);

  const firstPage = () => setPage(1);

  const pagesArray = Array(Products.total_pages)
    .fill()
    .map((_, index) => index + 1);

  const nav = (
    <nav className="nav-ex2">
      <button onClick={firstPage} disabled={isPreviousData || page === 1}>
        &lt;&lt;
      </button>
      {/* Removed isPreviousData from PageButton to keep button focus color instead */}
      {pagesArray.map((pg) => (
        <PageButton key={pg} pg={pg} setPage={setPage} />
      ))}
      <button
        onClick={lastPage}
        disabled={isPreviousData || page === users.total_pages}
      >
        &gt;&gt;
      </button>
    </nav>
  );

  return (
    <>
      {nav}
      {isFetching && <span className="loading">Loading...</span>}
      {content}
    </>
  );
};
export default Example2;
