type UserType = {
  id: number // Unique ID for the user
  name: string // User's full name
  email: string // User's email
  role: string // User's role (could be 'Admin', 'Employee', etc.)
  position: string // User's position
  status: 'Active' | 'Inactive'
  phone: string // User's phone number
  startDate: string // Date the user joined the company
  salary: {
    total: number // Total monthly salary
    received: number // Salary already received this month
    remaining: number // Remaining salary to be paid
  }
  leaveBalance: {
    total: number // Total leave days for the year
    used: number // Leave days already used
    remaining: number // Remaining leave days
  }
}

type AttendanceType = {
  currentStatus: {
    hasCheckedIn: boolean // whether the user has checked in today
    checkInTime: string | null // today's check-in time
    checkOutTime: string | null // today's check-out time (null if not checked out yet)
    currentDate: string // today's date,
    wage: 'Daily Wage' | 'Normal' | null
  }
  weeklySummary: {
    totalHoursWorked: string // total hours worked in the current week
    daysWorked: number // number of days worked this week
  }
  monthlySummary: {
    totalHoursWorked: string // total hours worked in the current month
    daysWorked: number // number of days worked this month
  }
}

type TasksType = {
  id: number
  company: string
  dueDate: string
  status: string
  assignedWorkers: number
}

type RequestsType = {
  id: number
  title: string
  requestType: string
  createdDate: string
  status: string
  approvalDate: string | null
  details: string
}

type GeneralReportDetailsType = {
  fromDate: string
  toDate: string
  totalDays: number
  totalLeaves: number
  totalWorkHours: number
  totalSalary: number
  totalReceived: number
  totalRemaining: number
}

type DetailedReportType = {
  id: number
  userId: number
  company: string
  date: string
  checkInTime: string
  checkOutTime: string
  description: string | null
  wage: 'Daily Wage' | 'Normal'
}

type workDetailsType = {
  isDailyWage: boolean
  workType: string
  partTimeHours: string | null
  description: string
}

type ReceivablesReportType = {
  id: number
  userId: number
  company: string
  amountDue: number
  currency: string
  dueDate: string
  status: 'Pending' | 'Verified' | 'Rejected'
  type?: 'Cash' | 'Bank Transfer' | 'Check'
  description?: string
}

type ConstructionRoleType = {
  id: number
  role: string // نقش (مثال: استاد بنا)
  position: string // سمت (مثال: نیروی میدانی)
  description: string // توضیحات (شرح وظایف و مسئولیت‌ها)
}
