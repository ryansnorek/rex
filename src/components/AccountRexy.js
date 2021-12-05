import { connect } from "react-redux";
import { POSTER_URL } from "../constants";
import { deleteRexy } from "../actions";

function AccountRexy({ dispatch, item, rexys }) {
    
    const handleRemove = id => dispatch(deleteRexy(id));

    return (
        <div className="item">
            {item.poster_path ? <img src={`${POSTER_URL}${item.poster_path}`} alt="poster"/> : <img src="../../images/unavailable_poster.jpeg" alt="poster" />}
            <div className="text">
                <h3>{item.title}</h3>
            </div>
            <div className="buttons-container">
                <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => ({ rexys: state.rexys });
export default connect(mapStateToProps)(AccountRexy);

