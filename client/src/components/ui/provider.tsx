"use client"

import {
  ChakraProvider,
  //defaultSystem,
  defaultConfig,
  createSystem,
  defineConfig,
  SystemConfig,
  SystemContext
} from "@chakra-ui/react"

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const config: SystemConfig = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    }
  }
})

const system: SystemContext = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider
      //value={defaultSystem}
      value={ system }
    >
      <ColorModeProvider { ...props } />
    </ChakraProvider>
  )
}