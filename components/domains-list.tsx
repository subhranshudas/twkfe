
// Library SVG Icons
import {
    BrainCircuit,
    GraduationCap,
    Sprout,
    BadgeDollarSign,
  } from 'lucide-react'
  
import { MdOutlineElectricCar } from "react-icons/md"



export interface DomainProps {
  title: string;
  href: string;
  description: string;
  icon: any
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
        icon: MdOutlineElectricCar
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