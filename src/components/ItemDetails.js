import { connect } from "react-redux";
import { addRexy } from "../actions";
import ItemDetailsMovie from "./ItemDetailsMovie";
import ItemDetailsTvShow from "./ItemDetailsTvShow";

function ItemDetails({ dispatch, item, rexyIDs }) {
    const movie = item.movie ? item.movie : [];
    const tvShow = item.tvShow ? item.tvShow : [];

    const handleAdd = (id) => {
        if (rexyIDs !== []) {
            const alreadyInCollection = rexyIDs.find(rexyID => rexyID === id);
            if (alreadyInCollection) {
                return alert("You already have that one");
            }
        }
        dispatch(addRexy(id));
    };

    if (!item.movie && !item.tvShow) {
        return <h1>If you do not see it, please refresh the page</h1>
    }
    return (
        <div className="page">
            {item.movie && <ItemDetailsMovie movie={movie} handleAdd={handleAdd}/>}
            {item.tvShow && <ItemDetailsTvShow tvShow={tvShow} handleAdd={handleAdd}/>}
        </div>
    )
};
const mapStateToProps = (state) => ({ item: state.item, rexyIDs: state.rexyIDs });
export default connect(mapStateToProps)(ItemDetails);