import { Button, TextField } from '@mui/material'


import axios from 'axios'
import { useState } from 'react'
export default () => {

  const [content, setContent] = useState('')
  const send = () => {
    const data = JSON.stringify({
      "apiKey": "test",
      "sessionId": "8d1cb9b0-d535-43a8-b738-4f61b1608579",
      "content": content
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/chat/completions',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <>
      <TextField></TextField>
      <Button variant="contained">Contained</Button>
    </>
  )
}