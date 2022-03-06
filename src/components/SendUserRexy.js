import { connect } from "react-redux"
import User from "./common/User";

function SendUserRexy({ relationships }) {
    const { following } = relationships;

    return (
        <section className="modal-wrapper">
            <div className="rexy-modal">
                {following.map((user) => {
                    return <User user={user}/>;
                })}
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return ({ relationships: state.relationships });
};
export default connect(mapStateToProps)(SendUserRexy);