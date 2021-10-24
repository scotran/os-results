const quotes = [
  'Copy-and-Paste was programmed by programmers for programmers actually.',
  'How many programmers does it take to change a light bulb? None, that’s a hardware problem.',
  'If debugging is the process of removing bugs, then programming must be the process of putting them in.',
  'There are two ways to write error-free programs; only the third works.',
  'A good programmer is someone who always looks both ways before crossing a one-way street.',
  'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
  'It works on my machine.',
  'Walking on water and developing software from a specification are easy if both are frozen.',
  'There are only two kinds of programming languages out there. The ones people complain about and the ones no one uses.',
  'C programmers never die. They are just cast into void.',
  'Q: How different are C and C++? A: 1. Because C — C++ = 1.',
  'In C we had to code our own bugs. In C++ we can inherit them.',
  'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
  'Without requirements or design, programming is the art of adding bugs to an empty text file.',
  'It’s not a bug – it’s an undocumented feature.',
  'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
  'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes.',
  'The best performance improvement is the transition from the nonworking state to the working state.',
  'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
]

export default function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
