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
      width: '200px'
    },
    '& .callDate': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .divider': {
      height: 'none'
    }
  },
  callListContainer: {
    width: '38vw',
    height: '65vh',
    margin: '100px auto',
    transform: 'translate(-50%, -50%)'
  }
};

export default AppStyling;
