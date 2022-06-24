import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Country(props) {
   const { name, flags, population, region, capital } = props.country;
   return (
      <Grid item>
         <Link to={`country/${name.common}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: 280, background: 'hsl(209, 23%, 22%)' }}>
               <CardMedia
                  component='img'
                  height='140'
                  image={flags.svg}
                  alt='green iguana'
               />
               <CardContent>
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='div'
                     sx={{ color: 'hsl(0, 0%, 100%)', fontWeight: 800 }}
                  >
                     {name.common}
                  </Typography>
                  <div>
                     <Typography
                        variant='body1'
                        component='div'
                        color='warning'
                        sx={{ color: 'hsl(0, 0%, 100%)', fontWeight: 600 }}
                     >
                        Population:{' '}
                        <span style={{ fontWeight: 300 }}>{population}</span>
                     </Typography>
                     <Typography
                        variant='body1'
                        component='div'
                        color='warning'
                        sx={{ color: 'hsl(0, 0%, 100%)', fontWeight: 600 }}
                     >
                        Region:{' '}
                        <span style={{ fontWeight: 300 }}>{region}</span>
                     </Typography>
                     <Typography
                        variant='body1'
                        component='div'
                        color='warning'
                        sx={{ color: 'hsl(0, 0%, 100%)', fontWeight: 600 }}
                     >
                        Capital:{' '}
                        <span style={{ fontWeight: 300 }}>{capital}</span>
                     </Typography>
                  </div>
               </CardContent>
            </Card>
         </Link>
      </Grid>
   );
}
