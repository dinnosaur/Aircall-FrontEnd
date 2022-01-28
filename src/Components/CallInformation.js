import API from '../API';
import { Divider, Typography, Spacer, Button } from '@aircall/tractor';

import AppStyling from '../AppStyling';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(AppStyling);

const CallInformation = ({ call, token, setCall }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.callInformation}>
        <Button
          variant="darkGhost"
          onClick={() => setCall(false)}
          className={classes.backButton}
        >
          {'<---'}
        </Button>
        <Spacer
          space="xs"
          width="100% !important"
          direction="vertical"
          justifyItems="center"
          width="30vw"
        >
          <h2>Call details:</h2>
          <Typography>From: {call.from}</Typography>
          <Divider className="divider" orientation="horizontal" size="2px" />
          <Typography>
            Time: {call.created_at.slice(0, 19).replace('T', ' ')}
          </Typography>
          <Divider className="divider" orientation="horizontal" size="2px" />
          <Typography>Call Type: {call.call_type}</Typography>
          <Divider className="divider" orientation="horizontal" size="2px" />
          <Typography>To: {call.to}</Typography>
          <Divider className="divider" orientation="horizontal" size="2px" />
          <Typography>Via: {call.via}</Typography>
          <Divider className="divider" orientation="horizontal" size="2px" />
          <Typography>Duration: {call.duration} Seconds</Typography>
          <Divider className="divider" orientation="horizontal" size="2px" />
          <div className={classes.archives}>
            <Typography>Archived: {call.is_archived ? 'yes' : 'no'}</Typography>
            <Button
              onClick={() => handleArchiveButton(setCall, token, call)}
              className={classes.archiveButton}
              variant="darkGhost"
            >
              {call.is_archived ? 'Unarchive' : 'Archive'}
            </Button>
          </div>
          <Divider className="divider" orientation="horizontal" size="2px" />
        </Spacer>
      </div>
      <div className={classes.callInformation}>
        <h2>Notes:</h2>
        <Spacer
          space="xs"
          width="100% !important"
          direction="vertical"
          justifyItems="center"
          width="30vw"
        >
          {displayNotes(call.notes)}
        </Spacer>
      </div>
    </>
  );
};

const displayNotes = notes => {
  console.log(notes.length, notes.length !== 0);
  if (notes.length !== 0) {
    return notes.map((note, index) => {
      return (
        <Typography>
          {index + 1}. {note.content}{' '}
        </Typography>
      );
    });
  } else {
    return <Typography>No notes added.</Typography>;
  }
};

const handleArchiveButton = (setCall, token, call) => {
  API.archiveCall(token, call.id)
    .then(resp => resp.json())
    .then(data => {
      setCall(data);
    });
};

export default CallInformation;
