// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import Translations from 'src/layouts/components/Translations'
import { fakeData } from 'src/@fake-data/data'

// ** Hooks
import useLang from 'src/hooks/useLang'

const AccountSettings = ({ user }: { user: UserType }) => {
  // ** State
  const [formData, setFormData] = useState<UserType>(user)
  const [data] = useState(fakeData)

  // ** Hooks
  const { lc } = useLang()

  const handleFormChange = (field: keyof UserType, value: UserType[keyof UserType]) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <form>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            label={<Translations text='name' />}
            value={formData.name}
            onChange={e => handleFormChange('name', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            type='email'
            label={<Translations text='email' />}
            value={formData.email}
            onChange={e => handleFormChange('email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            type='number'
            label={<Translations text='phone' />}
            value={formData.phone}
            onChange={e => handleFormChange('phone', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth disabled label={<Translations text='startDate' />} value={formData.startDate} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            select
            fullWidth
            label={<Translations text='role' />}
            SelectProps={{
              value: formData.role,
              onChange: e => {
                const v = e.target.value as string
                handleFormChange('role', v)
                const p = data.rolesData.find(r => r.role === v)
                handleFormChange('position', p!.position)
              }
            }}
          >
            {data.rolesData.map(option => (
              <MenuItem key={option.id} value={option.role}>
                <Translations text={option.role} />
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            type='number'
            label={<Translations text='total' />}
            value={formData.salary.total}
            onChange={e => {
              setFormData({
                ...formData,
                salary: {
                  ...formData.salary,
                  total: Number(e.target.value)
                }
              })
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ color: 'text.secondary' }} position='start'>
                  {lc.currencySymbol}
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            type='number'
            label={<Translations text='totalLeaves' />}
            value={formData.leaveBalance.total}
            onChange={e => {
              setFormData({
                ...formData,
                leaveBalance: {
                  ...formData.leaveBalance,
                  total: Number(e.target.value)
                }
              })
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6.5)} !important` }}>
          <Button variant='contained' sx={{ mr: 4 }}>
            Save Changes
          </Button>
          <Button type='reset' variant='tonal' color='secondary'>
            Reset
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default AccountSettings
