const AppStyling = {
  app: {
    width: '100vw',
    height: '100vh'
  },
  title: {
    textAlign: 'center',
    color: '#00B388'
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
    width: '35%',
    height: '67%',
    margin: '70px auto'
    // borderRadius: '4px',
    // background: 'rgb(255, 255, 255)',
    // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
    // border: '1px solid rgba(0, 0, 0, 0.1)',
    // '& > :first-child': {
    //   paddingTop: '30px',
    //   paddingLeft: '30px'
    // }
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
    top: '-14px',
    right: '-150px'
  },
  backButton: {
    right: '10vw',
    top: '40px',
    position: 'absolute !important',
    marginLeft: '50px'
  }
};

export default AppStyling;
