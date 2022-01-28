import './App.css';
import API from './API';
import { useEffect, useState } from 'react';

import CallList from './Components/CallList';
import CallInformation from './Components/CallInformation';
import AppStyling from './AppStyling';

import { makeStyles } from '@material-ui/core/styles';

import Pusher from 'pusher-js';

let useStyles = makeStyles(AppStyling);

function App() {
  const [authToken, setAuthToken] = useState(false);
  const [refreshToken, setRefreshToken] = useState(false);
  const [call, setCall] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    API.authenticate()
      .then(resp => resp.json())
      .then(data => {
        setAuthToken(data.access_token);
        setRefreshToken(data.refresh_token);
      });
  }, []);

  useEffect(() => {
    setInterval(() => {
      API.refreshAuthentication(refreshToken)
        .then(resp => resp.json())
        .then(data => {
          setAuthToken(data.access_token);
          setRefreshToken(data.refresh_token);
        });
    }, 540000);

    var pusher = new Pusher('d44e3d910d38a928e0be', {
      cluster: 'eu',
      authEndpoint: 'https://frontend-test-api.aircall.io/pusher/auth',
      auth: {
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
          username: 'Dinno',
          password: 'crebdrug'
        })
      }
    });

    var channel = pusher.subscribe('private-aircall');

    channel.bind('update-call', data => {
      console.log(data);
    });
  }, [authToken]);

  useEffect(() => {
    console.log(authToken, 'hello');
  });

  return authToken ? (
    <div className={classes.app}>
      <h1 className={classes.title}>Aircall Calls</h1>
      {call ? (
        <CallInformation
          setCall={call => setCall(call)}
          token={authToken}
          call={call}
        />
      ) : (
        <CallList setCall={call => setCall(call)} token={authToken} />
      )}
    </div>
  ) : (
    <>{console.log('hello')}</>
  );
}

export default App;
