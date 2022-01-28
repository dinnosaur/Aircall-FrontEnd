const AppStyling = {
  app: {
    width: '75vw',
    height: '95vh',
    margin: ' 0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    borderRadius: '4px',
    background: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
    border: '1px solid rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#00B388',
    paddingBottom: '20px'
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
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    '& .divider': {
      height: 'inherit'
    }
  },
  callListContainer: {
    width: '50%',
    height: '67%',
    margin: '70px auto'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '18%'
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
    top: '-14px',
    right: '-150px',
    width: '11vw'
  },
  backButton: {
    right: '10vw',
    top: '40px',
    position: 'absolute !important',
    marginLeft: '50px',
    width: '11vw'
  }
};

export default AppStyling;
