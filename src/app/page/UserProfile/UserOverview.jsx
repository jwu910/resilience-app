import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import React from "react";

import { H5 } from "../../component";
import Form from "app/shared/Form";
import * as validations from "app/utils/validationSchemas";
import ProfileImage from "./ProfileImage";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  profileImage: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: "12px auto 8px auto",
  },
}));

const UserStatus = ({ profile, setProfile, view }) => {
  const classes = useStyles();

  const displayName = _.get(profile, "displayName", "");
  const address = _.get(profile, "address", "");

  function updateProfile(e) {
    e.preventDefault();
    profile[e.target.id] = e.target.value;
    setProfile(_.cloneDeep(profile));
  }

  return (
    <Grid container direction="column" justify="center" className={classes.root} spacing={2}>
      <Form
        initialValues={{
          displayName: "",
          address: "",
        }}
        validationSchema={validations.profile}
      >
        <Form.FormContainer>
          <Form.Group>
            <Form.TextField
              disabled={view === "view"}
              fullWidth
              id="displayName"
              label="Display Name"
              name="displayName"
              placeholder="Your name..."
            />
          </Form.Group>
          <Form.Group>
            <Form.TextInput
              disabled={view === "view"}
              fullWidth
              id="address"
              label="Address"
              name="address"
              placeholder="Your address..."
            />
          </Form.Group>
        </Form.FormContainer>
      </Form>

      <ProfileImage classes={classes} profile={profile} setProfile={setProfile} />
      <Grid item container spacing={1} direction="column">
        <Grid item container>
          <H5>Displayname</H5>
        </Grid>
        <Grid item>
          <TextField
            className={`${classes.rootInput} ${classes.input}`}
            id="displayName"
            value={displayName}
            placeholder="your name..."
            variant="outlined"
            disabled={view === "view"}
            onChange={updateProfile}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item container spacing={1} direction="column">
        <Grid item container>
          <H5>Address</H5>
        </Grid>
        <Grid item>
          <TextField
            id="address"
            value={address}
            placeholder="your address..."
            variant="outlined"
            disabled={view === "view"}
            onChange={updateProfile}
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default UserStatus;
