import Image from "next/image"
import self1 from '/public/self1.jpeg'
import self2 from '/public/self2.jpeg'
import self3 from '/public/self3.jpeg'

const RenderImage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      <Image
        src={self2}
        alt="Self Photo 2"
        className="rounded-2xl"
      />
      <Image
        src={self1}
        alt="Self Photo 1"
        className="rounded-2xl"
      />
      <Image
        src={self3}
        alt="Self Photo 3"
        className="rounded-2xl"
      />
    </div>
  )
}

export default RenderImage