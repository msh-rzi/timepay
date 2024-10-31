import React from 'react'

// ** MUI Imports
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'
import DatePicker from 'src/@core/components/date-picker'

type ReportsHeaderProps = {
  loading: boolean
  onClick: () => void
}

const ReportsHeader = ({ loading, onClick }: ReportsHeaderProps) => {
  return (
    <>
      <Stack spacing={2}>
        <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
          <Typography>
            <Translations text='from' />
          </Typography>
          <Box>
            <DatePicker />
          </Box>
        </Stack>
        <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
          <Typography>
            <Translations text='to' />
          </Typography>
          <Box>
            <DatePicker />
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 4 }}>
        <LoadingButton variant='contained' loading={loading} onClick={onClick}>
          <Translations text='generateReport' />
        </LoadingButton>
      </Stack>
    </>
  )
}

export default ReportsHeader
