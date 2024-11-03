// ** React Imports
import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react'

// ** MUI Components
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import Translations from 'src/layouts/components/Translations'
import SwipeableDrawer from 'src/@core/components/drawer/swapeableDrawer'

// ** Utils Import
import useLang from 'src/hooks/useLang'

// ** fake data
import { fakeData } from 'src/@fake-data/data'

const renderHeader = (field: string) => (
  <Typography sx={{ fontWeight: 'bold' }}>
    <Translations text={field} />
  </Typography>
)

interface CellType {
  row: RequestsType
}

type ManageRequestsProps = {
  data: RequestsType[]
  headerTitle: string
  children?: ReactNode
  actions?: ReactNode
  drawerTitle: string
  openDrawer: boolean
  setOpenDrawer: Dispatch<SetStateAction<any>>
}

// ** Define ManageLeaveRequests Component
const ManageRequestsList = ({
  data,
  headerTitle,
  children,
  actions,
  drawerTitle,
  openDrawer,
  setOpenDrawer
}: ManageRequestsProps) => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 50 })
  const [value, setValue] = useState<string>('')
  const [status, setStatus] = useState<ApprovalType | 'All'>('All')

  const { lc, t } = useLang()

  // ** Define Columns for Leave Requests
  const columns: GridColDef[] = useMemo(
    () => [
      {
        flex: 0.1,
        field: 'User',
        minWidth: 150,
        headerName: 'User',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
            {fakeData.users.find(user => user.id === row.userId)?.name}
          </Typography>
        )
      },
      {
        flex: 0.1,
        field: 'title',
        minWidth: 150,
        headerName: 'Request Title',
        renderHeader: ({ field }) => renderHeader(field)
      },
      {
        flex: 0.1,
        field: 'createdDate',
        minWidth: 150,
        headerName: 'Created Date',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
            {lc.formatDate(new Date(row.createdDate))}
          </Typography>
        )
      },
      {
        flex: 0.1,
        field: 'status',
        minWidth: 100,
        headerName: 'Status',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => <Translations text={row.status} />
      },
      {
        flex: 0.1,
        field: 'reviewDate',
        minWidth: 150,
        headerName: 'Approval Date',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
            {row.reviewDate ? lc.formatDate(new Date(row.reviewDate)) : <Translations text='Pending' />}
          </Typography>
        )
      },
      {
        flex: 0.2,
        field: 'details',
        minWidth: 250,
        headerName: 'Details',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>{row.details}</Typography>
        )
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const filteredRows = data.filter(request => {
    const matchesStatus = status === 'All' || request.status === status

    // Find the user ID based on the user name in value
    const findUser = fakeData.users.find(user => user.name.includes(value))
    const matchesSearch = !value || (findUser ? request.userId === findUser.id : false)

    return matchesStatus && matchesSearch
  })

  const translateSearch = t('search')

  return data ? (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '.MuiCardHeader-action': {
          width: '100%'
        }
      }}
    >
      <CardHeader
        title={<Translations text={headerTitle} />}
        titleTypographyProps={{ sx: { mb: [2, 0], display: 'flex' } }}
        action={
          <Stack sx={{ flexDirection: 'row', gap: 4, mt: 4 }}>
            <CustomTextField
              select
              size='small'
              fullWidth
              SelectProps={{
                value: status,
                onChange: e => {
                  const v = e.target.value as any
                  setStatus(v)
                }
              }}
            >
              <MenuItem value={'All'}>
                <Translations text='All' />
              </MenuItem>
              {fakeData.approvalType.map(option => (
                <MenuItem key={option} value={option}>
                  <Translations text={option} />
                </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField
              size='small'
              fullWidth
              value={value}
              placeholder={translateSearch}
              onChange={e => handleFilter(e.target.value)}
            />
          </Stack>
        }
        sx={{
          py: 4,
          flexDirection: ['column'],
          '& .MuiCardHeader-action': { m: 0 },
          alignItems: ['flex-start']
        }}
      />

      <DataGrid
        pagination
        rows={filteredRows}
        autoHeight
        rowHeight={62}
        columns={columns}
        pageSizeOptions={[5, 10, 20, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        onRowClick={params => setOpenDrawer(params.row)}
      />

      <SwipeableDrawer open={openDrawer} setOpen={setOpenDrawer} anchor='bottom' title={drawerTitle} actions={actions}>
        {children}
      </SwipeableDrawer>
    </Card>
  ) : null
}

export default ManageRequestsList
