import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TwoButtons({text1, text2, url1, url2}) {
    return (
        <Stack spacing={2} direction="row">
            <Button href={url1} variant="contained" size="large">{text1}</Button>
            <Button href={url2} variant="contained" size="large">{text2}</Button>
        </Stack>
    )
}
