// ** MUI Imports
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

type AttendanceDetailProps = {
  data: AttendanceType
  task: TasksType | null
}

const AttendanceDetail = ({ data, task }: AttendanceDetailProps) => {
  const { lc } = useLang()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Detail title='currentDate' useDef description={lc.formatDate(new Date())} />
      <Detail
        title='checkInTime'
        useDef={Boolean(data.currentStatus.checkInTime)}
        description={data.currentStatus.checkInTime || 'Not entered yet!'}
      />
      <Detail
        title='checkOutTime'
        useDef={Boolean(data.currentStatus.checkOutTime)}
        description={data.currentStatus.checkOutTime || 'Not entered yet!'}
      />
      <Detail title='weeklyWorkingDays' useDef description={lc.formatNumber(+data.weeklySummary.daysWorked) || '0'} />
      <Detail title='monthlyWorkingDays' useDef description={lc.formatNumber(+data.monthlySummary.daysWorked) || '0'} />
      <Detail title='task' description={task?.company || 'Not entered yet!'} />
    </Box>
  )
}

export default AttendanceDetail

export const Detail = ({ title, description, useDef }: { title: string; description: string; useDef?: boolean }) => {
  return (
    <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Translations text={title} />
      {useDef ? <span>{description}</span> : <Translations text={description} />}
    </Typography>
  )
}
