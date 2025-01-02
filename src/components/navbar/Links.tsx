const Links: React.FC = () => {
    return (
        <ul className="text-md font-light flex gap-10">
            <a href="#home" className="hover:bg-[#1D1D1D] rounded-md px-3 py-1"><li>home</li></a>
            <a href="#about" className="hover:bg-[#1D1D1D] rounded-md px-3 py-1"><li>about</li></a>
            <a href="#projects" className="hover:bg-[#1D1D1D] rounded-md px-3 py-1"><li>projects</li></a>
        </ul>
    )
}

export default Links