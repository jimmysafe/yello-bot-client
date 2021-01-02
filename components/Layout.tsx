import React, { FC } from 'react'
import Nav from './Nav'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC = ({ children }: LayoutProps) => {
    return (
        <main className="bg-bgColor min-h-screen relative">
            <Nav />
            <div className="container mx-auto relative">
                {children}
            </div>
            <p className="absolute bottom-3 text-white text-center font-primary text-xs" style={{ left: '50%', transform: 'translateX(-50%)' }}>Yello Bot - Copyright {new Date().getFullYear()} - powered by Basilico</p>
        </main>
    )
}

export default Layout