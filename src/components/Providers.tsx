'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

type Props = {
  children: React.ReactNode
}

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false} {...props}>
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  )
}

export default Providers
