// ** React Imoprt
import { Fragment } from 'react'

// ** MUI Imports
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'
import ScrollBar from 'react-perfect-scrollbar'

// ** Fake Data
import { fakeData } from 'src/@fake-data/data'

// ** Hooks Import
import useLang from 'src/hooks/useLang'

const DetailedReportList = () => {
  // ** Hook
  const { lc } = useLang()

  return (
    <ScrollBar>
      <Stack>
        <List>
          {fakeData.detailedReportList.map(item => (
            <Fragment key={item.id}>
              <ListItemButton sx={{ py: 1 }}>
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
                        <Translations text={item.wage} />
                      </Box>
                      <span>{lc.to(new Date(item.date))}</span>
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component='span'
                      variant='body2'
                      sx={{
                        color: 'text.primary',
                        display: 'inline',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        mt: 1
                      }}
                    >
                      {item.description}
                    </Typography>
                  }
                />
              </ListItemButton>
              <Divider variant='middle' component='li' />
            </Fragment>
          ))}
        </List>
      </Stack>
    </ScrollBar>
  )
}

export default DetailedReportList
