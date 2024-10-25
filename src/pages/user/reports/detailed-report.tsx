// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'
import ReportsHeader from 'src/@core/layouts/components/reports/reports-header'
import DetailedReportList from 'src/@core/layouts/components/reports/details-report-list'

import { fakeData } from 'src/@fake-data/data'

const DetailedReport = () => {
  const [data, setData] = useState<GeneralReportDetails | null>(null)
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    setLoading(true)
    new Promise(() =>
      setTimeout(() => {
        setData(fakeData.generalReportDetails)
        setLoading(false)
      }, 3000)
    )
  }

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={12} sx={{ height: '100%' }}>
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <CardHeader title={<Translations text='Detailed Reports' />} />
            <Divider />
            <ReportsHeader loading={loading} onClick={onClick} />
            <Divider />
            {data && <DetailedReportList />}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DetailedReport
