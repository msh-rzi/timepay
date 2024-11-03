import { useState } from 'react'

// ** Custom Components Import
import ManageRequestsList from 'src/views/pages/requests/manageRequests'
import Translations from 'src/layouts/components/Translations'
import ManageRequestDialog from 'src/views/pages/requests/manageRequestDialog'
import ManageRequestItem from 'src/views/pages/requests/manageLeaveRequest'

// ** Fake Data Import
import { fakeData } from 'src/@fake-data/data'

// ** Mui Components Import
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'

const ManageSalaryRequests = () => {
  const [data] = useState(fakeData.requests.filter(req => req.type === 'Salary'))
  const [reqData, setReqData] = useState<RequestsType | null>(null)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [responseDetails, setResponseDetails] = useState('')

  const handleSaveAndClose = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleResponseSubmit = () => {
    if (reqData) {
      setDialogOpen(false)
      setResponseDetails('')
    }
  }

  const drawerActions = (
    <Stack sx={{ mt: 'auto', flexDirection: 'row', gap: 2 }}>
      <LoadingButton sx={{ flex: 1 }} variant='outlined' onClick={handleSaveAndClose}>
        <Translations text='reply' />
      </LoadingButton>
      <LoadingButton sx={{ flex: 1 }} variant='outlined'>
        <Translations text='saveAndClose' />
      </LoadingButton>
    </Stack>
  )

  const onAcceptRequest = () => {
    console.log('accept request')
  }

  const onRejectRequest = () => {
    console.log('reject request')
  }

  return (
    <>
      <ManageRequestsList
        data={data}
        headerTitle='Salary Requests'
        openDrawer={!!reqData}
        setOpenDrawer={setReqData}
        drawerTitle='Salary Requests'
        actions={drawerActions}
      >
        <ManageRequestItem reqData={reqData} onAcceptRequest={onAcceptRequest} onRejectRequest={onRejectRequest} />
      </ManageRequestsList>

      <ManageRequestDialog
        isDialogOpen={isDialogOpen}
        responseDetails={responseDetails}
        setResponseDetails={setResponseDetails}
        handleDialogClose={handleDialogClose}
        handleResponseSubmit={handleResponseSubmit}
      />
    </>
  )
}

export default ManageSalaryRequests
