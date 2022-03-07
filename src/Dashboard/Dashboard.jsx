import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { GitHub, Visibility } from "@material-ui/icons";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    img: {
        width: '130px',
        height: '130px',
        borderRadius: '50px',
    },
    imgContainer: {
        width: '100%',
        textAlign: 'center',
    },
  }));


const Dashboard = () => {
    const classes = useStyles();

    const cards = [
        {img: 'meet.png', link: 'https://meet.resende.app', title: 'Video-chamadas', description: 'Crie vídeo-chamdas facilmente. Powered by Jitsi.'}
    ]

    return (
        <Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Typography variant="h4" color="textSecondary" gutterBottom>
                    Serviços
                </Typography>
                <Grid container spacing={4}>
                
                
              
                    {cards.map((card, i) => (
                    <Grid item key={i} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.img}
                            title={card.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                            </Typography>
                            <Typography>
                            {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href={card.link} target={'_blank'} rel="noreferrer" startIcon={<Visibility />}>
                            Acessar serviço
                            </Button>
                            {/* <Button size="small" color="primary" startIcon={<GitHub />} href={card.link2} target={'_blank'} rel="noreferrer">
                            GitHub
                            </Button> */}
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Container>
        </Fragment>
    );
}
 
export default Dashboard;