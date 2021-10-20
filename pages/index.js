// import Head from 'next/head'
import fetchData from '../utils/fetch_data'
import Test from '../components/test_element'
import Submission from '../components/submission_element'

export default function Home({ data }) {
  return (
    <>
      <div className="mt-8 ml-10 mr-10 mb-10 font-display-sans">
        <div className="inline-block w-auto border-solid border-red-400 border-2 rounded-md shadow-md p-2 text-3xl mb-3">{data.title.split('_').join('  ')}</div>
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-x-0">
          <div>generated</div>
          <div>test cutoff</div>
          <div>code cutoff</div>
        </div>
        <div className="-mt-5 w-full md:w-1/2 grid grid-cols-3 gap-x-0 text-red-500 text-2xl">
          <div>__</div>
          <div>__</div>
          <div>__</div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-x-0">
          <div>{data.date_generated}</div>
          <div>{data.date_test_cutoff}</div>
          <div>{data.date_code_cutoff}</div>
        </div>

        <div>
          <div className="grid grid-cols-75 mt-5">
            <div className="col-span-10 row-span-3" />
            {
              data.test_data.map((_data) => (
                <Test
                  alias={_data.alias}
                  urls={_data.urls}
                  chosen={_data.chosen}
                  base_url={_data.base_url}
                  key={_data.alias}
                />
              ))
            }
          </div>
          <div className="grid grid-rows-75">
            {
              data.submission_data.map((_data) => (
                <Submission
                  alias={_data.alias}
                  score={_data.score}
                  marks={_data.marks}
                  num_chosen={_data.num_chosen}
                  key={_data.alias}
                />
              ))
            }
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
