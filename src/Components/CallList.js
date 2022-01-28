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
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles(AppStyling);

const CallList = ({ token, setCall }) => {
  const classes = useStyles();
  const [calls, setCalls] = useState([]);
  const [page, setPage] = useState(0);

  // fetch all call using the token
  useEffect(() => {
    API.getCalls(token, page)
      .then(resp => resp.json())
      .then(data => {
        setCalls(data);
      });
  }, [page]);

  return (
    <>
      <div className={classes.callListContainer}>
        <Spacer space="s" width="100% !important" direction="vertical">
          {displayCalls(sortbyDate(calls.nodes), classes, setCall)}
        </Spacer>
        <Pagination
          className={classes.pagination}
          count={calls.totalCount ? calls.totalCount - 1 : 1}
          page={page + 1}
          onChange={(event, value) => handlePage(event, value, setPage)}
        />
      </div>
    </>
  );
};

const handlePage = (event, value, setPage) => {
  setPage(parseInt(value) - 1);
};

const displayCalls = (calls, classes, setCall) => {
  if (calls !== undefined && calls.length > 1) {
    return calls.map(call => {
      return (
        <>
          <div key={call.id} className={classes.call}>
            <Button onClick={() => setCall(call)}>
              <CallFilled />
              {call.from}
            </Button>
            <Divider className="divider" orientation="vertical" size="4px" />
            <Typography className="callDate">
              {call.created_at.slice(0, 19).replace('T', ' ')}
            </Typography>
          </div>
        </>
      );
    });
  }
};
/// sort all the fetched calls by date in a descending order
const sortbyDate = calls => {
  if (calls !== undefined) {
    return calls.sort(
      (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
    );
  }
};

export default CallList;
