import httpFactory from '../../api/request'

// A mock function to mimic making an async request for data
export function fetchFakeLibrary() {
  const { cancel, http } = httpFactory()
  return {
    cancel,
    http: () =>
      http({
        url: '/api/xxx/xxx',
        method: 'POST',
        data: {
          id: 1
        }
      })
  }
}
