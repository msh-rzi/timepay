// ** React
import { useState, useEffect, Fragment } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// ** Component Imports
import Translations from 'src/layouts/components/Translations'

type RequestsListProps = {
  list: RequestsType[]
}

const RequestsList = ({ list }: RequestsListProps) => {
  const [data, setData] = useState<RequestsType[]>([]) // initially empty array
  const [loading, setLoading] = useState(true)

  // Simulate fetching data
  useEffect(() => {
    setLoading(true)

    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setData(list) // Set fetched data
      setLoading(false)
    }, 2000) // 2-second delay to simulate loading
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', minHeight: '200px' }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress />
        </Box>
      ) : data.length === 0 ? (
        <Typography variant='body1' sx={{ textAlign: 'center', padding: 2 }}>
          No requests found
        </Typography>
      ) : (
        <List>
          {data.map(item => (
            <Fragment key={item.id}>
              <ListItemButton>
                <ListItemText
                  sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                  primary={
                    <Typography
                      sx={{
                        color: 'text.primary',
                        display: 'inline',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      component='span'
                      variant='body1'
                    >
                      <strong>
                        <Translations text={item.status} />
                      </strong>
                      <strong style={{ margin: '0 4px' }}>-</strong>
                      <span>{item.title}</span>
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
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.details}
                    </Typography>
                  }
                />
              </ListItemButton>
              <Divider variant='middle' component='li' />
            </Fragment>
          ))}
        </List>
      )}
    </Box>
  )
}

export default RequestsList
