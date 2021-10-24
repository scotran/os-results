import Head from 'next/head'
import { useState } from 'react'

import fetchData from '../utils/fetch_data'
import Test from '../components/test_element'
import Submission from '../components/submission_element'

export default function Home({ data }) {
  const [search, setSearch] = useState('')
  const [viewStats, setViewStats] = useState(true)
  const [highlight, setHighlight] = useState(true)
  const [focus, setFocus] = useState(true)

  return (
    <>
      <Head>
        <title>Gheith Results</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content="Results page for UT Austin computer science class" />
      </Head>

      <div className="mt-8 ml-10 mr-10 mb-10 font-display-sans">
        <div className="inline-block w-auto border-solid border-red-400 border-2 rounded-md shadow-lg p-2 text-3xl mb-5">{data.title.split('_').join('  ')}</div>

        <div>
          <div>
            Search for alias
          </div>
          <input type="text" name="search" className="border-2 border-solid border-gray-200" value={search} placeholder="007_4242" onChange={(event) => setSearch(event.target.value)} />
        </div>

        <div className="mt-5">
          <input type="checkbox" name="showStats" value={viewStats} onChange={() => setViewStats(!viewStats)} defaultChecked />
          <span className="m-3">Show Stats</span>

          <input type="checkbox" name="highlight" value={highlight} onChange={() => setHighlight(!highlight)} defaultChecked />
          <span className="m-3">Highlight</span>

          <input type="checkbox" name="focus" value={focus} onChange={() => setFocus(!focus)} defaultChecked />
          <span className="m-3">Focus</span>
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
                  base_url={data.base_url}
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
                  highlight={highlight}
                  focus={focus}
                  master_alias={data.master_alias}
                  key={_data.alias}
                />
              ))
            }
          </div>
        </div>

        <div className={`${viewStats ? '' : 'hidden'} mt-5`}>
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
            <div className="flex flex-col">
              {
                data.weights.map((_data) => (
                  <div>
                    {_data[0]}
                    {' '}
                    {_data[1]}
                  </div>
                ))
              }
            </div>

            <div className="flex flex-col">
              {
                data.ignored_tests.map((_data) => (
                  <div>{_data}</div>
                ))
              }
            </div>
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
