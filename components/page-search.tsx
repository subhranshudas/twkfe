"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'

import { Check, ChevronsUpDown, SearchIcon, SlidersHorizontalIcon } from "lucide-react"

import { cn, toPascalCase } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


import { domainsList } from "./domains-list"



const domainDropdownList = domainsList.map(({ href, title }) => ({
    label: title,
    value: href.split("/")[1],
    href: href
}))


interface PageSearchProps {
    selectedChoice: string;
    searchQuery: string;
}

export function PageSearch(props: PageSearchProps) {
    const router = useRouter()

    const [open, setOpen] = React.useState(false)
    const [domainChoice, setDomainChoice] = React.useState(props.selectedChoice)

    return (
        <div className="w-full my-6 p-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 md:gap-x-2">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full md:w-[300px] justify-between"
                        >
                            <span className="truncate">
                                {domainChoice
                                ? domainDropdownList.find((domain) => domain.value === domainChoice)?.label
                                : "Select a domain"}
                            </span>

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search domain..." />
                            <CommandEmpty>No domain found.</CommandEmpty>
                            <CommandGroup>
                                {domainDropdownList.map((domain) => (
                                    <CommandItem
                                        key={domain.value}
                                        value={domain.value}
                                        onSelect={(currentValue) => {
                                            setDomainChoice(currentValue === domainChoice ? "" : currentValue)
                                            setOpen(false)

                                            router.push(domain.href)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                domainChoice === domain.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {domain.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>

                <div className="flex items-center flex-grow gap-x-2 w-full">
                    <Input type="text" placeholder="search..." className=""/>
                    <Button><SearchIcon /></Button>
                </div>
            </div>



            {/* Results Panel */}
            <div className="flex flex-col md:flex-row mt-4 min-h-screen">
                <div className="w-full md:w-[245px] flex flex-col gap-y-2 border md:p-2">
                    
                    {/* mobile filters button */}
                    <Button variant="ghost" className="flex gap-x-2 w-full md:hidden">
                        <SlidersHorizontalIcon />
                        <span className="font-bold">Filters</span>
                    </Button>

                    <div className="hidden md:flex pl-1">
                        <span className="font-bold">Filters</span>
                    </div>

                    <div className="hidden md:flex flex-col px-1">
                        {topicsList.map((topic) => {
                            return (
                                <Label key={topic.id} htmlFor={`checkbox-${topic.id}`}
                                    className="w-full cursor-pointer flex items-center bg-muted/50 text-muted-foreground gap-x-2 my-2 p-2 rounded hover:bg-muted"
                                >
                                    <Checkbox id={`checkbox-${topic.id}`} className="text-muted-foreground" />
                                    {toPascalCase(topic.label)}
                                </Label>
                            )
                        })}
                    </div>
                </div>
                <div className="flex-grow p-4 md:pt-2">
                    <p className="uppercase text-muted-foreground text-sm">{`showing results for "query"`}</p>
                </div>
            </div>
        </div>
    )
}


const topicsList = [
    {
        id: 'llm',
        value: 'llm',
        label: "LLM"
    },
    {
        id: 'image',
        value: 'image',
        label: "Image"
    },
    {
        id: 'voice',
        value: 'voice',
        label: "Voice"
    },
    {
        id: 'text',
        value: 'text',
        label: "Chat"
    },
    {
        id: 'agents',
        value: 'agents',
        label: "Agents"
    },
    {
        id: 'integration',
        value: 'integration',
        label: "Integrations"
    }
]