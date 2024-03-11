// app/providers.tsx
'use client'

import React from "react"
import { ChakraProvider, extendTheme, useColorMode, ThemeConfig } from '@chakra-ui/react'
import localFont from "next/font/local"

const spoqaRegular = localFont({
    src: './font/SpoqaHanSansNeo-Regular.ttf'
})

const spoqaBold = localFont({
    src: './font/SpoqaHanSansNeo-Bold.ttf'
})

export function Providers({ children }: { children: React.ReactNode }) {
    const config: ThemeConfig = {
        initialColorMode: "light",
        useSystemColorMode: false,
    }

    const theme = extendTheme({
        config, fonts: {
            body: spoqaRegular.style.fontFamily,
            bold: spoqaBold.style.fontFamily,
        }
    })
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}