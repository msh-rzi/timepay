import { useState } from 'react'

// ** Mui Components Import
import IconButton from '@mui/material/IconButton'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Import
import IconifyIcon from 'src/@core/components/icon'
import Translations from 'src/layouts/components/Translations'

type ManageLeaveRequestActionsProps = {
  onAccept: () => void
  onReject: () => void
}

const ManageLeaveRequestActions = ({ onAccept, onReject }: ManageLeaveRequestActionsProps) => {
  const [selected, setSelected] = useState<'like' | 'dislike' | null>(null)

  const onAcceptClick = () => {
    setSelected('like')
    onAccept()
  }

  const onRejectClick = () => {
    setSelected('dislike')
    onReject()
  }

  const reqCardActions = (
    <FormGroup sx={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
      <FormControlLabel
        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
        control={
          <IconButton onClick={onAcceptClick}>
            <IconifyIcon icon={selected === 'like' ? 'tabler:thumb-up-filled' : 'tabler:thumb-up'} />
          </IconButton>
        }
        label={<Translations text='approve' />}
      />
      <FormControlLabel
        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
        control={
          <IconButton onClick={onRejectClick}>
            <IconifyIcon icon={selected === 'dislike' ? 'tabler:thumb-down-filled' : 'tabler:thumb-down'} />
          </IconButton>
        }
        label={<Translations text='reject' />}
      />
    </FormGroup>
  )

  return reqCardActions
}

export default ManageLeaveRequestActions
