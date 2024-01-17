"use client"

import React from 'react'
import { md2Theme, md3Theme } from './Mui/client.mjs';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material-next';

import MD2Button from '@mui/material/Button';
import MD3Button from '@mui/material-next/Button';

const page = () => {
  return (
    <ThemeProvider theme={md3Theme}>
        <Button variant="filled">Hello World</Button>
  </ThemeProvider>
  )
}

export default page