// ** Third Party Import
import { useTranslation } from 'react-i18next'

interface Props {
  text: string
}

const Translations = ({ text }: Props) => {
  // ** Hook
  const { t } = useTranslation()

  return <span>{`${t(text)}`}</span>
}

export default Translations
