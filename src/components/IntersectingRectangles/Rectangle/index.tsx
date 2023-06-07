import { BaseSyntheticEvent } from 'react';
import { IRectangle } from '../../../App.tsx';
import styles from './styles.module.scss';

interface IRectangleProps {
  coordinates: IRectangle;
  onChange: (newCoordinates: IRectangle) => void;
}

const inputs: Array<keyof IRectangle> = ['x0', 'x1', 'y0', 'y1'];
function Rectangle({ onChange, coordinates }: IRectangleProps) {
  function handleOnChange(coordinate: string) {
    return (e: BaseSyntheticEvent) => {
      const value = +e.target.value;
      if (value >= 0) {
        onChange({
          ...coordinates,
          [coordinate]: value,
        })
      }
    }
  }
  return (
    <div className={styles.rectangle}>
      <h4 className={styles.heading}>Rectangle 1</h4>
      {inputs.map((inputName: keyof IRectangle) => (
        <label
          key={inputName}
          className={styles.label}
        >
          <span>{inputName}</span>
          <input
            type="number"
            value={coordinates[inputName]}
            className={styles.input}
            onChange={handleOnChange(inputName)}
          />
        </label>
      ))}
    </div>
  )
}

export default Rectangle;
