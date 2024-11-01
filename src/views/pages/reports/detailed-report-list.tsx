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

const DetailedReportList = ({ data }: { data: DetailedReportType[] }) => {
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
                        <Translations text={item.wage} />
                      </Box>
                      <span>{lc.formatDate(new Date(item.date))}</span>
                    </Typography>
                  }
                  secondary={
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

export default DetailedReportList
