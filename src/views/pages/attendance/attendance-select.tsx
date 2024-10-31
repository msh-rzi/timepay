// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Fake Data
import { fakeData } from 'src/@fake-data/data'

type AsyncAutoCompleteProps = {
  onTaskChange: (newValue: TasksType) => void
  disabled: boolean
}

const AttendanceSelect = ({ onTaskChange, disabled }: AsyncAutoCompleteProps) => {
  const [open, setOpen] = useState(false)
  const [taskList] = useState<TasksType[]>(fakeData.tasks)
  const [loading] = useState(false)

  const handleOpen = () => {
    setOpen(true)

    // ** emulate async request
    // setLoading(true)
    // new Promise(() => {
    //   setTimeout(() => {
    //     setTasks([...fakeData.tasks])
    //     setLoading(false)
    //   }, 3000)
    // })
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <CustomAutocomplete
      size='small'
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={(e, value) => value && onTaskChange(value)}
      isOptionEqualToValue={(option, value) => option.company === value.company}
      getOptionLabel={option => option.company}
      options={taskList}
      loading={loading}
      disabled={disabled}
      renderInput={params => (
        <TextField
          {...params}
          label={<Translations text='chooseTask' />}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            )
          }}
        />
      )}
    />
  )
}

export default AttendanceSelect
