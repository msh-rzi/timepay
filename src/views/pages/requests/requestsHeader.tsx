//  ** React
import React, { useState } from 'react'

// ** Mui Import
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'

// ** Component Import
import Translations from 'src/layouts/components/Translations'
import SwipeableDrawer from 'src/@core/components/drawer/swapeableDrawer'

type RequestsHeaderProps = {
  children: React.ReactNode
  title: string
}

const RequestsHeader = ({ children, title }: RequestsHeaderProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Stack flexDirection='row' justifyContent='space-between'>
      <LoadingButton onClick={() => setOpen(true)} size='small' variant='contained'>
        <Translations text='New Request' />
      </LoadingButton>
      <SwipeableDrawer title={title} anchor='bottom' open={open} setOpen={setOpen}>
        {children}
      </SwipeableDrawer>
    </Stack>
  )
}

export default RequestsHeader
