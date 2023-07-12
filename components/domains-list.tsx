
// Library SVG Icons
import {
    LucideIcon,
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
  icon: LucideIcon
}

export const domainsList: DomainProps[] = [
      {
        title: "artificial intelligence",
        href: "/ai",
        description: "",
        icon: (props: any) => <BrainCircuit {...props} />
      },
      {
        title: "edtech",
        href: "/edtech",
        description: "",
        icon: (props: any) => <GraduationCap {...props} />
        
      },
      {
        title: "electric vehicles",
        href: "/ev",
        description: "",
        icon: (props: any) => <MdOutlineElectricCar {...props} />
      },
      {
        title: "agtech",
        href: "/agtech",
        description: "",
        icon: (props: any) => <Sprout {...props} />        
      },
      {
        title: "fintech",
        href: "/fintech",
        description: "",
        icon: (props: any) => <BadgeDollarSign {...props} />    
      },
    ]