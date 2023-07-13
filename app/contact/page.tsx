import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

import { PageHeader } from '@/components/page-header'


export const metadata: Metadata = {
    title: 'Tekwerke | Contact',
    description: 'Tekwerke - Hire Experts',
}


export default function ContactPage() {
    return (
        <div className="w-full">
            <PageHeader header='Contact' />

            <section className="container flex flex-col gap-y-8 w-full lg:w-3/5 pt-12 pb-16 md:pb-32">
                <p className='text-2xl'>Please feel free to drop us a message!</p>

                <div className='mt-8 px-12 py-16 shadow-xl border rounded-xl dark:shadow-none dark:border'>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}