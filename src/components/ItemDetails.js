import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findMovieById } from "../actions";

function ItemDetails({ dispatch, rexys }) {
    const { id } = useParams();
    
    useEffect(() => { dispatch(findMovieById(id)) }, []);

    console.log(rexys)

    return (
        <div>
            <h1>ITEM</h1>
        </div>
    )
};
const mapStateToProps = (state) => ({ rexys: state.rexys });

export default connect(mapStateToProps)(ItemDetails);