"use client"

import React from 'react'
import { md2Theme, md3Theme } from './Mui/client.mjs';
import { ThemeProvider } from '@emotion/react';


const page = () => {
  return (
    <>
      <>
        <ThemeProvider theme={md2Theme}>
        </ThemeProvider>
      </>
    </>
  )
}

export default page