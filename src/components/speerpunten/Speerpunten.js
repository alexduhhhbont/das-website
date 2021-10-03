import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

export default function Speerpunten() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Card>Test</Card>
            </Grid>
            <Grid item xs={3}>
                <Card>Test</Card>
            </Grid>
            <Grid item xs={3}>
                <Card>Test</Card>
            </Grid>
            <Grid item xs={3}>
                <Card>Test</Card>
            </Grid>
        </Grid>
    )
}
