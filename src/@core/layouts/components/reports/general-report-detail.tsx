// ** MUI Imports
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

type ReportsDetailProps = {
  details: GeneralReportDetails
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
          {lc.to(new Date(details.fromDate))} - {lc.to(new Date(details.toDate))}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalDays' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.convertNumber(details.totalDays)}
        </Typography>
      </Stack>
      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalHours' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.convertNumber(details.totalWorkHours)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalLeaves' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.convertNumber(details.totalLeaves)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalSalary' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.convertNumber(details.totalSalary, true)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalReceived' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.convertNumber(details.totalReceived, true)}
        </Typography>
      </Stack>

      <Stack flexDirection='row' justifyContent='space-between'>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          <Translations text='totalRemaining' />
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {lc.convertNumber(details.totalRemaining, true)}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default GeneralReportsDetail
