import Image from "next/image"
import self1 from '/public/self1.jpeg'
import self2 from '/public/self2.jpeg'
import self3 from '/public/self3.jpeg'

const RenderImage = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <Image
        src={self2}
        alt="Self Photo 2"

      />
      <div className="">
      <Image
        src={self1}
        width={250}
        alt="Self Photo 1"
      />
      <Image
        src={self3}
        width={250}
        alt="Self Photo 3"
        className="object-contain"
      />
      </div>
    </div>
  )
}

export default RenderImage