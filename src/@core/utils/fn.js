// debounce
export function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

// geturl
export function getUrl(lastlink) {
  switch (lastlink) {
    case 'entertainment':
      return 'Entertainment'
    case 'communal':
      return 'Communal'
    case 'numbers-codes':
      return 'NumbersCodes'
    case 'need-to-know':
      return 'KnowData'
    case 'info-tashkent':
      return 'InformationTashkent'
  }
}
