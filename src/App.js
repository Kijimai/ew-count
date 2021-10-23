import { useEffect, useState } from "react"
import Timer from "./components/Timer"
import images from "./images/images"

function App() {
  const [imgUrl, setImgUrl] = useState(images[0])

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 6)
    setImgUrl(images[randomNum])
  }, [])

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    ),
    url("${imgUrl}")`,
      }}
    >
      <Timer />
    </main>
  )
}

export default App
