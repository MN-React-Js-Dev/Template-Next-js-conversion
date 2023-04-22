/* eslint no-param-reassign: "off" */
/* eslint react/require-default-props: "off" */
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import styles from './MultiRangeSlider.module.scss';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange?: ({ min, max }: { min: number; max: number }) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      // Precede with '+' to convert the value from type string to type number
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={`pointer-events-none absolute z-[3] h-0 w-full outline-none ${styles.thumb}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={`pointer-events-none absolute z-[4] h-0 w-full outline-none ${styles.thumb}`}
      />

      <div className="relative">
        <div className="z-1 absolute h-1 w-full rounded-[3px] bg-[#ced4da]" />
        <div
          ref={range}
          className="absolute z-[2] h-1 rounded-[3px] bg-[#000]"
        />
        {/* <div className="absolute left-[6px] mt-5 text-xs text-[#17A966]">
          {minVal}
        </div>
        <div className="absolute -right-1 mt-5 text-xs text-[#17A966]">
          {maxVal}
        </div> */}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
