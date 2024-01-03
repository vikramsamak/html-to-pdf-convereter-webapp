import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">HTML TO PDF CONVERTER</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="hidden sm:flex gap-4">
                <NavbarItem>
                    <Link>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link>
                        <NavLink to='/converter'>
                            Converter
                        </NavLink>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="https://stats.uptimerobot.com/o0EV0slklD" target="_blank">
                        API Status
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link>
                        <NavLink to='/contactme'>
                            Contact Me
                        </NavLink>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-black">
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        size="lg"
                    >
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </Link>
                    <Link
                        className="w-full"
                        size="lg"
                    >
                        <NavLink to='/converter'>
                            Converter
                        </NavLink>
                    </Link>
                    <Link
                        className="w-full"
                        size="lg"
                    >
                        API Status
                    </Link>
                    <Link
                        className="w-full"
                        size="lg"
                    >
                        <NavLink to='/contactme'>
                            Contact Me
                        </NavLink>
                    </Link>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    );
}
