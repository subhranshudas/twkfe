import Link from "next/link";


export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground" aria-label="footer">
            <section className="container mx-auto pt-16 pb-2
            flex flex-col md:flex-row items-center md:justify-between">
                <div className="text-xs">&copy; 2023 <span className="font-bold">Tekwerke</span>. All rights reserved.</div>

                <ul className="flex justify-center items-center gap-x-4 mb-4 md:mb-0">
                    <li className="text-sm hover:opacity-80"><Link href="/about">About</Link></li>
                    <li className="text-sm hover:opacity-80"><Link href="/contact">Contact</Link></li>
                </ul> 
            </section>
            
        </footer>
    )
}