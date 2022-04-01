export const createRelationship = (user_id, relative_user_id, controller) => {
  let relationship, relativeRelationship;

  if (controller === "follow") {
    relationship = {
      user_id,
      relative_user_id,
      following: 1,
    };
    relativeRelationship = {
      user_id: relative_user_id,
      relative_user_id: user_id,
      follower: 1,
    };
  } else if (controller === "unfollow") {
    relationship = {
      user_id,
      relative_user_id,
      following: 0,
    };
    relativeRelationship = {
      user_id: relative_user_id,
      relative_user_id: user_id,
      follower: 0,
    };
  }
  return [relationship, relativeRelationship];
};

export function createNewUser(userInfo, phoneNumber) {
  userInfo.phone = phoneNumber;
  userInfo.username = userInfo.username.toLowerCase();
  userInfo.email = userInfo.email.toLowerCase();
  userInfo.display_name = userInfo.username;
  userInfo.uploaded_image = "../../images/blank_user.png";
  return userInfo;
}
