import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ScrollIndicator from './components/Animations/ScrollIndicator';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-light-100 dark:bg-dark-300">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ScrollIndicator />
        </main>
      </div>
    </Router>
  );
}

export default App;
