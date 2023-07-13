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
                <p className='text-2xl text-center'>Why we built Tekwerke?</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni beatae tempora quasi repellendus nostrum velit error deleniti excepturi, obcaecati sint debitis architecto molestias aspernatur unde, exercitationem quaerat fugiat, nulla earumt eius.</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae facere beatae, non assumenda commodi, natus ipsum laudantium perspiciatis deleniti tempore provident tenetur quaerat dicta distinctio optio numquam repudiandae architecto.
                Unde aliquid accusamus dolorem doloremque vitae, iure nemo sint amet in id quas sapiente esse quis, delectus, et minima facilis molestiae dignissimos libero nihil tempora incidunt inventore. Voluptates, similique alias.
                Laboriosam consequatur porro numquam quos nesciunt possimus iste veritatis amet voluptas dicta sit maxime repudiandae, dolor omnis architecto! Iusto sint nulla perferendis tempore corporis enim laborum officia pariatur provident ut?
                Eligendi, aliquid tempora. Perspiciatis, est magni obcaecati sequi minima qui in vero laboriosam, aspernatur beatae odio inventore reprehenderit culpa velit, neque recusandae quo molestiae enim consectetur nulla illum rem provident.
                Adipisci a nostrum magni tempora praesentium quisquam architecto veniam odit harum nulla maiores obcaecati, perferendis iusto deserunt, unde quas! Esse facilis corporis sequi libero earum commodi exercitationem quas nobis temporibus!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam, in quod est soluta odio repellendus dolores quidem qui laborum dicta minima doloremque suscipit deserunt similique hic excepturi magnam reprehenderit?
                Voluptatem eius soluta laudantium accusamus sint magnam? Hic, quas. Quibusdam porro error quod! Officiis, repellat dicta maxime ratione rem perspiciatis similique adipisci doloribus doloremque fugiat quae architecto distinctio illum earum?</p>
            </section>
        </div>
    )
}