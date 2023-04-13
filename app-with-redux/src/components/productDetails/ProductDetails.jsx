import { useEffect, useReducer, useState } from "react";
import './productDetails.css'
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "@mui/material";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

/**
 * 
 */
const ProductDetails = () => {
    const product = useSelector(state => state.product.product)
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        if (product) {
            console.log(product);
        }
    }, [product])

    return (
        <>
            <div className="product-details">
                <div className="product-details-container">
                    <Card sx={{ maxWidth: "100vh" }} className="card-details">
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={product.title}
                            subheader={
                                <Button>{"$ " + product.price}</Button>
                            }
                        />
                        <div className="product-details-image-container">
<img src={product.image} alt="" className="image" />
                        
                        </div>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button >Add to cart</Button>

                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                           
                                <Typography paragraph>
                                  {product.description}
                                </Typography>
                             
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            </div>

        </>
    );
}


export default ProductDetails;