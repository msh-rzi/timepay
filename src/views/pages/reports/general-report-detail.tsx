// ** MUI Imports
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

type ReportsDetailProps = {
  details: GeneralReportDetailsType
}

const GeneralReportsDetail = ({ details }: ReportsDetailProps) => {
  // ** Hook
  const { lc } = useLang()

  return (
    <Stack spacing={2}>
      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='reportDateRange' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatDate(new Date(details.fromDate))} - {lc.formatDate(new Date(details.toDate))}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalDays' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatNumber(details.totalDays)}
        </Typography>
      </Stack>
      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalHours' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatNumber(details.totalWorkHours)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalLeaves' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatNumber(details.totalLeaves)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalSalary' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatNumber(details.totalSalary, true)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalReceived' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatNumber(details.totalReceived, true)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalRemaining' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.formatNumber(details.totalRemaining, true)}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default GeneralReportsDetail
