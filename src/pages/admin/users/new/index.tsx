// ** MUI Components
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Custom Component Import
import UserSettings from 'src/views/pages/users/TabUserSettings'
import Translations from 'src/layouts/components/Translations'

// ** Fake Data Import
import { fakeData } from 'src/@fake-data/data'

const NewUser = () => {
  const onSaveAndAddMoreClick = () => {
    console.log('first')
  }
  const onSaveAndCloseClick = () => {
    console.log('first')
  }

  const editUserAdornment = () => (
    <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
      <LoadingButton sx={{ flex: 1, minWidth: 'fit-content' }} onClick={onSaveAndAddMoreClick} variant='outlined'>
        <Translations text='saveAndAddAnother' />
      </LoadingButton>
      <LoadingButton sx={{ flex: 1, minWidth: 'fit-content' }} onClick={onSaveAndCloseClick} variant='outlined'>
        <Translations text='saveAndClose' />
      </LoadingButton>
    </Stack>
  )

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <UserSettings user={fakeData.user} bottomAdornment={editUserAdornment()} />
      </CardContent>
    </Card>
  )
}

export default NewUser
