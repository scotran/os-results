import cheerio from 'cheerio';
import fetch from 'node-fetch';

const os_url = 'https://www.cs.utexas.edu/~gheith/cs439h_f21_p6.html'

export default async function fetchData() {
  const res = await fetch(os_url)
  const text = await res.text()
  const $ = cheerio.load(text)

  // Parse data to an array of strings
  const parsed = $('tr').map((i, el) => $(el).text()).toArray()

  // Set up data to return
  const data = {
    title: parsed[0], // 'cs439h_f21_p6'
    date_generated: parsed[2].substring(9), // '2021/10/19 14:55'
    date_test_cutoff: parsed[3].substring(11), // '2021/10/17 23:59'
    date_code_cutoff: parsed[4].substring(11), // '2021/10/19 23:59'
    test_alias: [], // ['t', '0', '.'], ['0', '0', '2']
    results: [], // { alias: '', score: '', marks: [], }
    enrollments: '', // '79'
    submissions: '', // '71'
    num_tests: '', // '61'
    weights: [], // ['t0', '4.0']
    ignored_tests: [], // ['006', '008', '018']
  }

  // Get test aliases | ex: [ ['t', '0', '.'], ['0', '0', '2'], ...]
  for (let i = 0; i < parsed[6].length; i++) {
    const alias = []
    for (let j = 6; j <= 8; j++) {
      alias.push(parsed[j].charAt(i))
    }
    data.test_alias.push(alias)
  }

  // Get results
  let i = 9;
  for (; i < parsed.length; i++) {
    if (parsed[i] === '') break

    const cur = parsed[i];

    const result = {
      alias: cur.substring(0, 8),
      score: '',
      marks: [],
    }

    let j = 8;
    let c = cur.charAt(j);
    while (c >= '0' && c <= '9') {
      result.score += c
      j += 1
      c = cur.charAt(j)
    }

    result.marks = cur.substring(j).split('')

    data.results.push(result)
  }

  // Get enrollments, submissions, tests
  i++
  data.enrollments = parsed[i].substring(0, parsed[i].indexOf(' '))
  i++
  data.submissions = parsed[i].substring(0, parsed[i].indexOf(' '))
  i++
  data.num_tests = parsed[i].substring(0, parsed[i].indexOf(' '))
  i += 4

  // Get weights for chosen tests
  for (; i < parsed.length; i++) {
    if (parsed[i].startsWith('Ignored')) break

    const cur = parsed[i]

    const weight = []
    if (cur.startsWith('t')) {
      weight.push(cur.substring(0, 2))
      weight.push(cur.substring(2))
    } else {
      weight.push(cur.substring(0, 3))
      weight.push(cur.substring(3))
    }

    data.weights.push(weight)
  }

  i += 3

  for (; i < parsed.length; i++) {
    data.ignored_tests.push(parsed[i])
  }

  // TODO: get gheith's test to highlight and highlight chosen tests
  // parsed.forEach((el, i) => { console.log(`${i}: ${el}`) })
  // console.log(data)
  return data
}
