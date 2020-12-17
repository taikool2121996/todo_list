const styles = theme => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    boxShadow: [5],
    padding:(2,4,4),
    outline: 'none',
  },
  header: {
    backgroundColor: 'aqua',
    color: 'red',
    padding: (16),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'red',
    fontWeight: 700,
    textTransform: 'capital',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 15,
  },
  content: {
    padding: (16),
  }
 });

export default styles;