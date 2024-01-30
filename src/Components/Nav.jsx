import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className="font-bold text-inherit">HTML TO PDF CONVERTER</Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="hidden sm:flex gap-4">
                <NavbarItem>
                    <Link href="/" color={pathname === "/" ? "primary" : "foreground"}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/converter" color={pathname === "/converter" ? "primary" : "foreground"} >
                        Converter
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="https://stats.uptimerobot.com/o0EV0slklD" isExternal color="foreground">
                        API Status
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contactme" color={pathname === "/contactme" ? "primary" : "foreground"}>
                        Contact Me
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-black">
                <NavbarMenuItem>
                    <Link
                        href="/"
                        className="w-full"
                        size="lg"
                        onPress={() => { setIsMenuOpen(!isMenuOpen) }}
                    >
                        Home
                    </Link>
                    <Link
                        href="/converter"
                        className="w-full"
                        size="lg"
                        onPress={() => { setIsMenuOpen(!isMenuOpen) }}
                    >
                        Converter
                    </Link>
                    <Link
                        href="https://stats.uptimerobot.com/o0EV0slklD"
                        isExternal
                        className="w-full"
                        size="lg"
                        onPress={() => { setIsMenuOpen(!isMenuOpen) }}
                    >
                        API Status
                    </Link>
                    <Link
                        href="/contactme"
                        className="w-full"
                        size="lg"
                        onPress={() => { setIsMenuOpen(!isMenuOpen) }}
                    >
                        Contact Me
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
