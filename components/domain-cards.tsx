
import * as React from "react"
import Link from "next/link"
 
import { DomainProps } from "./domains-list";


interface DomainCardsProps {
  cards: DomainProps[]
}

export function DomainCards({
 cards
}: DomainCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {cards.map(({ id, title, href, icon }) =>  
            <DomainCard id={id} key={title} title={title} icon={icon} href={href} />            
        )}
    </div>
  )
}

function DomainCard({ title, icon, href  }: Omit<DomainProps, "description">) {
    const DomainIcon = icon

    return (
        <Link
            key={title}
            href={href}
            aria-label={title}
            className="
                group
                flex flex-col justify-center items-center rounded-lg border p-4 gap-y-4
                hover:scale-105 transition ease-in duration-200
                hover:shadow-lg
                dark:hover:border-slate-400
                bg-gradient-to-b from-white via-slate-50 to-slate-100
                dark:bg-gradient-to-t dark:from-slate-900 dark:via-slate-900 dark:to-slate-950
            "
        >
            <div className="p-2 rounded border dark:border-slate-800">
                <DomainIcon className="w-12 h-12 text-muted-foreground group-hover:text-foreground" />
            </div>
            
            <h3 className="text-xl font-semibold text-muted-foreground group-hover:text-foreground">{title}</h3>
        </Link>
       
    )
}

