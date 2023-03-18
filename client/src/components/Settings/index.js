import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import history from "../Navigation/history";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SideNav from "../CustomAppBar/sideNav";
import { Container } from "@material-ui/core";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";

import CustomAppBar from "../CustomAppBar";

import "./Settings.css";

const Settings = (props) => {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);

  const { classes } = props;

  onAuthStateChanged(auth, (currUser) => {
    setUser(currUser);
  });

  const onClickLogOut = async () => {
    await signOut(auth);
    history.push("/SignIn");
  };

  // const handleDelete = async () => {
  //   // REQUIRES ADMIN ACCESS - TO BE FIXED
  //   console.log(user.uid);
  //   getAuth()
  //     .deleteUser(user.uid)
  //     .then(() => {
  //       console.log('Account deleted');
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });

  //   history.push('/SignIn');
  // }

  return (
    <>
      <SideNav></SideNav>
      <Container class="container">
        <Paper class="paper">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={0}
              direction="column"
              style={{ minHeight: "100vh" }}
              class="mainMessageContainer"
            >
              <Grid item>
                <Typography variant={"h3"}>Settings</Typography>

                <Button>
                  <Link onClick={() => history.push("/JoinCreateRoom")}>
                    <Typography variant="h6">Leave Room</Typography>
                  </Link>
                </Button>

                <br />

                {/* <Button>
<Link
onClick={() => history.push('/SignIn')}
>
<Typography variant="h6">
Change Password *not implemented*
</Typography>
</Link>
</Button> */}

                <br />

                <Button>
                  <Link onClick={onClickLogOut}>
                    <Typography variant="h6">Sign Out</Typography>
                  </Link>
                </Button>

                <br />

                {/* <Button>
<Link
onClick={() => { setOpen(true) }}
>
<Typography variant="h6">
Delete Account *not implemented*
</Typography>
</Link>
</Button> */}

                {/* <Dialog
open={open}
onClose={() => { setOpen(false) }}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
{"Are you sure you want to delete your account?"}
</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
Deleting will permanently remove your account and all of its data from Roomies App.
</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={() => { setOpen(false) }}>No</Button>
<Button onClick={handleDelete}>Yes</Button>
</DialogActions>
</Dialog> */}
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Settings;
