import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const GifGridItem = ({ title, url }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia image={url} component='img' height='140' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
