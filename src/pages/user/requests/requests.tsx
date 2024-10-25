// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

// ** Component Imports
import RequestsHeader from 'src/@core/layouts/components/requests/requestsHeader'
import RequestsList from 'src/@core/layouts/components/requests/requestsList'
import RequestDetail from 'src/@core/layouts/components/requests/requestDetail'
import Translations from 'src/layouts/components/Translations'

type RequestsProps = {
  drawerTitle: string
  cardTitle: string
  requestsList: RequestsType[]
  onSave: () => void
  loading: boolean
}

const Requests = ({ requestsList, drawerTitle, cardTitle, loading, onSave }: RequestsProps) => {
  return (
    <Grid container spacing={6} sx={{ height: '100%' }}>
      <Grid item xs={12} sx={{ height: '100%' }}>
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <CardHeader title={<Translations text={cardTitle} />} />
            <Divider />
            <RequestsHeader title={drawerTitle}>
              <RequestDetail onSave={onSave} loading={loading} />
            </RequestsHeader>
            <RequestsList list={requestsList} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Requests
