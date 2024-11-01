// ** React Imoprt
import { Fragment } from 'react'

// ** MUI Imports
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'
import ScrollBar from 'react-perfect-scrollbar'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

const ReceivableReportList = ({ data }: { data: ReceivablesReportType[] }) => {
  // ** Hook
  const { lc } = useLang()

  return (
    <ScrollBar>
      <Stack>
        <List sx={{ py: 0 }}>
          {data.map(item => (
            <Fragment key={item.id}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                  primary={
                    <Typography
                      sx={{
                        color: 'text.primary',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      component='span'
                      variant='body2'
                    >
                      <Box sx={{ display: 'flex', gap: 2, fontWeight: 'bold' }}>
                        <Translations text={item.company} />
                        -
                        <Translations text={item.status} />
                      </Box>
                      <span>{lc.formatDate(new Date(item.dueDate))}</span>
                    </Typography>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        component='span'
                        variant='body2'
                        sx={{
                          color: 'text.primary',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          mt: 1,
                          fontWeight: 'bold'
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Translations text='amount' />
                          {item.type && (
                            <>
                              -
                              <Translations text={item.type} />
                            </>
                          )}
                        </Box>
                        <span>{`${lc.formatNumber(item.amountDue, true)}`}</span>
                      </Typography>
                      {item.description && (
                        <Typography
                          component='span'
                          variant='body2'
                          sx={{
                            color: 'text.primary',
                            display: 'block',
                            mt: 1
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  }
                />
              </ListItem>

              <Divider variant='middle' component='li' />
            </Fragment>
          ))}
        </List>
      </Stack>
    </ScrollBar>
  )
}

export default ReceivableReportList
