function ListeCourses({ articles }) {
  return (
    <div>
      <h3>Liste de courses</h3>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;