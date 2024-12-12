"use client"

import { ReactNode } from "react"

interface FooterElement {
    name: string,
    link: string,
    page: ReactNode
}

export default function Footer({ elements, setCurrPage, currPage }: { elements: FooterElement[], setCurrPage: CallableFunction, currPage: String }) {
    function genFooterElement(element: FooterElement) {
        const isActive: boolean = currPage == element.link
        return (
            <div 
                key={element.link} 
                className={`
                    relative 
                    p-4 
                    group
                    cursor-pointer
                `}
            >
                {/* Bottom border with transition */}
                <div className={`
                    absolute 
                    bottom-0 
                    left-0 
                    w-full 
                    h-0.5
                    bg-primary-700
                    opacity-0 
                    transition-all 
                    duration-300 
                    ease-in-out
                    transform
                    scale-x-0
                    group-hover:opacity-50
                    group-hover:scale-x-100
                    ${isActive ? 'opacity-100 scale-x-100' : ''}
                `} />
                
                <button 
                    onClick={() => {
                        setCurrPage(element.link)
                        console.log(element.link)
                    }}
                    className="relative text-white transition-colors duration-300"
                >
                    {element.name}
                </button>
            </div>
        )
    }
    
    return (
        <footer className="absolute bottom-0 w-full flex justify-around bg-slate-900 p-6">
            {elements.map(genFooterElement)}
        </footer>
    )
}