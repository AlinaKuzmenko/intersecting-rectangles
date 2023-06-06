import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import Description from './components/Description';
import Rectangle from './components/Rectangle';
import styles from './App.module.scss';
import { IRectangle } from './types.ts';
import { areIntersecting, isValid } from './utils.ts';

const DEFAULT_COORDINATES = {
  x0: 0,
  x1: 1,
  y0: 0,
  y1: 1,
}

function App() {
  const [r1, setR1] = useState<IRectangle>(DEFAULT_COORDINATES);
  const [r2, setR2] = useState<IRectangle>(DEFAULT_COORDINATES);
  const [intersect, setIntersect] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!isValid(r1, r2)) {
      setError('Please, enter valid numbers');
      setIntersect(null);
      return;
    }
    setIntersect(areIntersecting(r1, r2))
  }
  function onReset() {
    setR1(DEFAULT_COORDINATES);
    setR2(DEFAULT_COORDINATES);
    setIntersect(null);
    setError(null);
  }
  function handleOnChange(updateState: Dispatch<SetStateAction<IRectangle>>) {
    return (newCoordinates: IRectangle) => {
      setError(null);
      return updateState(newCoordinates);
    }
  }
  return (
    <div className={styles.app}>
      <Description />
      <form
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <div className={styles.inputsContainer}>
          <Rectangle
            coordinates={r1}
            onChange={handleOnChange(setR1)}
          />
          <Rectangle
            coordinates={r2}
            onChange={handleOnChange(setR2)}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.button}
            type="submit"
          >
            Check intersection
          </button>
          <button
            className={styles.button}
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
      {intersect != null && (
        <p className={`${styles.result} ${intersect && styles.error}`}>
          Rectangles {intersect ? 'intersect' : 'don\'t intersect'}
        </p>
      )}
      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}
    </div>
  )
}

export default App
