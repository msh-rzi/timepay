// ** Fake Data (simulate async fetch)
import { fakeData } from 'src/@fake-data/data'
import Requests from 'src/pages/user/requests/requests'

const LeaveRequest = () => {
  return (
    <Requests
      loading={false}
      requestsList={fakeData.requests.filter(req => req.requestType === 'Leave')}
      onSave={() => console.log('first')}
      drawerTitle='leaveNewRequest'
      cardTitle='leaveRequest'
    />
  )
}

export default LeaveRequest
