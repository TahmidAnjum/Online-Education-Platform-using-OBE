import { Grid } from '@mui/material';

const img = import('../../assets/images/pexels-photo-1557251.jpeg');



const Test = () =>
{
    return (
        <Grid sx={{
            backgroundImage: img,//'url(https://source.unsplash.com/random)',
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}/>
    )
}

export default Test;