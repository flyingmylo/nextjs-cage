import { TextField, Container, Box, Snackbar, Alert, Skeleton } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default () => {

  const [content, setContent] = useState('')
  const [answer, setAnswer] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [secretKey, setSecretKey] = useState('')
  const [keyFromUrl, setKeyFromUrl] = useState('')

  const send = () => {

    if (!keyFromUrl && !secretKey) {
      setOpen(true)
      return
    }
    setLoading(true)
    const data = JSON.stringify({
      "apiKey": keyFromUrl || secretKey,
      "sessionId": "3D63D57C-0B52-ABD6-6E2A-07890A8E5704",
      "content": content
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/chat/completions',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then((response) => {
        const { data } = response.data
        setAnswer(data)
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false)
      })

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const handleEnterChange = (event: React.KeyboardEvent<object>) => {
    if (!!content && event.key === 'Enter') {
      event.preventDefault()
      if (loading) return
      send()
    }
  }



  useEffect(() => {
    const _key = window?.location?.search?.slice(5)
    setKeyFromUrl(_key)
  }, [])
  return (
    <Container classes={{
      fixed: 'test-fixed'
    }} sx={{ marginTop: '5vh' }}>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={1000}>
        <Alert severity="warning" sx={{ width: '100%' }}>
          请输入密钥 KEY
        </Alert>
      </Snackbar>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
      }}>
        <TextField
          margin="dense"
          fullWidth
          label="请输入密钥 KEY"
          placeholder='请输入密钥 KEY'
          value={secretKey}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSecretKey(event.target.value);
          }}
        />
        <TextField
          fullWidth
          label="请输入问题"
          margin="dense"
          multiline
          rows={5}
          placeholder="请输入问题"
          value={content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
          onKeyDown={handleEnterChange}
        />

        <LoadingButton classes={{}} sx={{ mt: '20px' }} loading={loading} onClick={send} variant="contained">提交</LoadingButton>
        {
          !!answer && <TextField disabled value={answer} multiline margin="dense" />
        }
        {loading && <Skeleton variant="rounded" height={60} />}

      </Box>
    </Container >
  )
}