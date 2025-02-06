export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          You hit the <b>limit!</b>
        </span>
      ) : (
        'Fancy Counter'
      )}
    </h1>
  );
}
