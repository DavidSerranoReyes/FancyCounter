import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ type, setCount, locked }) {
  let handleClick = function (event) {
    setCount((count) => {
      if (type === 'minus') {
        let newCount = count - 1;
        return newCount < 0 ? 0 : newCount;
      } else {
        let newCount = count + 1;
        return newCount > 10 ? 10 : newCount;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
