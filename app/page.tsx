import { DomainCards } from "@/components/domain-cards"
import { domainsList } from "@/components/domains-list"
import { SearchBox } from "@/components/search-box"


export default function Home() {
  return (
    <div className="w-full">

      <section className="
        container mx-auto
        flex flex-col"
      >
        <div className="
          page-header-background-gradient
          rounded-lg flex flex-col justify-center items-center
          py-12 md:py-16 lg:py-20
          mt-8"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">tekwerke</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">unlock possibilities.</p>

          <p className="text-xl md:text-2xl px-12 md:px-0 mt-12 mb-4 text-center">Hire and connect with our Experts now!</p>
        </div>
        
        <div className="w-full md:w-4/5 mx-auto">
          <SearchBox />
        </div>
   
      </section>

      <section className="container mx-auto mt-16 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold md:font-extrabold text-center" id="domains">Our Domains</h2>

        <div className="mt-12">
          <p className="text-lg md:text-xl px-12 md:px-0 mb-4 text-center">We have experts from various domains.</p>
          <p className="text-xs md:text-base text-center my-2 mb-12">Please click on a domain to see our offerings</p>
          <DomainCards cards={domainsList} />
        </div>
        
      </section>
    
    </div>
  )
}
