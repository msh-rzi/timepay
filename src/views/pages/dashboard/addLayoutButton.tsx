// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Custom Components
import IconifyIcon from 'src/@core/components/icon'
import Translations from 'src/layouts/components/Translations'

const AddLayoutButton = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Button fullWidth variant='outlined' style={{ height: '100%' }} startIcon={<IconifyIcon icon='mdi:plus' />}>
              <Translations text='Add Layout' />
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddLayoutButton
