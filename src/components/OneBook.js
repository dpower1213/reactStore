import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Error from './Error'
import CircularProgress from '@mui/material/CircularProgress';
import useOneBook from '../hooks/useOneBook';
import { useParams } from 'react-router-dom';

const OneBook = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary : theme.palette.primary,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export default function MyOneBook() {
    // get the query params
    const {onebookId} = useParams();
    // use that to look up info on 1 item
    const {onebook, error}= useOneBook(onebookId);

    if(error){
        return(
        <Box sx={{display:"flex", width:'100%', height:"100%", alignItems:'center', justifyItems:'center', alignContent:'center', justifyContent:'center'}}>
            <Error>{error}</Error>
        </Box>)
    }
    if(!onebook){
    return(
        <Box sx={{display:"flex", width:'100%', height:"100%", alignItems:'center', justifyItems:'center', alignContent:'center', justifyContent:'center'}}>
            <CircularProgress/>
        </Box>)
    }
    

  return (
    <Grid container spacing={1} sx={{m:1, pr:2, border: '1px solid', borderRadius:1}}>
    
        <Grid item md={12} sm={12} xs={12}>
            <OneBook sx={{display:"flex"}}>
                <Avatar alt={onebook.img} sx={{height:'30%', width:'30%'}} variant="rounded" src={onebook?.img}/>
            </OneBook>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
            <OneBook sx={{height:'100%', alignContent:"center"}}>
                <Typography variant="subtitle1"><strong>Title:</strong></Typography>
                <Typography variant="body1">{onebook.title}</Typography>
            </OneBook>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
            <OneBook sx={{height:'100%', alignContent:'center'}}>
            <Typography variant="subtitle1"><strong>Author:</strong></Typography>
                <Typography variant="body1">{onebook.author}</Typography>
            </OneBook>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
            <OneBook sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Description:</strong></Typography>
                <Typography variant="body1">{onebook.description}</Typography>
            </OneBook>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
            <OneBook sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Subject:</strong></Typography>
                <Typography variant="body1">{onebook?.subject}</Typography>
            </OneBook>
        </Grid>

    </Grid>
  )
}