// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Fake Data
import { fakeData } from 'src/@fake-data/data'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'
import SwipeableDrawer from 'src/@core/components/drawer/swapeableDrawer'

// ** Hooks Import
import useLang from 'src/hooks/useLang'
import AttendanceDetail from 'src/views/pages/attendance/attendance-detail'
import AttendanceSelect from 'src/views/pages/attendance/attendance-select'
import AttendanceWorkDetail from 'src/views/pages/attendance/attendance-work-detail'

const Attendance = () => {
  // ** State
  const [data, setData] = useState<AttendanceType>(fakeData.attendance)
  const [task, setTask] = useState<TasksType | null>(null)
  const [loading, setLoading] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  // ** Hook
  const { lc } = useLang()

  const onCheckInClick = () => {
    setLoading(true)

    new Promise(() => {
      setTimeout(() => {
        setLoading(false)
        setData({
          ...data,
          currentStatus: {
            ...data.currentStatus,
            hasCheckedIn: true,
            checkInTime: new Date().toLocaleTimeString(lc.short)
          }
        })
      }, 3000)
    })
  }
  const onCheckOutClick = () => {
    setLoading(true)
    setOpenDrawer(true)
  }

  const onTaskChange = (task: TasksType) => {
    setTask(task)
  }

  const onSaveWorkDetails = (workDetails: workDetailsType) => {
    new Promise(() => {
      setTimeout(() => {
        setLoading(false)
        setData({
          ...data,
          currentStatus: {
            ...data.currentStatus,
            checkOutTime: new Date().toLocaleTimeString(lc.short),
            hasCheckedIn: false
          }
        })
        setOpenDrawer(false)

        console.log({ workDetails })
      }, 3000)
    })
  }

  return (
    <Grid container spacing={6} sx={{ height: '100%' }}>
      <Grid item xs={12} sx={{ height: '100%' }}>
        <Card sx={{ height: '100%' }}>
          <CardContent
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <AttendanceDetail data={data} task={task} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <AttendanceSelect disabled={data.currentStatus.hasCheckedIn} onTaskChange={onTaskChange} />
              <LoadingButton
                loading={loading}
                onClick={onCheckInClick}
                disabled={!Boolean(task) || data.currentStatus.hasCheckedIn}
                size='large'
                variant='contained'
                color='primary'
              >
                <Translations text='checkIn' />
              </LoadingButton>

              <LoadingButton
                loading={loading}
                onClick={onCheckOutClick}
                disabled={!Boolean(task) || !data.currentStatus.hasCheckedIn}
                size='large'
                variant='contained'
                color='error'
              >
                <Translations text='checkOut' />
              </LoadingButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <SwipeableDrawer
        onClose={e => {
          e.preventDefault()
        }}
        title='Work Details'
        anchor='bottom'
        open={openDrawer}
        setOpen={setOpenDrawer}
      >
        <AttendanceWorkDetail onSave={onSaveWorkDetails} />
      </SwipeableDrawer>
    </Grid>
  )
}

export default Attendance
