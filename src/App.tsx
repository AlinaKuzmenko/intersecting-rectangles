import IntersectingRectangles from './components/IntersectingRectangles';
import URLShortening from './components/URLShortening';
import styles from './App.module.scss';


function App() {
  
  return (
    <div className={styles.app}>
      <IntersectingRectangles />
      <URLShortening />
    </div>
  )
}

export default App
