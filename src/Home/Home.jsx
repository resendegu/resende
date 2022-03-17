import { Typography, Container, CssBaseline, Grid, Button, Card, CardMedia, CardContent, CardActions, makeStyles, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent, Tooltip } from "@material-ui/core";
import { Email, Facebook, GitHub, Instagram, LinkedIn, Visibility, YouTube } from "@material-ui/icons";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginDialog from "../auth/LoginDialog";
import { useAuth } from "../hooks/useAuth";


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


  

const Home = () => {

    const classes = useStyles();

    const {user} = useAuth();

    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);

    

    const cards = [
        {
            img: 'sistemaEscolar.png', 
            link: 'https://school.grupoprox.com', 
            link2: 'https://github.com/ProXDigital/sistema-escolar-react', 
            title: 'Sistema Escolar', 
            description: 'Um sistema de gestão escolar voltado para cursos livres e escolas de idioma.',
        },
        {
            img: 'chatapp.png', 
            link: 'https://chat.grupoprox.com', 
            link2: 'https://github.com/ProXDigital/chat', 
            title: 'Chat App', 
            description: 'Chat realtime onde clientes podem conversar com agentes online.',
        },
    ]

    const handleContactDialog = () => {
        setOpen(true)
    }

    const handleLoginDialog = () => {
        setLogin(true)
    }

    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            
            <Link onClick={() => setOpen(true)}>Gustavo Resende</Link> 
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return (
        <Fragment>
            {login ? (
                <LoginDialog onClose={() => setLogin(false)} />
            ) : null}
            
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle>Informações de contato</DialogTitle>
                <DialogContent>
                    <DialogContentText>Você pode ver meus trabalhos e falar comigo nesses canais.</DialogContentText>
                    <div className={classes.imgContainer}>
                        <Typography variant="button">
                            <Tooltip title="Github">
                                <a href="https://github.com/resendegu" target={'_blank'} rel="noreferrer">
                                    <GitHub />
                                </a>
                            </Tooltip>
                        </Typography>
                        <Typography variant="button">
                            <Tooltip title="Instagram">
                                <a href="https://instagram.com/resendegu" target={'_blank'} rel="noreferrer">
                                    <Instagram />
                                </a>
                            </Tooltip>
                        </Typography>
                        <Typography variant="button">
                            <Tooltip title="Email">
                                <a href="mailto:gustavo@resende.app" target={'_blank'} rel="noreferrer">
                                    <Email />
                                </a>
                            </Tooltip>
                        </Typography>
                        <Typography variant="button">
                            <Tooltip title="LinkedIn">
                                <a href="https://linkedin.com/in/resendegu" target={'_blank'} rel="noreferrer">
                                    <LinkedIn />
                                </a>
                            </Tooltip>
                        </Typography>
                        <Typography variant="button">
                            <Tooltip title="YouTube">
                                <a href="https://www.youtube.com/channel/UCyNHLQBOCvSRWyRE24OIaSw" target={'_blank'} rel="noreferrer">
                                    <YouTube />
                                </a>
                            </Tooltip>
                        </Typography>
                        <Typography variant="button">
                            <Tooltip title="Facebook">
                                <a href="https://facebook.com/resendegu" target={'_blank'} rel="noreferrer">
                                    <Facebook />
                                </a>
                            </Tooltip>
                        </Typography>
                        
                    </div>
                    

                </DialogContent>
                
                

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    
                    <div className={classes.imgContainer}>
                        <Typography component="img" src="me.jpg" alt="My picture!" gutterBottom className={classes.img} />
                    </div>
                    
                        
                    
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Bem-vindo!
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Eu sou o Resende, e você está no meu portfólio. Ainda é bem simples, mas tem alguns serviços gratuitos que você pode usar!
                    </Typography>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                        <Button variant="contained" color="primary" onClick={handleContactDialog}>
                            Contato
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary" onClick={!user ? handleLoginDialog : () => window.open('/dashboard', '_self')}>
                            {!user ? 'Login' : 'Dashboard'}
                        </Button>
                        </Grid>
                    </Grid>
                    
              
                    </div>
                </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Typography variant="h4" color="textSecondary" gutterBottom>
                    Projetos
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
                            Ver projeto
                            </Button>
                            <Button size="small" color="primary" startIcon={<GitHub />} href={card.link2} target={'_blank'} rel="noreferrer">
                            GitHub
                            </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Isso é tudo!
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Ou será que não...
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
            
        </Fragment>
    );
}
 
export default Home;