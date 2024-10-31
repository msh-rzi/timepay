// ** Mui Import
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Component Import
import Translations from 'src/layouts/components/Translations'

type RequestDetailProps = {
  onSave: () => void
  loading: boolean
}

const RequestDetail = ({ onSave, loading }: RequestDetailProps) => {
  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Stack>
        <Stack spacing={4}>
          <Stack gap={2} flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Typography variant='button'>
              <Translations text='title' />
            </Typography>
            <TextField size='small' sx={{ flex: 1 }} />
          </Stack>
          <Stack spacing={2} flex={1}>
            <Typography variant='button'>
              <Translations text='detail' />
            </Typography>
            <TextField multiline minRows={6} />
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
        <LoadingButton onClick={onSave} loading={loading} sx={{ flex: 1 }} variant='contained'>
          <Translations text='save' />
        </LoadingButton>
      </Stack>
    </Stack>
  )
}

export default RequestDetail
