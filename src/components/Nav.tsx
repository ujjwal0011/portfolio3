import { Home, User, Briefcase, Contact, Zap } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Nav() {
  const navItems = [
    { name: 'Home', sectionId: 'home', icon: Home },
    { name: 'About', sectionId: 'about', icon: User },
    { name: 'Skills', sectionId: 'skills', icon: Zap },
    { name: 'Projects', sectionId: 'projects', icon: Briefcase },
    { name: 'Contact', sectionId: 'contact', icon: Contact }
  ]

  return <NavBar items={navItems} />
}