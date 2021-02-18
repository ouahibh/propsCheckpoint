
import {PropTypes} from "prop-types";
import Styles from './styles';

const Profile = (props) => {
    return (
        <div style={Styles.myprofile}>
            <h1>Profile</h1>
            <h3>Full name : {props.fullname} </h3>
            <h3>Bio : {props.bio} </h3>
            <h3>Profession : {props.profession} </h3>
        </div>
    )
}


Profile.propTypes={
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string 
}
export default Profile;
