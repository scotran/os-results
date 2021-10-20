export default function Submission({
  alias, score, marks, num_chosen,
}) {
  return (
    <>
      <div className="grid grid-cols-75">
        <div className="col-span-6">{alias}</div>
        <div className="col-span-3">{score}</div>
        {
          marks.map((mark, i) => (
            <div className={i < num_chosen ? 'bg-gray-500' : 'bg-white'} key={mark}>{mark}</div>
          ))
        }
      </div>
    </>
  )
}
