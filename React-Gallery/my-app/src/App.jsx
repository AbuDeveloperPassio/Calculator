import Images from "./components/Images";
import Navbar from "./components/Navbar"
import { useState } from 'react';

const imagesThings = [
  {
    src: 'https://picsum.photos/400/300?random=1',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=2',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=3',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=4',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=5',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=6',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=7',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=8',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=9',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=10',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=11',
    name: 'Rose'
  },
  {
    src: 'https://picsum.photos/400/300?random=12',
    name: 'Rose'
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* ✅ Pass props to Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Images data={imagesThings}/>
    </div>
  )
}

export default App