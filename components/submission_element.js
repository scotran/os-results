export default function Submission({
  alias, score, marks, num_chosen, search,
}) {
  return (
    <>
      <div className={`${alias.startsWith(search) ? '' : 'hidden'} grid grid-flow-col auto-cols-min`}>
        <div className="w-20">{alias}</div>
        <div className="w-12">{score}</div>
        {
          marks.map((mark, i) => {
            let mark_color = ''

            if (mark === '.') mark_color = 'text-green-500'
            else if (mark === 'X') mark_color = 'text-red-500'

            return (
              <div className={`grid justify-self-stretch w-5 ${i < num_chosen ? 'bg-gray-200' : ''}`}>
                <div className={`justify-self-center ${mark_color}`} key={i}>{mark}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
