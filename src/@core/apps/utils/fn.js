// DEBOUNCE
export function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

// GET-URL
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

// FILTER-ARRAY-EQUAL-TO-ID
export function filterArrayEqualToID(array, id) {
  return array.filter(arr => arr.id === id)
}

// FILTER-ARRAY-NOT-EQUAL-TO-ID
export function filterArrayNotEqualToID(array, id) {
  return array.filter(arr => arr.id !== id)
}
