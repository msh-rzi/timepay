// ** React Import
import { useEffect } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks Import
import { useTranslation } from 'react-i18next'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Languages
import { langConfig, langType } from 'src/configs/lang-config'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const LanguageDropdown = ({ settings, saveSettings }: Props) => {
  // ** Hook
  const { i18n } = useTranslation()

  const handleLangItemClick = (lang: langType) => {
    i18n.changeLanguage(lang)
  }

  // ** Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <OptionsMenu
      iconButtonProps={{ color: 'inherit' }}
      icon={<Icon fontSize='1.625rem' icon='tabler:language' />}
      menuProps={{ sx: { '& .MuiMenu-paper': { mt: 4.25, minWidth: 130 } } }}
      options={Object.values(langConfig).map(lang => {
        return {
          text: lang.name,
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === lang.short,
            onClick: () => {
              handleLangItemClick(lang.short as langType)
              saveSettings({ ...settings, direction: lang.dir as any })
            }
          }
        }
      })}
    />
  )
}

export default LanguageDropdown