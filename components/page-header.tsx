

/**
 * This component is basically the top graident based Page header
 * for every page except the landing page
 */

export interface PageHeaderProps {
    header: string
}

export function PageHeader({ header } : PageHeaderProps ) {
    return (
        <section className="w-full page-header-background-gradient py-12">
            <div className="container">
                <h2 className="text-5xl font-bold text-center">{header}</h2>
            </div>
        </section>
    )
}