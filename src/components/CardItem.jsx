import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import finland from '../img/finland.svg'

// const CardTitle = styled.h3`
//   margin: 0;
//   font-size: var(--fs-md);
//   font-weight: var(--fw-bold);
// `;

// const CardList = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 1rem 0 0;
// `;

// const CardListItem = styled.li`
//   font-size: var(--fs-sm);
//   line-height: 1.5;
//   font-weight: var(--fw-light);

//   & > b {
//     font-weight: var(--fw-bold);
//   }
// `;

const CardItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia
        sx={{ height: 140 }}
        image={finland}
        title="finland"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Finland
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        {/* <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList> */}
      </CardContent>
    </Card>
  );
};

export default CardItem;
