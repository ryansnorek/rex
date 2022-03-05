import { connect } from "react-redux"
import User from "./User";

function SendUserRexy({ relationshps }) {
    const { following } = relationshps;

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
    return ({ relationshps: state.relationshps });
};
export default connect(mapStateToProps)(SendUserRexy);