import Count from './Count';
import ButtonContainer from './ButtonContainer';
import CountButton from './CountButton';
import ResetButton from './ResetButton';
import Title from './Title';
import { useEffect, useState } from 'react';

export default function Card() {
  let [count, setCount] = useState(0);
  let locked = count === 10;

  useEffect(() => {
    let handleKeydown = (event) => {
      if (event.code === 'Space') {
        let newCount = count + 1;
        if (newCount > 10) {
          setCount(10);
          return;
        }
        setCount((prevCount) => prevCount + 1);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
