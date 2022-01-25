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

const CallList = ({ token }) => {
  const classes = useStyles();
  const [calls, setCalls] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    API.getCalls(token, page)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setCalls(data);
      });
  }, [token, page]);

  return (
    <>
      <div className={classes.callListContainer}>
        <Spacer space="s" width="100% !important" direction="vertical">
          {displayCalls(sortbyDate(calls.nodes), classes)}
        </Spacer>
      </div>
      <Pagination
        className={classes.pagination}
        count={calls.totalCount - 1}
        page={page + 1}
        onChange={page => handlePage(page, setPage)}
      />
    </>
  );
};

const handlePage = (page, setPage) => {
  setPage(parseInt(page.target.outerText) - 1);
};

const displayCalls = (calls, classes) => {
  console.log(calls);
  if (calls !== undefined && calls.length > 1) {
    return calls.map(call => {
      return (
        <>
          <div className={classes.call}>
            <Button>
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

const sortbyDate = calls => {
  if (calls !== undefined) {
    return calls.sort(
      (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
    );
  }
};

export default CallList;
