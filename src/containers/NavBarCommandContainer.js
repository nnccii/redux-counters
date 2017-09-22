import { connect } from 'react-redux';
import NavBarCommand from "../components/NavBarCommand";

const mapStateToProps = state => ({
  sum: state.reduce((count, sum)=> count + sum, 0),
  disableReset: !state.find(count => count !== 0),
  emptyCounters: !state.length
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => { dispatch({ type: 'ADD_COUNTER' }) },
  removeCounter: () => { dispatch({ type: 'REMOVE_COUNTER' }) },
  resetCounters: () => { dispatch({ type: 'RESET_COUNTERS' }) },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarCommand)
