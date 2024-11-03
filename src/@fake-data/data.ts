type fakeDataType = {
  user: UserType
  attendance: AttendanceType
  requests: RequestsType[]
  tasks: TasksType[]
  generalReportDetails: GeneralReportDetailsType
  detailedReportList: DetailedReportType[]
  receivablesReport: ReceivablesReportType[]
  users: UserType[]
  roles: RoleType[]
  positions: PositionType[]
  approvalType: ApprovalType[]
}

export const fakeData: fakeDataType = {
  user: {
    id: 1,
    name: 'مهدی رضایی',
    email: 'Mehdi.rezaei879@gmail.com',
    role: 'Mason',
    position: 'Super Admin',
    status: 'Active',
    phone: '09164325523',
    startDate: '2022-01-15',
    salary: {
      daily: 350,
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
      userId: 1,
      title: ' مرخصی',
      createdDate: new Date('2024-10-01'),
      status: 'Verified',
      reviewDate: null,
      details: ' برای ۵ روز مرخصی سالانه از تاریخ 2024-10-15',
      type: 'Leave',
      response: [
        {
          id: 1,
          userId: 1,
          reponseBy: 2,
          requestId: 1,
          responseDetails: 'مرخصی دریافت شد',
          responseDate: new Date('2024-10-05')
        }
      ]
    },
    {
      id: 2,
      userId: 2,
      title: ' مرخصی استعلاجی',
      createdDate: new Date('2024-10-05'),
      status: 'Pending',
      reviewDate: null,
      details: ' برای ۳ روز مرخصی استعلاجی از تاریخ 2024-10-20',
      type: 'Leave',
      response: [
        {
          id: 1,
          userId: 2,
          reponseBy: 1,
          requestId: 1,
          responseDetails: 'مرخصی ات زیاد شده است',
          responseDate: new Date('2024-10-05')
        },
        {
          id: 2,
          userId: 2,
          reponseBy: 2,
          requestId: 1,
          responseDetails: 'مجبورم ',
          responseDate: new Date('2024-10-05')
        },
        {
          id: 3,
          userId: 2,
          reponseBy: 1,
          requestId: 1,
          responseDetails: 'باشه ',
          responseDate: new Date('2024-10-05')
        },
        {
          id: 4,
          userId: 2,
          reponseBy: 2,
          requestId: 1,
          responseDetails: 'مجبورم ',
          responseDate: new Date('2024-10-05')
        },
        {
          id: 5,
          userId: 2,
          reponseBy: 1,
          requestId: 1,
          responseDetails: 'باشه ',
          responseDate: new Date('2024-10-05')
        }
      ]
    },
    {
      id: 3,
      userId: 3,
      title: ' مرخصی سالانه',
      createdDate: new Date('2024-10-08'),
      status: 'Verified',
      reviewDate: new Date('2024-10-10'),
      details: ' برای ۷ روز مرخصی سالانه از تاریخ 2024-11-01',
      type: 'Leave'
    },
    {
      id: 4,
      userId: 4,
      title: ' مرخصی عید',
      createdDate: new Date('2024-11-01'),
      status: 'Pending',
      reviewDate: null,
      details: ' برای ۵ روز مرخصی در ایام عید',
      type: 'Leave'
    },
    {
      id: 5,
      userId: 5,
      title: ' مرخصی برای سفر',
      createdDate: new Date('2024-09-15'),
      status: 'Rejected',
      reviewDate: new Date('2024-09-20'),
      details: ' برای ۱۰ روز مرخصی به دلیل سفر کاری',
      type: 'Leave'
    },
    {
      id: 6,
      userId: 6,
      title: ' مرخصی تابستانی',
      createdDate: new Date('2024-06-01'),
      status: 'Verified',
      reviewDate: new Date('2024-06-05'),
      details: ' برای ۱۵ روز مرخصی تابستانی',
      type: 'Leave'
    },
    {
      id: 7,
      userId: 7,
      title: ' مرخصی برای مطالعه',
      createdDate: new Date('2024-10-12'),
      status: 'Pending',
      reviewDate: null,
      details: ' برای ۲۰ روز مرخصی برای مطالعه',
      type: 'Leave'
    },
    {
      id: 8,
      userId: 8,
      title: ' مرخصی برای مراسم',
      createdDate: new Date('2024-10-18'),
      status: 'Pending',
      reviewDate: null,
      details: ' برای ۳ روز مرخصی به خاطر مراسم خانوادگی',
      type: 'Leave'
    },
    {
      id: 9,
      userId: 9,
      title: ' مرخصی به خاطر بیماری',
      createdDate: new Date('2024-09-25'),
      status: 'Verified',
      reviewDate: new Date('2024-09-30'),
      details: ' مرخصی به خاطر بیماری',
      type: 'Leave'
    },
    {
      id: 10,
      userId: 10,
      title: ' مرخصی برای مرگ عزیز',
      createdDate: new Date('2024-11-02'),
      status: 'Pending',
      reviewDate: null,
      details: ' برای ۵ روز مرخصی به خاطر مرگ عزیز',
      type: 'Leave'
    },

    // Salary Requests
    {
      id: 11,
      userId: 1,
      title: 'تعدیل حقوق',
      createdDate: new Date('2024-09-25'),
      status: 'Verified',
      reviewDate: new Date('2024-09-30'),
      details: ' تعدیل حقوق بر اساس ارزیابی عملکرد',
      type: 'Salary'
    },
    {
      id: 12,
      userId: 2,
      title: ' افزایش حقوق',
      createdDate: new Date('2024-08-20'),
      status: 'Pending',
      reviewDate: null,
      details: ' افزایش حقوق بر اساس تجربه کار',
      type: 'Salary'
    },
    {
      id: 13,
      userId: 3,
      title: ' پاداش عملکرد',
      createdDate: new Date('2024-10-01'),
      status: 'Verified',
      reviewDate: new Date('2024-10-05'),
      details: ' پاداش به خاطر عملکرد فوق العاده',
      type: 'Salary'
    },
    {
      id: 14,
      userId: 4,
      title: ' پاداش تیمی',
      createdDate: new Date('2024-10-15'),
      status: 'Rejected',
      reviewDate: new Date('2024-10-20'),
      details: ' پاداش به خاطر پروژه تیمی',
      type: 'Salary'
    },
    {
      id: 15,
      userId: 5,
      title: ' اصلاح حقوق',
      createdDate: new Date('2024-09-10'),
      status: 'Pending',
      reviewDate: null,
      details: ' اصلاح حقوق بر اساس قرارداد جدید',
      type: 'Salary'
    },
    {
      id: 16,
      userId: 6,
      title: ' پاداش ماهانه',
      createdDate: new Date('2024-07-15'),
      status: 'Verified',
      reviewDate: new Date('2024-07-20'),
      details: ' پاداش براساس عملکرد ماهانه',
      type: 'Salary'
    },
    {
      id: 17,
      userId: 7,
      title: ' بررسی حقوق',
      createdDate: new Date('2024-10-10'),
      status: 'Pending',
      reviewDate: null,
      details: ' بررسی حقوق بر اساس خطا در پرداخت',
      type: 'Salary'
    },
    {
      id: 18,
      userId: 8,
      title: ' پاداش سالانه',
      createdDate: new Date('2024-10-12'),
      status: 'Verified',
      reviewDate: new Date('2024-10-15'),
      details: ' پاداش سالانه به خاطر عملکرد خوب',
      type: 'Salary'
    },
    {
      id: 19,
      userId: 9,
      title: ' اضافه کاری',
      createdDate: new Date('2024-11-01'),
      status: 'Pending',
      reviewDate: null,
      details: ' برای پرداخت اضافه کاری',
      type: 'Salary'
    },
    {
      id: 20,
      userId: 10,
      title: ' تسویه حساب',
      createdDate: new Date('2024-10-20'),
      status: 'Verified',
      reviewDate: new Date('2024-10-22'),
      details: ' برای تسویه حساب نهایی',
      type: 'Salary'
    },

    // Attendance Requests
    {
      id: 21,
      userId: 1,
      title: ' ورود و خروج',
      createdDate: new Date('2024-10-10'),
      status: 'Pending',
      reviewDate: null,
      details: ' اصلاح ورود و خروج در تاریخ 2024-10-10',
      type: 'Attendance'
    },
    {
      id: 22,
      userId: 2,
      title: ' اصلاح ساعت ورود',
      createdDate: new Date('2024-10-12'),
      status: 'Verified',
      reviewDate: new Date('2024-10-15'),
      details: ' اصلاح ساعت ورود به دلیل خطای سیستمی',
      type: 'Attendance'
    },
    {
      id: 23,
      userId: 3,
      title: ' اصلاح ساعت خروج',
      createdDate: new Date('2024-09-05'),
      status: 'Rejected',
      reviewDate: new Date('2024-09-10'),
      details: ' اصلاح ساعت خروج به دلیل عدم حضور',
      type: 'Attendance'
    },
    {
      id: 24,
      userId: 4,
      title: ' ورود به جلسه',
      createdDate: new Date('2024-09-20'),
      status: 'Pending',
      reviewDate: null,
      details: ' ورود به جلسه در تاریخ 2024-09-22',
      type: 'Attendance'
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
  receivablesReport: [
    {
      id: 1,
      userId: 1,
      company: 'شرکت روماک',
      amountDue: 1200,
      currency: 'USD',
      dueDate: '2024-10-30',
      status: 'Pending',
      description:
        'Invoice for project initiation and materials.Invoice for project initiation and materials.Invoice for project initiation and materials.Invoice for project initiation and materials.',
      type: 'Cash'
    },
    {
      id: 2,
      userId: 1,
      company: 'شرکت آپادانا',
      amountDue: 800,
      currency: 'IRR',
      dueDate: '2024-11-15',
      status: 'Rejected',
      description: 'Payment for additional project resources.'
    },
    {
      id: 3,
      userId: 1,
      company: 'پروژه شخصی',
      amountDue: 150000000,
      currency: 'USD',
      dueDate: '2024-11-01',
      status: 'Verified',
      description: 'Final payment for completed personal project.',
      type: 'Bank Transfer'
    },
    {
      id: 4,
      userId: 1,
      company: 'شرکت روماک',
      amountDue: 500,
      currency: 'USD',
      dueDate: '2024-10-25',
      status: 'Pending'
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
  ],
  roles: [
    {
      id: 1,
      name: 'Mason'
    },
    {
      id: 2,
      name: 'General Laborer'
    }
  ],
  positions: [
    {
      id: 1,
      name: 'Super Admin'
    },
    {
      id: 2,
      name: 'Admin'
    },
    {
      id: 3,
      name: 'User'
    }
  ],
  users: [
    {
      id: 1,
      name: 'مهدی رضایی',
      email: 'mehdi.rezaei879@gmail.com',
      phone: '09123456789',
      role: 'Super Admin',
      position: 'Field Labor',
      startDate: '2022-01-15',
      status: 'Active',
      salary: {
        daily: 350,
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
    {
      id: 2,
      name: 'سارا احمدی',
      email: 'sara.ahmadi@gmail.com',
      phone: '09119876543',
      role: 'Admin',
      position: 'Manager',
      startDate: '2021-09-01',
      status: 'Active',
      salary: {
        daily: 350,
        total: 8000,
        received: 6000,
        remaining: 2000
      },
      leaveBalance: {
        total: 20,
        used: 5,
        remaining: 15
      }
    },
    {
      id: 3,
      name: 'علی حسینی',
      email: 'ali.hossini@gmail.com',
      phone: '09129871234',
      role: 'User',
      position: 'Engineer',
      startDate: '2023-05-10',
      status: 'Active',
      salary: {
        daily: 350,
        total: 6000,
        received: 3000,
        remaining: 3000
      },
      leaveBalance: {
        total: 25,
        used: 5,
        remaining: 20
      }
    },
    {
      id: 4,
      name: 'رضا قاسمی',
      email: 'reza.ghasemi@gmail.com',
      phone: '09127654321',
      role: 'Admin',
      position: 'Mason',
      startDate: '2020-03-15',
      status: 'Active',
      salary: {
        daily: 350,
        total: 10000,
        received: 8000,
        remaining: 2000
      },
      leaveBalance: {
        total: 30,
        used: 12,
        remaining: 18
      }
    },
    {
      id: 5,
      name: 'مینا توکلی',
      email: 'mina.tavakoli@gmail.com',
      phone: '09121234567',
      role: 'User',
      position: 'General Laborer',
      startDate: '2021-07-20',
      status: 'Active',
      salary: {
        daily: 350,
        total: 9000,
        received: 7000,
        remaining: 2000
      },
      leaveBalance: {
        total: 20,
        used: 3,
        remaining: 17
      }
    },
    {
      id: 6,
      name: 'حسین کریمی',
      email: 'hossein.karimi@gmail.com',
      phone: '09128888888',
      role: 'Admin',
      position: 'Supervisor',
      startDate: '2019-02-12',
      status: 'Active',
      salary: {
        daily: 400,
        total: 12000,
        received: 10000,
        remaining: 2000
      },
      leaveBalance: {
        total: 25,
        used: 15,
        remaining: 10
      }
    },
    {
      id: 7,
      name: 'فاطمه نظری',
      email: 'fatemeh.nazari@gmail.com',
      phone: '09125553344',
      role: 'User',
      position: 'Architect',
      startDate: '2022-04-23',
      status: 'Active',
      salary: {
        daily: 370,
        total: 6000,
        received: 3500,
        remaining: 2500
      },
      leaveBalance: {
        total: 28,
        used: 8,
        remaining: 20
      }
    },
    {
      id: 8,
      name: 'محمد نوری',
      email: 'mohammad.noori@gmail.com',
      phone: '09124445566',
      role: 'User',
      position: 'Project Manager',
      startDate: '2021-08-10',
      status: 'Inactive',
      salary: {
        daily: 500,
        total: 15000,
        received: 12000,
        remaining: 3000
      },
      leaveBalance: {
        total: 35,
        used: 25,
        remaining: 10
      }
    },
    {
      id: 9,
      name: 'زهرا باقری',
      email: 'zahra.bagheri@gmail.com',
      phone: '09127778899',
      role: 'User',
      position: 'Electrician',
      startDate: '2020-11-25',
      status: 'Active',
      salary: {
        daily: 380,
        total: 9000,
        received: 7500,
        remaining: 1500
      },
      leaveBalance: {
        total: 30,
        used: 10,
        remaining: 20
      }
    },
    {
      id: 10,
      name: 'رضا جباری',
      email: 'reza.jabbari@gmail.com',
      phone: '09123332211',
      role: 'User',
      position: 'Plumber',
      startDate: '2023-01-18',
      status: 'Active',
      salary: {
        daily: 360,
        total: 7000,
        received: 4000,
        remaining: 3000
      },
      leaveBalance: {
        total: 20,
        used: 7,
        remaining: 13
      }
    },
    {
      id: 11,
      name: 'مریم مرادی',
      email: 'maryam.moradi@gmail.com',
      phone: '09120001122',
      role: 'Super Admin',
      position: 'Safety Officer',
      startDate: '2022-06-14',
      status: 'Active',
      salary: {
        daily: 450,
        total: 11000,
        received: 9000,
        remaining: 2000
      },
      leaveBalance: {
        total: 25,
        used: 10,
        remaining: 15
      }
    },
    {
      id: 12,
      name: 'علی رضاپور',
      email: 'ali.rezapour@gmail.com',
      phone: '09127889911',
      role: 'Admin',
      position: 'Welder',
      startDate: '2021-03-10',
      status: 'Active',
      salary: {
        daily: 370,
        total: 13000,
        received: 11000,
        remaining: 2000
      },
      leaveBalance: {
        total: 30,
        used: 18,
        remaining: 12
      }
    },
    {
      id: 13,
      name: 'نرگس بهاری',
      email: 'narges.bahari@gmail.com',
      phone: '09123334455',
      role: 'User',
      position: 'Civil Engineer',
      startDate: '2020-09-20',
      status: 'Active',
      salary: {
        daily: 390,
        total: 8000,
        received: 5000,
        remaining: 3000
      },
      leaveBalance: {
        total: 22,
        used: 7,
        remaining: 15
      }
    },
    {
      id: 14,
      name: 'حسین جعفری',
      email: 'hossein.jafari@gmail.com',
      phone: '09121230000',
      role: 'User',
      position: 'Laborer',
      startDate: '2018-05-30',
      status: 'Inactive',
      salary: {
        daily: 340,
        total: 7000,
        received: 7000,
        remaining: 0
      },
      leaveBalance: {
        total: 30,
        used: 30,
        remaining: 0
      }
    },
    {
      id: 15,
      name: 'پروین امینی',
      email: 'parvin.amini@gmail.com',
      phone: '09127778822',
      role: 'User',
      position: 'Architect',
      startDate: '2023-03-25',
      status: 'Active',
      salary: {
        daily: 380,
        total: 6000,
        received: 2000,
        remaining: 4000
      },
      leaveBalance: {
        total: 25,
        used: 5,
        remaining: 20
      }
    }
  ],
  approvalType: ['Pending', 'Rejected', 'Verified']
}
