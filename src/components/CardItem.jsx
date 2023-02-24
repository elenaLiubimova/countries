import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CardItem = ({ img, name }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={img} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {name}
        </Typography>
        <Typography variant="body2" component="div">
          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            Population
          </Typography>
          6000000
        </Typography>
        <Typography variant="body2" component="div">
          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            Region
          </Typography>
          Europe
        </Typography>
        <Typography variant="body2" component="div">
          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            Capital
          </Typography>
          Helsinki
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
