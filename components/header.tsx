"use client"

import React from "react"
import Link from "next/link"

import { Menu } from "lucide-react"

import { ThemeToggle, FlatThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { domainsList } from "./domains-list"



export function Header() {
    return (
        <header className="
            sticky top-0 z-40 w-full
            bg-background/90 backdrop-blur-sm
            border-b border-slate-10/90"
        >
            
            <section className="container mx-auto py-2 flex justify-between items-center">
                {/* logo header */}
                
                <Link href="/" className='text-2xl font-semibold tracking-tighter' aria-label="Home">🚀 tekwerke</Link>
                
                <nav role="navigation" className="hidden md:flex justify-between items-center gap-x-2">
                    <TWNavigationMenu />

                    <ThemeToggle />                    
                    <Button variant="outline"><Link href="/signup">Signup</Link></Button>
                    <Button><Link href="/login">Login</Link></Button>
                </nav>

                <MobileNavMenu />
            </section>

        </header>
    )
}



function TWNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Domains</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {domainsList.map((domain) => {
                  const DomainIcon = domain.icon
                  // const iconColor = "foreground"

                  return (
                      <NavListItem
                          key={domain.title}
                          title={domain.title}
                          href={domain.href}
                          icon={<DomainIcon size={16} />}
                      /> 
                  )
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
   

interface NavListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode; // New "icon" prop
}

const NavListItem = React.forwardRef<
    HTMLAnchorElement,
    NavListItemProps
  >(({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="font-medium leading-none flex items-center gap-x-1">
                {icon && <span className="icon mr-0.5">{icon}</span>}
                {title}
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  NavListItem.displayName = "NavListItem"


function MobileNavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">
          <span className="sr-only">Menu</span>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className='text-2xl font-semibold tracking-tighter' aria-label="Home">🚀 tekwerke</Link>
          </SheetTitle>
        </SheetHeader>

        <div className="h-screen flex flex-col">
          <div className="flex-grow overflow-y-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="w-full py-4">
                <AccordionTrigger className="flex w-full p-0">Domains</AccordionTrigger>
                <AccordionContent className="py-0 flex flex-col">
                  {domainsList.map((domain) => {
                    const DomainIcon = domain.icon
                    return (
                      <Link key={domain.title} href={domain.href} className="flex gap-x-2 items-center py-2 px-2">
                        <DomainIcon size={24} />
                        <span>{domain.title}</span>
                      </Link>
                    )
                  })}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="w-full py-4">
                <Link href="/about" className="flex w-full">About</Link>
              </AccordionItem>
              <AccordionItem value="item-3" className="w-full py-4">
                <Link href="/contact" className="flex w-full">Contact</Link>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="h-56 flex flex-col gap-y-2">
            <FlatThemeToggle />                    
            <Button variant="outline"><Link href="/signup">Signup</Link></Button>
            <Button><Link href="/login">Login</Link></Button>
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}