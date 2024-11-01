// ** Import React
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

// ** Third Party Imports
import Calendar, { CalendarType } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import SwipeableDrawer from 'src/@core/components/drawer/swapeableDrawer'
import Translations from 'src/layouts/components/Translations'

type ValuePiece = Date

const DatePicker = () => {
  // ** State
  const [value, onChange] = useState<ValuePiece>(new Date())
  const [openCal, onChangeOpenCal] = useState(false)

  // ** Hook
  const { lc } = useLang()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'flex-start'
      }}
    >
      <Button
        variant='outlined'
        sx={{ display: 'flex', gap: 2 }}
        size='small'
        onClick={() => onChangeOpenCal(!openCal)}
      >
        <span>{lc.formatDate(value)}</span>
      </Button>

      {openCal && (
        <SwipeableDrawer
          PaperProps={{
            sx: { height: 'fit-content' }
          }}
          title='Choose Date'
          anchor='bottom'
          open={openCal}
          setOpen={onChangeOpenCal}
          onClose={e => e.preventDefault()}
        >
          <Box
            sx={{
              width: '100%',
              '& *': {
                fontFamily:
                  'Public Sans,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
              },
              '.react-calendar': {
                width: '100%'
              },
              '.react-calendar__navigation__arrow': {
                fontSize: '1.5rem'
              },
              '.react-calendar__navigation__label__labelText': {
                fontSize: '1rem'
              },
              '.react-calendar__tile': {
                borderRadius: '10px'
              }
            }}
          >
            <Calendar
              locale={lc.short}
              onChange={value => {
                onChange(value as Date)
              }}
              calendarType={lc.calendarType as CalendarType}
              value={value}
            />

            <Button sx={{ width: '100%', mt: 6 }} variant='contained' onClick={() => onChangeOpenCal(false)}>
              <Translations text='save' />
            </Button>
          </Box>
        </SwipeableDrawer>

        // <Box
        //   ref={setPopperElement}
        //   sx={{
        //     padding: '8px',
        //     backgroundColor: 'white',
        //     boxShadow: 3,
        //     zIndex: 1000,
        //     '& *': {
        //       fontFamily:
        //         'Public Sans,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
        //     }
        //   }}
        //   style={styles.popper}
        //   {...attributes.popper}
        // >
        //   <Calendar
        //     locale={lc.short}
        //     onChange={value => {
        //       onChange(value as Date)
        //     }}
        //     calendarType={lc.calendarType as CalendarType}
        //     value={value}
        //   />
        // </Box>
      )}
    </Box>
  )
}

export default DatePicker
