
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
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
                group
                flex flex-col justify-center items-center rounded-lg border p-4 gap-y-6 md:gap-y-10 shadow-lg
                hover:scale-105 transition ease-in duration-200
                dark:hover:border-slate-400

                bg-gradient-to-b from-white via-slate-100 via-60% to-slate-100
                hover:bg-gradient-to-t hover:from-white hover:via-slate-100 hover:via-30% hover:to-slate-100

                dark:bg-gradient-to-t dark:from-slate-900 dark:via-slate-900 dark:to-slate-950
                dark:hover:bg-gradient-to-b dark:hover:from-slate-900 dark:hover:via-slate-900 dark:hover:to-slate-950
            "
        >
            <div
                className="
                    py-2 px-12 rounded border 
                    border-slate-300 group-hover:border-slate-400
                    dark:border-slate-700 dark:group-hover:border-slate-300">
                <DomainIcon className="w-12 h-12" />
            </div>
            
            <h3 className="text-xl group-hover:font-semibold">{title}</h3>
        </Link>
       
    )
}