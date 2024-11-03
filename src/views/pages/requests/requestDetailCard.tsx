import { ReactNode } from 'react'

// ** Mui Components Import
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

type RequestDetailCardProps = {
  userName: string
  date: Date | string
  detail: string
  anchor?: 'left' | 'right'
  actions?: ReactNode
}

const RequestDetailCard = ({ userName, date, detail, anchor = 'right', actions }: RequestDetailCardProps) => {
  return (
    <Card
      sx={theme => ({
        width: '90%',
        alignSelf: anchor === 'right' ? 'flex-start' : 'flex-end',
        background: anchor === 'right' ? theme.palette.background.paper : theme.palette.customColors.bodyBg,
        border: '1px solid',
        borderColor: theme.palette.divider
      })}
      elevation={1}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Stack flexDirection='row' justifyContent='space-between'>
          <Typography sx={{ fontWeight: 'bold' }}>{userName}</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{`${date}`}</Typography>
        </Stack>
        <Divider />
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {detail}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

export default RequestDetailCard
