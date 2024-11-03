import { useState } from 'react'

// ** Mui Components Import
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

// ** Custom Components Import
import RequestDetailCard from 'src/views/pages/requests/requestDetailCard'
import ManageLeaveRequestActions from './manageLeaveRequestActions'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

// ** Fake Data Import
import { fakeData } from 'src/@fake-data/data'

type ManageLeaveRequestProps = {
  reqData: RequestsType | null
  onAcceptRequest: () => void
  onRejectRequest: () => void
}

const ManageRequestItem = ({ reqData, onAcceptRequest, onRejectRequest }: ManageLeaveRequestProps) => {
  const [users] = useState(fakeData.users)
  const { lc } = useLang()

  if (!reqData) return null

  const applicantData = users.find(user => user.id === reqData?.userId)

  return (
    <Stack sx={{ flex: 1 }}>
      <Stack flex={1}>
        <RequestDetailCard
          userName={applicantData!.name}
          date={lc.formatDate(reqData.createdDate)}
          detail={reqData.details}
          actions={<ManageLeaveRequestActions onAccept={onAcceptRequest} onReject={onRejectRequest} />}
        />
        <Divider sx={{ py: 2 }} />
        <Stack spacing={4}>
          {reqData.response?.map(res => {
            const respondentData = users.find(user => user.id === res.reponseBy)

            return (
              <RequestDetailCard
                key={res.id}
                userName={respondentData!.name}
                date={lc.formatDate(res.responseDate)}
                detail={res.responseDetails}
                anchor={respondentData!.id === reqData.userId ? 'right' : 'left'}
              />
            )
          })}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ManageRequestItem
