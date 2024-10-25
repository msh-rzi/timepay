// ** Fake Data (simulate async fetch)
import { fakeData } from 'src/@fake-data/data'
import Requests from 'src/pages/user/requests/requests'

const SalaryRequest = () => {
  return (
    <Requests
      loading={false}
      onSave={() => console.log('first')}
      requestsList={fakeData.requests.filter(req => req.requestType === 'Salary')}
      drawerTitle='salaryNewRequest'
      cardTitle='salaryRequest'
    />
  )
}

export default SalaryRequest
