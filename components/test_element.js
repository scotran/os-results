export default function Test({ alias, urls, base_url }) {
  return (
    <>
      <div className="flex flex-col text-xs">
        <div>
          <a href={base_url + urls[0]} rel="noreferrer" target="_blank">
            {alias[0]}
          </a>
        </div>
        <div>
          <a href={base_url + urls[1]} rel="noreferrer" target="_blank">
            {alias[1]}
          </a>
        </div>
        <div>
          <a href={base_url + urls[2]} rel="noreferrer" target="_blank">
            {alias[2]}
          </a>
        </div>
      </div>
    </>
  )
}
