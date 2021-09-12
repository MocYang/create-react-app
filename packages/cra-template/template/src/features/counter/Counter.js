import { useRef } from 'react'

export function Counter() {
  // 以下为带 cancel 方法的请求的示例
  const cancelFetchFakeCamera = useRef(() => void 0)

  const handleFetchFakeCamera = () => {
    const { cancel, http } = fetchFakeCamera()
    http().then((res) => {
      console.log(res)
    })
    cancelFetchFakeCamera.current = cancel
  }

  const handleCancelFetchFakeCamera = () => {
    if (cancelFetchFakeCamera.current) {
      cancelFetchFakeCamera.current('request canceled by hand.')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn__fetch-camera" onClick={handleFetchFakeCamera}>
          fetch fake camera
        </button>

        <button
          className="btn__cancel-camera"
          onClick={handleCancelFetchFakeCamera}
        >
          cancel camera fetching
        </button>
      </header>
    </div>
  )
}
