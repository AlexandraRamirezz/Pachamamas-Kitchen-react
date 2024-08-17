import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/home">Go back to Home</a>
    </div>
  );
};

export default NotFound;
