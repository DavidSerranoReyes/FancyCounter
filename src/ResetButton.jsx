import { ResetIcon } from '@radix-ui/react-icons';

export default function ResetButton({ setCount }) {
  let handleClick = function (event) {
    setCount(0);
    event.currentTarget.blur();
  };
  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
