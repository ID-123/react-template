import { NavLink } from "react-router";
import type { NavbarProps } from "./Navbar.types";

export function Navbar(props: NavbarProps) {

    return (
        <header>
            <nav>
                <ul>
                    {
                        props.links.map(link => (
                            <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}