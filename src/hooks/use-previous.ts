import { useState } from 'react';

export function usePrevious<TValue>(value: TValue) {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState<TValue | null>(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}
