// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import Translations from 'src/layouts/components/Translations'

// ** Fake Data
import { fakeData } from 'src/@fake-data/data'

// import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
      }}
    >
      <Box
        className='actions-left'
        sx={{
          mr: hidden ? 0 : 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        {hidden ? (
          <IconButton color='inherit' onClick={toggleNavVisibility}>
            <Icon fontSize='1.5rem' icon='tabler:menu-2' />
          </IconButton>
        ) : null}
      </Box>
      <Box
        className='actions-right'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant='button'>
          <Translations text={fakeData.user.name} />
        </Typography>
        <Typography variant='caption' sx={{ mt: 1 }}>
          <Translations text={fakeData.user.position} />
        </Typography>
      </Box>
    </Box>
  )
}

export default AppBarContent
