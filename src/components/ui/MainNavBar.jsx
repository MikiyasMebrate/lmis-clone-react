import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/svg/logo.svg"

const MainNavBar = () => {
    return (
        <>
            <Navbar className="shadow-lg h-20 fixed top-0 left-0 right-0 z-50 bg-gray-50  "  >

                <Navbar.Brand >
                    <img src={logo} className="mr-3  h-6 sm:h-16 w-full" alt=" Logo" />
                </Navbar.Brand>

                <div className="flex gap-4  md:order-2">
                    <Button outline gradientDuoTone="cyanToBlue" >Login</Button>
                    <Button gradientMonochrome="info" >Download App</Button>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className="bg-slate-50">
                    <Navbar.Link className="text-lg"  href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link className="text-lg"  href="#">About</Navbar.Link>
                    <Navbar.Link className="text-lg"  href="#">Services</Navbar.Link>
                    <Navbar.Link className="text-lg"  href="#">Pricing</Navbar.Link>
                    <Navbar.Link className="text-lg"  href="#">Contact</Navbar.Link>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
}

export default MainNavBar;