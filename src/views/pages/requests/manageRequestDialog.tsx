import { Dispatch, SetStateAction } from 'react'

// ** Custom Components Import
import Translations from 'src/layouts/components/Translations'

// ** Mui Components Import
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'

type ManageRequestDialogProps = {
  isDialogOpen: boolean
  responseDetails: string
  setResponseDetails: Dispatch<SetStateAction<string>>
  handleDialogClose: () => void
  handleResponseSubmit: () => void
}

const ManageRequestDialog = ({
  handleDialogClose,
  handleResponseSubmit,
  isDialogOpen,
  responseDetails,
  setResponseDetails
}: ManageRequestDialogProps) => {
  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle>
        <Translations text='Respond to Request' />
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label={<Translations text='details' />}
          value={responseDetails}
          onChange={e => setResponseDetails(e.target.value)}
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={handleDialogClose} variant='outlined'>
          <Translations text='cancel' />
        </LoadingButton>
        <LoadingButton onClick={handleResponseSubmit} variant='contained'>
          <Translations text='submit' />
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export default ManageRequestDialog
