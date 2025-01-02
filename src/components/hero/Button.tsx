interface Button {
    text: string
    src: string
}

const Button: React.FC<Button> = ({ text, src }) => {
    return (
        <a href={src} className="px-6 py-2 rounded-md bg-[#1D1D1D]">
            <p className="text-md font-light">{text}</p>
        </a>
    )
}

export default Button