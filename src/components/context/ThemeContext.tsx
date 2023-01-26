import { createContext } from "react"
import { theme } from './theme';

type ThemeContextProviderProps = {
    children: React.ReactNode
}


export const ThemeContexts = createContext(theme)

function ThemeContextProvider({children}: ThemeContextProviderProps) {
  return (
 <ThemeContexts.Provider value={theme}>{children}</ThemeContexts.Provider>
  )
}

export default ThemeContextProvider