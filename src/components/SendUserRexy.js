import { connect } from "react-redux";
import User from "./common/User";
import { sendUserRexyMovie, sendUserRexyShow } from "../actions";

function SendUserRexy({ relationships, setSendingRexy, rexy, dispatch }) {
  const { following } = relationships;
  const sendRexy = (relative_user_id) => {
    const payload = { 
        ...rexy, 
        user_id: relative_user_id 
    };
    dispatch(
      rexy.movie_id ? sendUserRexyMovie(payload) : sendUserRexyShow(payload)
    );
    setSendingRexy(false);
  };

  return (
    <section className="modal-wrapper">
      <div className="rexy-modal">
        <nav>
          <img
            className="icon"
            onClick={() => setSendingRexy(false)}
            src="../../images/close.png"
            alt="close"
          />
        </nav>
        <div className="rexy-users">
          {following.map((user) => {
            return (
              <User
                key={user.user_id}
                user={user}
                type={"sendRexy"}
                sendRexy={sendRexy}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return { relationships: state.relationships };
};
export default connect(mapStateToProps)(SendUserRexy);
