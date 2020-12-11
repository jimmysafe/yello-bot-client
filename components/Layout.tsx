import React, { FC } from 'react'
import Nav from './Nav'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC = ({ children }: LayoutProps) => {
    return (
        <main className="bg-bgColor min-h-screen">
            <Nav />
            <div className="container mx-auto">
                {children}
            </div>
        </main>
    )
}

export default Layout