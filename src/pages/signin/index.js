import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './styles.module.css';
import logo from '../../images/logo_purple_eng.png';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Signin() {
  return (
    <div className={styles.filter}>
      <div className={styles.bgImage}></div>
      <Container maxWidth="xl">
        <Box className={styles.container}>
          <Box className={styles.boxLogo}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Box>
          <Typography
            mt={2}
            mb={2}
            className={styles.title}
            variant="subtitle"
            component="h2"
          >
            Log Into Your Account
          </Typography>
          <Box className={styles.inputWrapper}>
            <Input
              className={styles.email}
              placeholder="Email"
              variant="standard"
            />
            <Input
              className={styles.psw}
              placeholder="Password"
              variant="standard"
            />
          </Box>
          <Button className={styles.buttonPr} variant="contained">
            Sign up
          </Button>
          <Link className={`container ${styles.forgotPsw}`}>
            Forgot password?
          </Link>
        </Box>
      </Container>
    </div>
  );
}
