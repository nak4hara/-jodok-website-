import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

export default function RecipeCard({ link, srcImage, title, description }) {
    return (
        <Link
            to={`/recipe/${link}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image={srcImage}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" align='center'>
                            {title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='large' fullWidth>
                        View Recipe
                    </Button>
                </CardActions>
            </Card>
        </Link>
    )
}