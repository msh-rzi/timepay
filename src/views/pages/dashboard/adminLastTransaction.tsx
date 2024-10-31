import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableContainer from '@mui/material/TableContainer'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Fake Data
import { fakeData } from 'src/@fake-data/data'

// ** Hook Import
import { useAuth } from 'src/hooks/useAuth'
import Translations from 'src/layouts/components/Translations'
import useLang from 'src/hooks/useLang'

interface DataType {
  date: string
  trend: string
  imgName: string
  cardType: string
  cardNumber: string
  status: ReceivablesReportType['status']
}

type StatusObj = Record<
  DataType['status'],
  {
    text: string
    color: ThemeColor
  }
>

const statusObj: StatusObj = {
  Rejected: { text: 'Rejected', color: 'error' },
  Pending: { text: 'Pending', color: 'secondary' },
  Verified: { text: 'Verified', color: 'success' }
}

const adminLastTransaction = () => {
  const auth = useAuth()
  const [data] = useState(fakeData.receivablesReport)
  const { lc } = useLang()

  return (
    <Card>
      <CardHeader title={<Translations text='Last Transaction' />} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{ '& .MuiTableCell-root': { py: 2, borderTop: theme => `1px solid ${theme.palette.divider}` } }}
            >
              <TableCell>
                <Translations text='name' />
              </TableCell>
              <TableCell>
                <Translations text='amount' />
              </TableCell>
              <TableCell>
                <Translations text='status' />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child .MuiTableCell-root': { pb: theme => `${theme.spacing(6)} !important` },
                    '& .MuiTableCell-root': { border: 0, py: theme => `${theme.spacing(2.25)} !important` },
                    '&:first-of-type .MuiTableCell-root': { pt: theme => `${theme.spacing(4.5)} !important` }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', '& img': { mr: 4 } }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          {auth.user?.fullName}
                        </Typography>
                        <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                          {row.company}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', '& img': { mr: 4 } }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          {lc.convertNumber(row.amountDue, true)}
                        </Typography>
                        <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                          {row.type}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', '& img': { mr: 4 } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                          <CustomChip
                            rounded
                            size='small'
                            skin='light'
                            label={<Translations text={statusObj[row.status].text} />}
                            color={statusObj[row.status].color}
                          />
                          <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                            {lc.to(new Date(row.dueDate))}
                          </Typography>
                        </Box>
                      </Box>
                    </Typography>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default adminLastTransaction
