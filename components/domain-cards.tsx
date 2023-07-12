
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ title, href, icon }) =>  
            <DomainCard key={title} title={title} icon={icon} href={href} />            
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
                flex flex-col justify-center items-center rounded-lg border p-4 gap-y-6 md:gap-y-10 shadow-lg
                bg-gradient-to-t from-slate-100 via-slate-100 to-white
                dark:shadow-none dark:bg-gradient-to-t dark:from-slate-950 dark:via-slate-900 dark:via-40% dark:to-gray-800
                hover:scale-105 ease-in duration-200
                hover:bg-gradient-to-b hover:shadow
                dark:hover:border-slate-400
            "
        >
            <DomainIcon className="w-12 h-12" />
            <h3 className="text-xl">{title}</h3>
        </Link>
       
    )
}