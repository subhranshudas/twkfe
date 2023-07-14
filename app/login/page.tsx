import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'
import { LoginForm } from '@/components/login-form'

export const metadata: Metadata = {
    title: 'Tekwerke | Login',
    description: 'Tekwerke - Hire Experts',
}



export default function LoginPage() {
    return (
        <div className="w-full">
           <PageHeader header='Login' />

            <section className="container flex flex-col gap-y-8 w-full lg:w-3/5 pt-12 pb-16 md:pb-32">
                <p className='text-2xl text-center'>Please login to your account with</p>

                <div className='mt-2 p-8 md:p-12 shadow-xl border rounded-xl dark:shadow-none dark:border relative'>
                    <LoginForm />
                </div>
                
            </section>
        </div>
    )
}




