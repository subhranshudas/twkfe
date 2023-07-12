import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'


export const metadata: Metadata = {
    title: 'Tekwerke | Contact',
    description: 'Tekwerke - Hire Experts',
}


export default function ContactPage() {
    return (
        <div className="w-full">
            <section className="w-full page-header-background-gradient py-12">
                <div className="container">
                    <h2 className="text-5xl font-bold text-center">Contact</h2>
                </div>
            </section>

            <section className="container flex flex-col gap-y-8 w-full lg:w-3/5 pt-12 pb-16 md:pb-32">
                <p className='text-2xl'>Please feel free to drop us a message!</p>

                <div className='px-12 py-16 shadow-xl border rounded-xl dark:shadow-none dark:border'>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}