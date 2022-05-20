import {createContext, ReactNode, useState} from 'react'

interface HistoricSearchPropsContext {
    historicSearch: []
    setHistoricSearch: any
}

interface HistoricSearchPropsProvider {
    children: ReactNode
}

export const HistoricSearchContext = createContext<HistoricSearchPropsContext>({} as HistoricSearchPropsContext)

//criando o provider
export function HistoricSearchProvider({children}: HistoricSearchPropsProvider) {
    
    const [historicSearch, setHistoricSearch] = useState<any>([])

    return (
        <HistoricSearchContext.Provider value={{historicSearch, setHistoricSearch}}>
            {children}
        </HistoricSearchContext.Provider>
    )
}