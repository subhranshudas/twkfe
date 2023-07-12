"use client"

import * as React from "react"
import { Check, ChevronsUpDown, SearchIcon, BadgeInfoIcon } from "lucide-react"

import { cn } from "@/lib/utils"
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


import { domainsList } from "./domains-list"



const domainDropdownList = domainsList.map(({ href, title }) => ({
    label: title,
    value: href.split("/")[1],

}))

export function SearchBox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <div className="w-full my-12 p-2">
            <p className="text-xs text-center my-2 mb-4">
                please choose from our domains and search for your topic
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 md:gap-x-2">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full md:w-[250px] justify-between"
                        >
                            <span className="truncate">
                                {value
                                ? domainDropdownList.find((domain) => domain.value === value)?.label
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
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === domain.value ? "opacity-100" : "opacity-0"
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
            

            
        </div>
    )
}


