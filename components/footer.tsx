import Link from "next/link";


export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground">
            <section className="container mx-auto pt-16 pb-2 text-center">
                {/* <ul className="flex justify-center gap-x-4 mb-4">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul> */}
                <div className="text-xs">&copy; 2023 <span className="font-bold">Tekwerke</span>. All rights reserved.</div>
            </section>
            
        </footer>
    )
}