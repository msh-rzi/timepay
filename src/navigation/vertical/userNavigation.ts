// ** Import Types
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const userNavigation = (): VerticalNavItemsType => [
  {
    title: 'Check-in / Check-out',
    icon: 'mdi-clock-in',
    path: '/user/attendance',
    action: 'read',
    subject: 'Attendance'
  },
  {
    title: 'Reports',
    icon: 'mdi-file-chart',
    action: 'read',
    path: '/user/reports',
    subject: 'WorkReport',
    children: [
      {
        title: 'General Reports',
        path: '/user/reports/general-report',
        action: 'read',
        subject: 'WorkReport'
      },
      {
        title: 'Detailed Reports',
        path: '/user/reports/detailed-report',
        action: 'read',
        subject: 'WorkReport'
      }
    ]
  },
  {
    title: 'Requests',
    icon: 'mdi-file-document',
    action: 'read',
    subject: 'Requests',
    children: [
      {
        title: 'Leave Request',
        path: '/user/requests/leave',
        action: 'read',
        subject: 'LeaveRequest'
      },
      {
        title: 'Salary Request',
        path: '/user/requests/salary',
        action: 'read',
        subject: 'SalaryRequest'
      }
    ]
  }
]

export default userNavigation
