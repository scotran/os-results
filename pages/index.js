// import Head from 'next/head'
import { useState } from 'react'

import fetchData from '../utils/fetch_data'
import Test from '../components/test_element'
import Submission from '../components/submission_element'

export default function Home({ data }) {
  const [search, setSearch] = useState('')
  const [viewStats, setViewStats] = useState(true)

  return (
    <>
      <div className="mt-8 ml-10 mr-10 mb-10 font-display-sans">
        <div className="inline-block w-auto border-solid border-red-400 border-2 rounded-md shadow-md p-2 text-3xl mb-3">{data.title.split('_').join('  ')}</div>

        <div>
          <input type="text" name="search" className="border-2 border-solid border-gray-200" value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>

        <div className="mt-5">
          <input type="checkbox" name="showStats" value={viewStats} onChange={() => setViewStats(!viewStats)} defaultChecked />
          <span>Show Stats</span>
        </div>

        <div className="grid">
          <div className="grid grid-flow-col auto-cols-min justify-items-center mt-5">
            <div className="w-32" />
            {
              data.test_data.map((_data, i) => (
                <Test
                  alias={_data.alias}
                  urls={_data.urls}
                  chosen={_data.chosen}
                  base_url={_data.base_url}
                  index={i}
                  key={_data.alias}
                />
              ))
            }
          </div>
          <div className="grid auto-rows-min">
            {
              data.submission_data.map((_data) => (
                <Submission
                  alias={_data.alias}
                  score={_data.score}
                  marks={_data.marks}
                  num_chosen={data.num_chosen_tests}
                  search={search}
                  key={_data.alias}
                />
              ))
            }
          </div>
        </div>

        <div className={`${viewStats ? '' : 'hidden'} mt-10`}>
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-x-0 mt-5">
            <div>generated</div>
            <div>test cutoff</div>
            <div>code cutoff</div>
          </div>
          <div className="-mt-5 w-full md:w-1/2 grid grid-cols-3 gap-x-0 text-pink-500 text-2xl">
            <div>__</div>
            <div>__</div>
            <div>__</div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-x-0">
            <div>{data.date_generated}</div>
            <div>{data.date_test_cutoff}</div>
            <div>{data.date_code_cutoff}</div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-3 gap-x-0 mt-5">
            <div>enrollments</div>
            <div>submissions</div>
            <div>tests</div>
          </div>
          <div className="-mt-5 w-full md:w-1/2 grid grid-cols-3 gap-x-0 text-blue-500 text-2xl">
            <div>__</div>
            <div>__</div>
            <div>__</div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-x-0">
            <div>{data.enrollments}</div>
            <div>{data.submissions}</div>
            <div>{data.num_tests}</div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-x-0 mt-5">
            <div>weights</div>
            <div>ignored tests</div>
          </div>
          <div className="-mt-5 w-full md:w-1/2 grid grid-cols-2 gap-x-0 text-green-500 text-2xl">
            <div>__</div>
            <div>__</div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-x-0">
            <div>{data.enrollments}</div>
            <div>{data.submissions}</div>
          </div>

        </div>

      </div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } }
}
