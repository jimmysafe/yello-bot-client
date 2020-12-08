import React, { FC } from 'react'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC = ({ children }: LayoutProps) => {
    return (
        <main>
            {/* nav here */}
            <div className="container mx-auto">
                {children}
            </div>
        </main>
    )
}

export default Layout