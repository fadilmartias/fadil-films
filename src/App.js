import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Intro from './components/Intro';
import MostViews from './components/MostViews';
import NavigationBar from './components/NavigationBar';
import Trending from './components/Trending';
import './style/landingpage.css';

function App() {
  return (
   <div>
     {/* intro section */}
     <div className="myBG">
     <NavigationBar />
     <Intro />
     </div>
     {/* end of intro */}

     {/* trending section */}
     <div className="trending">
      <Trending />
     </div>
     {/* end of trending */}

     {/* most views section */}
     <div className="trending">
      <MostViews />
     </div>
     {/* end of most views */}
   </div>
  );
}

export default App;
