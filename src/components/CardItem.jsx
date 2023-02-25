import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CardItem = ({ img, population, name, region, capital }) => {
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
          {population}
        </Typography>
        <Typography variant="body2" component="div">
          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            Region
          </Typography>
          {region}
        </Typography>
        <Typography variant="body2" component="div">
          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            Capital
          </Typography>
          {capital}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
