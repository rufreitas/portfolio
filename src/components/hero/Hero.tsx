import Button from "./Button"
import Photo from "./Photo"
import Text from "./Text"

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col gap-24 mt-16">
            <div className="flex justify-between items-center">
                <Text />
                <Photo />
            </div>

            <div className="flex justify-evenly">
                <Button text='instagram' src='http://instagram.com/ruhanfreitass' />
                <Button text='linkedin' src='http://instagram.com/ruhanfreitass' />
                <Button text='github' src='http://instagram.com/ruhanfreitass' />
                <Button text='resume' src='http://instagram.com/ruhanfreitass' />
            </div>
        </div>
    )
}

export default Hero