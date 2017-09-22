import { connect } from 'react-redux';
import Counter from "../components/Counter";

const mapStateToProps = (state, ownProps) => ({
  count: state[ownProps.index]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => { dispatch({ type: 'INCREMENT', index: ownProps.index }) },
  decrement: () => { dispatch({ type: 'DECREMENT', index: ownProps.index }) },
  reset: () => { dispatch({ type: 'RESET', index: ownProps.index }) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
