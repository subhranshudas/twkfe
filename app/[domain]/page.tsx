
import { domainsList } from "@/components/domains-list"
import { toPascalCase } from "@/lib/utils"
import { PageHeader } from "@/components/page-header"
import { PageSearch } from "@/components/page-search"

type DomainProps = {
  params: { domain: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

function getDomainObject(domain: string) {
    return domainsList.find((domainObj) => {
        return domainObj["id"] === domain
    })
}

export function generateMetadata(
    { params }: DomainProps,
  ): any {
    // read route params
    const domain = params.domain
    let title = "Tekwerke"

    const subTitle = getDomainObject(domain)?.title

    if (subTitle) {
        title = [
            title,
            toPascalCase(subTitle)
        ].join(' | ')
    }

    return {
        title,
        description: 'Tekwerke - Hire Experts',
    }
}


export default function DomainPage({ params, searchParams }: DomainProps) {

    const title = getDomainObject(params.domain)?.title || 'Uh Oh!'

    return (
        <div className="w-full">
        <PageHeader header={toPascalCase(title)} />

        <section className="container flex flex-col gap-y-8 w-full">
            <PageSearch selectedChoice={params.domain} searchQuery="" />
        </section>
    </div>
    )
}