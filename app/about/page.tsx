import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
    title: 'Tekwerke | About',
    description: 'Tekwerke - Hire Experts',
}



export default function AboutPage() {
    return (
        <div className="w-full">
           <PageHeader header='About' />

            <section className="container flex flex-col gap-y-8 w-full lg:w-3/5 pt-12 pb-16 md:pb-32">
                <p className='text-2xl'>Why we built Tekwerke?</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni beatae tempora quasi repellendus nostrum velit error deleniti excepturi, obcaecati sint debitis architecto molestias aspernatur unde, exercitationem quaerat fugiat, nulla earumt eius.</p>
            </section>
        </div>
    )
}