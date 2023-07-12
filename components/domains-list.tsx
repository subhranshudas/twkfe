
// Library SVG Icons
import {
    LucideIcon,
    BrainCircuit,
    GraduationCap,
    Sprout,
    BadgeDollarSign,
  } from 'lucide-react'
  
// Custom SVG Icons
import { ElectricCar } from '@/components/icons/electric-car'



export interface DomainProps {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon
}

export const domainsList: DomainProps[] = [
      {
        title: "artificial intelligence",
        href: "/ai",
        description: "",
        icon: BrainCircuit
      },
      {
        title: "edtech",
        href: "/edtech",
        description: "",
        icon: GraduationCap
        
      },
      {
        title: "electric vehicles",
        href: "/ev",
        description: "",
        icon: (props: any) => <ElectricCar {...props} /> // only Custom SVG Icons take svgcolor "prop"
      },
      {
        title: "agtech",
        href: "/agtech",
        description: "",
        icon: Sprout
      },
      {
        title: "fintech",
        href: "/fintech",
        description: "",
        icon: BadgeDollarSign
      },
    ]