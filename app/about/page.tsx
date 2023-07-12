import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tekwerke | About',
    description: 'Tekwerke - Hire Experts',
}



export default function AboutPage() {
    return (
        <div className="w-full">
            <section className="w-full page-header-background-gradient py-12">
                <div className="container">
                    <h2 className="text-5xl font-bold text-center">About</h2>
                </div>
            </section>

            <section className="container py-8 flex flex-col gap-y-8">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni beatae tempora quasi repellendus nostrum velit error deleniti excepturi, obcaecati sint debitis architecto molestias aspernatur unde, exercitationem quaerat fugiat, nulla earumt eius.</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni beatae tempora quasi repellendus nostrum velit error deleniti excepturi, obcaecati sint debitis architecto molestias aspernatur unde, exercitationem quaerat fugiat, nulla earumt eius.</p>
            </section>
        </div>
    )
}