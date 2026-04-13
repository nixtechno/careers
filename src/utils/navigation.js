const rawBase = import.meta.env.BASE_URL || '/'
const basePath = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase

export const withBase = (path = '/') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}` || '/'
}

export const currentRoutePath = () => {
  let pathname = window.location.pathname

  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || '/'
  }

  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname || '/'
}

export const navigateTo = (path) => {
  window.history.pushState({}, '', withBase(path))
  window.dispatchEvent(new PopStateEvent('popstate'))
}
