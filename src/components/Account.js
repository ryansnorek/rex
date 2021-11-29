import { connect } from "react-redux";
import { findMovieById } from "../actions";
import { useEffect } from "react";


function Account(props) {
    const { dispatch, rexyIDs, rexys } = props;

    useEffect(() => {
        rexyIDs.forEach(id => {
           dispatch(findMovieById(id));
        });
    },[]);

    // useEffect(() => {
  //   axiosAuthorization()
  //     .get("/3/movie/550")
  //     .then(res => setMovie(res.data))
  //     .catch(err => console.log(err))
  // },[])

    return (
        <div className="account">
            <div className="profile">
                <div className="text">
                    <h3>Username</h3>
                    <p>Tagline andlskna; kdnakldn</p>
                    <p>Followers: 124</p>
                    <p>Following: 241</p>
                    <p>Rexys: Deuce Bigalow, Deuce Bigalow, Deuce Bigalow</p>
                </div>
                <img src="../../images/profile_pic_small.jpg" alt="profile-pic"/>
            </div>
            {/* {rexys && rexys.movies.map(movie => <Item item={movie} category="movie"/>)} */}

        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
            rexyIDs: state.rexyIDs,
            rexys: state.rexys 
        }
};
export default connect(mapStateToProps)(Account);