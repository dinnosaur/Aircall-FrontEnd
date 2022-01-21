import API from '../API';
import { useEffect, useState } from 'react';
import {
  Button,
  Spacer,
  CallFilled,
  Typography,
  Divider
} from '@aircall/tractor';

import AppStyling from '../AppStyling';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(AppStyling);

const CallList = ({ token, page }) => {
  const classes = useStyles();
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    API.getCalls(token, page)
      .then(resp => resp.json())
      .then(data => setCalls(data.nodes));
  }, [token]);

  return (
    <div className={classes.callListContainer}>
      <Spacer space="s" width="100% !important" direction="vertical">
        {displayCalls(calls, classes)}
      </Spacer>
    </div>
  );
};

const displayCalls = (calls, classes) => {
  console.log(calls);
  if (calls != undefined && calls.length > 1) {
    return calls.map(call => {
      return (
        <div className={classes.call}>
          <Button>
            <CallFilled />
            {call.from}
          </Button>
          <Divider className="divider" orientation="vertical" size="4px" />
          <Typography className="callDate">
            {call.created_at.slice(0, 10)}
          </Typography>
        </div>
      );
    });
  }
};

export default CallList;
