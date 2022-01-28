const AppStyling = {
  app: {
    width: '100vw',
    height: '100vh'
  },
  title: {
    textAlign: 'center'
  },
  call: {
    display: 'flex',
    flexDirection: 'row',
    gap: '7%',
    '& button': {
      width: '50%'
    },
    '& .callDate': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .divider': {
      height: 'inherit'
    }
  },
  callListContainer: {
    width: '35vw',
    height: '60vh',
    margin: '100px auto'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center'
  },
  callInformation: {
    width: '45vw',
    textAlign: 'center',
    margin: '60px auto',
    '& h2': {
      color: '#00B388'
    }
  },
  callNotes: {
    width: '45vw',
    textAlign: 'center',
    margin: '60px auto'
  },
  archives: {
    position: 'relative'
  },
  archiveButton: {
    position: 'absolute !important',
    top: '-12px',
    right: '-150px'
  }
};

export default AppStyling;
