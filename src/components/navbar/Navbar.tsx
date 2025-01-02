import Links from "./Links"
import Logo from "./Logo"

const Navbar: React.FC = () => {
    return (
        <nav className="pt-6 sticky top-0 z-10">
            <div className="flex justify-between items-center">
            <Logo />
            <Links />
            </div>
        </nav>
    )
}

export default Navbar