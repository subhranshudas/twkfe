import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'
import { SignupForm } from '@/components/signup-form'

export const metadata: Metadata = {
    title: 'Tekwerke | Signup',
    description: 'Tekwerke - Hire Experts',
}



export default function SignupPage() {
    return (
        <div className="w-full">
           <PageHeader header='Signup' />

            <section className="container flex flex-col gap-y-8 w-full lg:w-3/5 pt-12 pb-16 md:pb-32">
                <p className='text-2xl text-center'>Please signup with</p>

                <div className='mt-2 p-8 md:p-12 shadow-xl border rounded-xl dark:shadow-none dark:border relative'>
                    <SignupForm />
                </div>
                
            </section>
        </div>
    )
}




