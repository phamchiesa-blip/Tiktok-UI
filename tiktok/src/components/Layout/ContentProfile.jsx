import contents from "../../index"
import {Play} from "lucide-react"

const ContentProfile = () => {
  return (
    <div className="flex grid grid-cols-3 gap-4 top-[270px] h-[calc(100vh-270px)] overflow-y-auto">
      {contents.map((content, index) => (
        <div key={index} className="relative hover:scale-105 duration-300 cursor-pointer mb-4">
            <div className="w-[250px]" >
              <img src={content.src} alt="Ảnh" className="w-full rounded-xl" />
            </div>
            <h1 className="absolute top-1 text-black opacity-70 left-1 text-[18px] font-bold">{content.title}</h1>
            <div className="absolute bottom-1 left-1 flex gap-1 opacity-80">
              <Play className="text-amber-50" />
              <h1 className="text-amber-50">{content.views}</h1>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ContentProfile