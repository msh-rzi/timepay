// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const adminNavigation = (): VerticalNavItemsType => [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    path: '/admin/dashboard',
    action: 'read',
    subject: 'Dashboard'
  },
  {
    title: 'User Management',
    icon: 'mdi-account-multiple',
    action: 'manage',
    subject: 'User',
    children: [
      {
        title: 'User List',
        path: '/admin/users',
        action: 'read',
        subject: 'User'
      },
      {
        title: 'Add New User',
        path: '/admin/users/new',
        action: 'create',
        subject: 'User'
      },
      {
        title: 'Edit User Profile',
        path: '/admin/users/edit',
        action: 'update',
        subject: 'User'
      },
      {
        title: 'Disable/Delete User',
        path: '/admin/users/delete',
        action: 'delete',
        subject: 'User'
      }
    ]
  },
  {
    title: 'Request Management',
    icon: 'mdi-file-document',
    action: 'manage',
    subject: 'Request',
    children: [
      {
        title: 'Leave Requests',
        path: '/admin/requests/leave',
        action: 'read',
        subject: 'LeaveRequest'
      },
      {
        title: 'Salary Requests',
        path: '/admin/requests/salary',
        action: 'read',
        subject: 'SalaryRequest'
      }
    ]
  },
  {
    title: 'Attendance Reports',
    icon: 'mdi-calendar-check',
    path: '/admin/reports/attendance',
    action: 'read',
    subject: 'Attendance'
  },
  {
    title: 'Financial Management',
    icon: 'mdi-currency-usd',
    action: 'manage',
    subject: 'Finance',
    children: [
      {
        title: 'Salaries Paid',
        path: '/admin/finance/salaries',
        action: 'read',
        subject: 'Finance'
      },
      {
        title: 'Edit Salaries',
        path: '/admin/finance/edit-salary',
        action: 'update',
        subject: 'Finance'
      }
    ]
  },
  {
    title: 'Reports & Analytics',
    icon: 'mdi-chart-line',
    action: 'read',
    subject: 'Reports',
    children: [
      {
        title: 'Working Hours Report',
        path: '/admin/reports/hours',
        action: 'read',
        subject: 'WorkHours'
      },
      {
        title: 'Leave Reports',
        path: '/admin/reports/leave',
        action: 'read',
        subject: 'LeaveReport'
      }
    ]
  },
  {
    title: 'System Settings',
    icon: 'mdi-cog',
    action: 'manage',
    subject: 'Settings',
    children: [
      {
        title: 'Working Hours Rules',
        path: '/admin/settings/work-hours',
        action: 'update',
        subject: 'WorkHoursSettings'
      },
      {
        title: 'Leave Rules',
        path: '/admin/settings/leave',
        action: 'update',
        subject: 'LeaveSettings'
      },
      {
        title: 'Financial Settings',
        path: '/admin/settings/finance',
        action: 'update',
        subject: 'FinanceSettings'
      }
    ]
  },
  {
    title: 'Access Management',
    icon: 'mdi-lock',
    path: '/admin/access',
    action: 'manage',
    subject: 'AccessControl'
  },
  {
    title: 'Support & Communication',
    icon: 'mdi-message-text',
    path: '/admin/support',
    action: 'manage',
    subject: 'Support'
  }
]

export default adminNavigation
