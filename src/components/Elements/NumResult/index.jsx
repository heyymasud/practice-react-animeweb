const NumResult = ({ animes }) => {
  return (
    <p className="search-results">
      Found <strong>{animes.length}</strong> results
    </p>
  );
};

export default NumResult;
