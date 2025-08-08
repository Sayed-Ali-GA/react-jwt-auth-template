import { Link } from 'react-router-dom';

const HootList = ({ hoots }) => {
  return (
    <main className="hoot-list">
      <h1>Hoot List</h1>
      {hoots.map((hoot) => (
        <Link
          key={hoot._id}
          to={`/hoots/${hoot._id}`}
          aria-label={`View details for ${hoot.title}`}
          className="hoot-link"
        >
          <article className="hoot-card">
            <header className="hoot-header">
              <h2>{hoot.title}</h2>
            </header>
            <p>{hoot.text}</p>
            <footer className="hoot-meta">
              Posted by {hoot.author.username} on {new Date(hoot.createdAt).toLocaleDateString()}
            </footer>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default HootList;
