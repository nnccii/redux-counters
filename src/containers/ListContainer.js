import { connect } from 'react-redux';
import List from "../components/List";

const mapStateToProps = state => ({
  counters: state
});

export default connect(mapStateToProps, null)(List)
