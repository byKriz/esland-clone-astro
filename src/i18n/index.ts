import catalan from "./ca.json"
import spanish from "./es.json"


const enum LANGUAGES {
    CATALAN = 'ca',
    SPANISH = 'es'
}

interface CurrentLocale {
    currentLocale: string | undefined
}

export const getI18N = ({currentLocale = 'es'}: CurrentLocale) => {
    if (currentLocale === LANGUAGES.CATALAN) return catalan
    if (currentLocale === LANGUAGES.SPANISH) return spanish
}