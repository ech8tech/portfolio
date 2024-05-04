import styles from './App.module.scss';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Canvas, Main } from '../modules';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/canvas" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
