import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useBook from "../hooks/useGetBooks"

export default function ActionAreaCard() {
  const {book, error} = useBook()
  
  return (
    <>
    {book?.map((b)=>(
        
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            {{height:'100%'}}
            <img src= { b.img } sx={{height:'100%', width:"100%"}} variant="rounded"/>
          
        </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              How do i insert book text here?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))
    }
    </>
  );
}