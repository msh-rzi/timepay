// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AddLayoutButton from 'src/views/pages/dashboard/addLayoutButton'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <AddLayoutButton />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
