// ** React Imports
import { useMemo, useState } from 'react'

// ** MUI Components
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Custom Component Import
import SwipeableDrawer from 'src/@core/components/drawer/swapeableDrawer'
import CustomTextField from 'src/@core/components/mui/text-field'
import IconifyIcon from 'src/@core/components/icon'
import Translations from 'src/layouts/components/Translations'
import UserSettings from 'src/views/pages/users/TabUserSettings'

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
  row: UserType
}

// ** Define UsersList Component
const TabUsersList = () => {
  const [data] = useState(fakeData.users)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [value, setValue] = useState<string>('')

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
            {lc.formatDate(new Date(row.startDate))}
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
            {lc.formatNumber(row.salary.total, true)}
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

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const filteredRows = data.reduce((newData: UserType[], user) => {
    if (user.name.toLowerCase().includes(value)) newData.push(user)

    return newData
  }, [])

  const onSaveClick = () => {
    setOpenDrawer(false)
    setSelectedUser(null)
  }

  const editUserAdornment = () => (
    <LoadingButton onClick={onSaveClick} variant='contained'>
      <Translations text='save' />
    </LoadingButton>
  )

  return data ? (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={<Translations text='Users List' />}
        titleTypographyProps={{ sx: { mb: [2, 0], display: 'flex' } }}
        action={<CustomTextField value={value} placeholder='Search' onChange={e => handleFilter(e.target.value)} />}
        sx={{
          py: 4,
          flexDirection: ['row'],
          '& .MuiCardHeader-action': { m: 0 },
          alignItems: ['center']
        }}
      />

      <DataGrid
        pagination
        rows={filteredRows}
        autoHeight
        rowHeight={62}
        columns={columns}
        pageSizeOptions={[5, 10]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />

      <SwipeableDrawer open={openDrawer} setOpen={setOpenDrawer} anchor='bottom' title='Edit User'>
        {selectedUser ? (
          <UserSettings user={selectedUser} bottomAdornment={editUserAdornment()} />
        ) : (
          <Typography>No user selected</Typography>
        )}
      </SwipeableDrawer>
    </Card>
  ) : null
}

export default TabUsersList
