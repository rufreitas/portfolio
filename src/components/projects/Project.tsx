interface ProjectProps {
    title: string
    text: string
    image: string
}

const Project: React.FC<ProjectProps> = ({ title, text, image }) => {
    return (
        <div className="flex border-[1px] rounded-md w-[500px]">
            <img src={image} alt="project cover" className="w-36 h-60 object-cover rounded-tl-md rounded-bl-md cursor-pointer" />
            <div className="flex flex-col space-y-4 justify-center items-center h-full w-full p-2 relative">
                <h2 className="text-2xl absolute top-8">{title}</h2>
                <p className="text-base font-light text-center absolute top-14 px-2">{text}</p>   
            </div>
        </div>
    )
  }
  
  export default Project