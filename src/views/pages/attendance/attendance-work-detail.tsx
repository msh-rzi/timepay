import React, { useState } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'
import Translations from 'src/layouts/components/Translations'
import LoadingButton from '@mui/lab/LoadingButton'

type AttendanceWorkDetailProps = {
  onSave: (data: workDetailsType) => void
}

const AttendanceWorkDetail = ({ onSave }: AttendanceWorkDetailProps) => {
  // ** States
  const [isDailyWage, setIsDailyWage] = useState(false)
  const [workType, setWorkType] = useState('')
  const [partTimeHours, setPartTimeHours] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  // ** Handlers
  const handleDailyWageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDailyWage(event.target.checked)
    setWorkType('') // Reset work type when isDailyWage changes
  }

  const handleWorkTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkType(event.target.value)
  }

  const handlePartTimeHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartTimeHours(event.target.value)
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleSave = () => {
    setLoading(true)

    // ** Logic to save the data
    const workDetails = {
      isDailyWage,
      workType,
      partTimeHours: workType === 'part-time' ? partTimeHours : null,
      description
    }

    onSave(workDetails)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
      <FormControlLabel
        dir='l'
        control={<Checkbox checked={isDailyWage} onChange={handleDailyWageChange} />}
        label={<Translations text='I work as a daily wage' />}
      />

      {isDailyWage && (
        <RadioGroup value={workType} onChange={handleWorkTypeChange}>
          <FormControlLabel value='full-time' control={<Radio />} label={<Translations text='Full Time' />} />
          <FormControlLabel value='part-time' control={<Radio />} label={<Translations text='Part Time' />} />
        </RadioGroup>
      )}

      {isDailyWage && workType === 'part-time' && (
        <TextField
          label={<Translations text='How many hours did you spend?' />}
          variant='outlined'
          value={partTimeHours}
          type='number'
          onChange={handlePartTimeHoursChange}
        />
      )}

      <TextField
        label={<Translations text='Description' />}
        variant='outlined'
        multiline
        rows={3}
        value={description}
        onChange={handleDescriptionChange}
        sx={{ flex: 1 }}
      />

      <LoadingButton loading={loading} variant='contained' color='primary' onClick={handleSave}>
        <Translations text='save' />
      </LoadingButton>
    </Box>
  )
}

export default AttendanceWorkDetail
