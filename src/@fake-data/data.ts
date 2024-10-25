export const fakeData = {
  user: {
    id: 1,
    name: 'مهدی رضایی',
    email: 'Mehdi.rezaei879@gmail.com',
    role: 'Employee',
    position: 'Master',
    startDate: '2022-01-15',
    salary: {
      total: 5000,
      received: 4000,
      remaining: 1000
    },
    leaveBalance: {
      total: 30,
      used: 10,
      remaining: 20
    }
  },
  attendance: {
    currentStatus: {
      hasCheckedIn: false,
      checkInTime: null,
      checkOutTime: null,
      currentDate: '2024-10-19',
      wage: null
    },
    weeklySummary: {
      totalHoursWorked: '40:30',
      daysWorked: 5
    },
    monthlySummary: {
      totalHoursWorked: '160h',
      daysWorked: 20
    }
  },
  requests: [
    {
      id: 1,
      title: 'Leave Request ',
      requestType: 'Leave',
      createdDate: '2024-10-01',
      status: 'Pending',
      approvalDate: null,
      details: 'Request for 5 days of annual leave starting from 2024-10-15'
    },
    {
      id: 2,
      title: 'Salary Adjustment',
      requestType: 'Salary',
      createdDate: '2024-09-25',
      status: 'Approved',
      approvalDate: '2024-09-30',
      details: 'Request for salary adjustment based on performance evaluation.'
    },
    {
      id: 3,
      title: 'Leave Correction',
      requestType: 'Leave',
      createdDate: '2024-09-20',
      status: 'Rejected',
      approvalDate: '2024-09-25',
      details: 'Correction for incorrect check-out time on 2024-09-19.'
    },
    {
      id: 4,
      title: 'Leave Request',
      requestType: 'Leave',
      createdDate: '2024-10-10',
      status: 'Pending',
      approvalDate: null,
      details: 'Request for 2 days sick leave starting from 2024-10-12.'
    },
    {
      id: 5,
      title: 'Bonus Request',
      requestType: 'Salary',
      createdDate: '2024-08-15',
      status: 'Approved',
      approvalDate: '2024-08-20',
      details: 'Request for performance-based bonus for the month of July.'
    }
  ],
  generalReportDetails: {
    fromDate: '2024-10-01',
    toDate: '2024-10-31',
    totalDays: 30,
    totalLeaves: 2,
    totalWorkHours: 160,
    totalSalary: 5000,
    totalReceived: 2000,
    totalRemaining: 3000
  },

  detailedReportList: [
    {
      id: 1,
      userId: 1,
      company: 'شرکت روماک',
      date: '2024-10-19',
      checkInTime: '08:24:00',
      checkOutTime: '17:19:12',
      description: 'کار زیر پله',
      wage: 'Daily Wage'
    },
    {
      id: 2,
      userId: 1,
      company: 'شرکت آپادانا',
      date: '2024-10-20',
      checkInTime: '09:00:00',
      checkOutTime: '18:00:00',
      description: 'آجرنما دیوار حیاط',
      wage: 'Daily Wage'
    },
    {
      id: 3,
      userId: 1,
      company: 'شرکت آپادانا',
      date: '2024-10-21',
      checkInTime: '07:45:00',
      checkOutTime: '16:30:00',
      description: 'ساخت دیوار داخلی',
      wage: 'Daily Wage'
    },
    {
      id: 4,
      userId: 1,
      company: 'شرکت روماک',
      date: '2024-10-22',
      checkInTime: '08:15:00',
      checkOutTime: '17:00:00',
      description: 'کف‌سازی محوطه',
      wage: 'Normal'
    },
    {
      id: 5,
      userId: 1,
      company: 'شرکت آپادانا',
      date: '2024-10-23',
      checkInTime: '08:00:00',
      checkOutTime: '16:45:00',
      description: 'نازک‌کاری سقف',
      wage: 'Daily Wage'
    },
    {
      id: 6,
      userId: 1,
      company: 'پروژه شخصی',
      date: '2024-10-24',
      checkInTime: '08:30:00',
      checkOutTime: '17:30:00',
      description: 'ایجاد باغچه',
      wage: 'Normal'
    },
    {
      id: 7,
      userId: 1,
      company: 'شرکت روماک',
      date: '2024-10-25',
      checkInTime: '09:00:00',
      checkOutTime: '17:45:00',
      description: 'سقف‌سازی آشپزخانه',
      wage: 'Normal'
    },
    {
      id: 8,
      userId: 1,
      company: 'شرکت آپادانا',
      date: '2024-10-26',
      checkInTime: '07:30:00',
      checkOutTime: '16:15:00',
      description: 'نصب پنجره‌ها',
      wage: 'Normal'
    },
    {
      id: 9,
      userId: 1,
      company: 'پروژه شخصی',
      date: '2024-10-27',
      checkInTime: '08:45:00',
      checkOutTime: '17:00:00',
      description: 'تعویض درب ورودی',
      wage: 'Normal'
    },
    {
      id: 10,
      userId: 1,
      company: 'شرکت روماک',
      date: '2024-10-28',
      checkInTime: '08:00:00',
      checkOutTime: '17:30:00',
      description: 'رنگ‌آمیزی دیوار',
      wage: 'Normal'
    }
  ],

  tasks: [
    {
      id: 1,
      company: 'شرکت روماک',
      dueDate: '2024-10-15',
      status: 'Pending',
      assignedWorkers: 3
    },
    {
      id: 2,
      company: 'شرکت آپادانا',
      dueDate: '2024-11-01',
      status: 'Active',
      assignedWorkers: 5
    },
    {
      id: 3,
      company: 'پروژه شخصی',
      dueDate: '2024-12-01',
      status: 'Completed',
      assignedWorkers: 10
    }
  ]
}
