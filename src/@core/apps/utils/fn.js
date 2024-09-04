
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

// BUILD-URL-FOR-SEARCHPAGE
export function buildUrlParams(params, override = {}) {
  const urlParams = new URLSearchParams({
    name: params.get('name'),
    razdel: params.get('razdel'),
    podrazdel: params.get('podrazdel'),
    section: params.get('section'),
    mainorg: params.get('mainorg'),
    segment: params.get('segment'),
    region: params.get('region'),
    city: params.get('city'),
    district: params.get('district'),
    house: params.get('house'),
    home: params.get('home'),
    page: params.get('page'),
    pageSize: params.get('pageSize'),
    ...override // Override any specific params
  })

  return `?${urlParams.toString()}`
}

export function buildNewUrlParams(params) {
  const urlParams = new URLSearchParams(params)

  return `?${urlParams.toString()}`
}

// CHECK-AND-SET-VALUES (IF IT IS NULL)
export const checkAndSetValues = (params, value) => {
  if (!params) return null
  if (params.get(value) === 'null') {
    return ''
  } else {
    return params.get(value)
  }
}
