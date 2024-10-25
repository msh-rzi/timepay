// ** Hooks Import
import { useTranslation } from 'react-i18next'

// ** Config
import { langConfig, langType } from 'src/configs/lang-config'

export default function useLang() {
  // ** Hook
  const { i18n } = useTranslation()

  const lc = langConfig[i18n.language as langType]

  return { lc, i18n }
}
