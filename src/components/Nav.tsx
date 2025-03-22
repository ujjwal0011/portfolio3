import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Nav() {
  const navItems = [
    { name: 'Home', sectionId: 'hero', icon: Home },
    { name: 'About', sectionId: 'about', icon: User },
    { name: 'Projects', sectionId: 'projects', icon: Briefcase },
    { name: 'Resume', sectionId: 'resume', icon: FileText }
  ]

  return <NavBar items={navItems} />
}