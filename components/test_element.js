export default function Test({
  alias, urls, chosen, base_url, index,
}) {
  return (
    <div className={`${chosen ? 'bg-gray-200' : 'bg-white'} ${index % 2 === 0 ? 'text-green-900' : 'text-pink-900'} justify-self-stretch grid text-s font-crimson-semi-bold p-1 w-5 hover:cursor-pointer`}>
      <div className="justify-self-center">
        <a href={base_url + urls[0]} rel="noreferrer" target="_blank">
          {alias[0]}
        </a>
      </div>
      <div className="justify-self-center">
        <a href={base_url + urls[1]} rel="noreferrer" target="_blank">
          {alias[1]}
        </a>
      </div>
      <div className="justify-self-center">
        <a href={base_url + urls[2]} rel="noreferrer" target="_blank">
          {alias[2]}
        </a>
      </div>
    </div>
  )
}
