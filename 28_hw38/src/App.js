import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Article from './components/Article.js';

function App() {
  return (
    <div>
        <Header/>
        <main>
          <Nav/>
          <Article/>
        </main>
    </div>
  );
}

export default App;