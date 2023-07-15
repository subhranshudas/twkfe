
// Library SVG Icons
import {
    BrainCircuit,
    GraduationCap,
    Sprout,
    BadgeDollarSign,
  } from 'lucide-react'
  
import { MdOutlineElectricCar } from "react-icons/md"



export interface DomainProps {
  id: string,
  title: string;
  href: string;
  description: string;
  icon: any
}


export const domainsList: DomainProps[] = [
      {
        id: "ai",
        title: "artificial intelligence",
        href: "/ai",
        description: "",
        icon: BrainCircuit
      },
      {
        id: "edtech",
        title: "edtech",
        href: "/edtech",
        description: "",
        icon: GraduationCap
        
      },
      {
        id: "ev",
        title: "electric vehicles",
        href: "/ev",
        description: "",
        icon: MdOutlineElectricCar
      },
      {
        id: "agtech",
        title: "agtech",
        href: "/agtech",
        description: "",
        icon: Sprout    
      },
      {
        id: "fintech",
        title: "fintech",
        href: "/fintech",
        description: "",
        icon: BadgeDollarSign
      },
    ]