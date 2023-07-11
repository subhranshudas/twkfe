"use client"

import React from "react"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
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
                
                <nav className="flex justify-between items-center gap-x-2">
                    <TWNavigationMenu />

                    <ThemeToggle />
                    
                    <Button variant="outline">Signup</Button>
                    <Button>Login</Button>
                </nav>
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