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
import ReportsHeader from 'src/views/pages/reports/reports-header'
import ReceivableReportList from 'src/views/pages/reports/receivable-report.list'

import { fakeData } from 'src/@fake-data/data'

const ReceivableReport = () => {
  const [data, setData] = useState<ReceivablesReportType[]>([])
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    setLoading(true)
    new Promise(() =>
      setTimeout(() => {
        setData(fakeData.receivablesReport)
        setLoading(false)
      }, 3000)
    )
  }

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={12} sx={{ height: '100%' }}>
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <CardHeader title={<Translations text='Receivables Report' />} />
            <Divider />
            <ReportsHeader loading={loading} onClick={onClick} />
            <Divider />
            {data && <ReceivableReportList data={data} />}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ReceivableReport
