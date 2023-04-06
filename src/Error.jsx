import Header from './Header';
import PlugArt from './img/plug-art.svg';
import './Error.css';

function Error() {
  return (
    <div className="error-component">
      <Header />
      <div className="main-content-container">
        <div className="error-container">
          <h1 className="oops">Ooops...</h1>
          <h3 className="page-not-found">Page Not Found</h3>
          <h4 className="please-go-back">Pease Go Back</h4>
          <div><button className="button">Go Back</button></div>
        </div>
        <div className="art-container">
          <div className="art-text">
            <div><h1 className="art-title">404</h1></div>
            <div><h2 className="art-subtitle">SORRY PAGE NOT FOUND</h2></div>
          </div>
          <img src={ PlugArt } alt="plug art" className="plug-art"/>
        </div>
      </div>
    </div>
  );
}

export default Error;
