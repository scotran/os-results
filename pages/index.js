// import Head from 'next/head'
import fetchData from '../utils/fetch_data';

export default function Home({ data }) {
  return (
    <>
      <div>{data.title}</div>
      <div>{data.date_generated}</div>
      <div>{data.date_test_cutoff}</div>
      <div>{data.date_code_cutoff}</div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } }
}
