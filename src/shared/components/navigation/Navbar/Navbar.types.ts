interface NavigationLink {
   label: string,
   to: string 
}

export interface NavbarProps {
    links: NavigationLink[]
}