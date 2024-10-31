// ** React Imports
import { useMemo, useState } from 'react'

// ** MUI Components
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Component Import
import SwipeableDrawer from 'src/@core/components/drawer/swapeableDrawer'

// ** Utils Import
import { fakeData } from 'src/@fake-data/data'
import Translations from 'src/layouts/components/Translations'
import useLang from 'src/hooks/useLang'
import IconifyIcon from 'src/@core/components/icon'
import AccountSettings from 'src/views/pages/users/accountSettings'

const renderHeader = (field: string) => (
  <Typography sx={{ fontWeight: 'bold' }}>
    <Translations text={field} />
  </Typography>
)

interface CellType {
  row: UserType
}

// ** Define UsersList Component
const UsersList = () => {
  const [data] = useState(fakeData.users)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

  const { lc } = useLang()

  // ** Define Columns
  const columns: GridColDef[] = useMemo(
    () => [
      { flex: 0.1, field: 'name', minWidth: 150, headerName: 'Name', renderHeader: ({ field }) => renderHeader(field) },
      {
        flex: 0.1,
        field: 'phone',
        minWidth: 130,
        headerName: 'Phone',
        renderHeader: ({ field }) => renderHeader(field)
      },
      {
        flex: 0.1,
        field: 'position',
        minWidth: 120,
        headerName: 'Position',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => <Translations text={row.position} />
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
        field: 'startDate',
        minWidth: 220,
        headerName: 'Start Date',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
            {lc.to(new Date(row.startDate))}
          </Typography>
        )
      },
      {
        field: 'totalSalary',
        minWidth: 150,
        headerName: 'Total Salary',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <Typography sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
            {lc.convertNumber(row.salary.total, true)}
          </Typography>
        )
      },
      {
        field: 'edit',
        minWidth: 100,
        headerName: 'Edit',
        renderHeader: ({ field }) => renderHeader(field),
        renderCell: ({ row }: CellType) => (
          <IconButton
            size='small'
            color='primary'
            onClick={() => {
              setSelectedUser(row)
              setOpenDrawer(true)
            }}
          >
            <IconifyIcon icon='tabler:pencil' />
          </IconButton>
        )
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return data ? (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={<Translations text='Users List' />}
        titleTypographyProps={{ sx: { mb: [2, 0], display: 'flex' } }}
        action={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Tooltip title={<Translations text='search' />}>
              <IconButton
                color='primary'
                onClick={() => {
                  setSelectedUser(null)
                  setOpenDrawer(true)
                }}
              >
                <IconifyIcon icon='tabler:search' />
              </IconButton>
            </Tooltip>
            <Tooltip title={<Translations text='add' />}>
              <IconButton
                color='primary'
                onClick={() => {
                  setSelectedUser(null)
                  setOpenDrawer(true)
                }}
              >
                <IconifyIcon icon='tabler:plus' />
              </IconButton>
            </Tooltip>
          </div>
        }
        sx={{
          py: 4,
          flexDirection: ['row'],
          '& .MuiCardHeader-action': { m: 0 },
          alignItems: ['center']
        }}
      />

      <DataGrid
        pagination
        rows={data}
        rowHeight={62}
        columns={columns}
        pageSizeOptions={[5, 10]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />

      <SwipeableDrawer open={openDrawer} setOpen={setOpenDrawer} anchor='bottom' title='Edit User'>
        {selectedUser ? <AccountSettings user={selectedUser} /> : <Typography>No user selected</Typography>}
      </SwipeableDrawer>
    </Card>
  ) : null
}

export default UsersList
