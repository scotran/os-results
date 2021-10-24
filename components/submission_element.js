export default function Submission({
  alias, score, marks, num_chosen, search, highlight, focus, master_alias,
}) {
  const match = alias.startsWith(search)
  const backgroundStyle = 'bg-yellow-200 shadow-md'
  const background = match && highlight && search !== '' ? backgroundStyle : '';
  const visibility = !focus || (match && focus) || search === '' ? '' : 'hidden';

  return (
    <>
      <div className={`${alias === master_alias ? 'bg-blue-200 shadow-md' : ''} ${background} ${visibility} grid grid-flow-col auto-cols-min font-display-sans`}>
        <div className="w-20">{alias}</div>
        <div className="w-12">{score}</div>
        {
          marks.map((mark, i) => {
            let mark_color = ''

            if (mark === '.') mark_color = 'text-green-500'
            else if (mark === 'X') mark_color = 'text-red-500'

            return (
              <div className={`grid justify-self-stretch w-5 ${i < num_chosen ? 'bg-gray-200' : ''}`}>
                <div className={`justify-self-center ${mark_color} font-semibold`} key={alias + i}>{mark}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
