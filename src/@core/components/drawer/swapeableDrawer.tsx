/* eslint-disable react/prop-types */
import * as React from 'react'
import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Translations from 'src/layouts/components/Translations'

// Define types for props
type Anchor = 'top' | 'left' | 'bottom' | 'right'

type MuiSwipeableDrawerProps = React.ComponentProps<typeof MuiSwipeableDrawer>
type SwipeableDrawerProps = {
  anchor: Anchor
  children?: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
} & Partial<MuiSwipeableDrawerProps>

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900]
  })
}))

const SwipeableDrawer: React.FC<SwipeableDrawerProps> = ({ anchor, children, open, setOpen, title, ...props }) => {
  const { PaperProps, ...otherProps } = props

  // Toggle the drawer open/close state
  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(isOpen)
  }

  return (
    <MuiSwipeableDrawer
      anchor={anchor}
      open={open}
      swipeAreaWidth={56}
      PaperProps={{
        sx: { py: 6, px: 4, height: '90%', borderRadius: '15px 15px 0 0', ...PaperProps?.sx }
      }}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      {...otherProps}
    >
      <Puller />
      <Stack spacing={4} sx={{ pt: 4, flex: 1 }}>
        {title && (
          <>
            <Typography variant='button'>
              <Translations text={title} />
            </Typography>
            <Divider sx={{ py: 2 }} />
          </>
        )}
        {children}
      </Stack>
    </MuiSwipeableDrawer>
  )
}

export default SwipeableDrawer
