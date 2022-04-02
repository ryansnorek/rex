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

export const createNewUser = (userInfo, phoneNumber) => {
  userInfo.phone = phoneNumber;
  userInfo.username = userInfo.username.toLowerCase();
  userInfo.email = userInfo.email.toLowerCase();
  userInfo.display_name = userInfo.username;
  userInfo.uploaded_image = "../../images/blank_user.png";
  return userInfo;
}

export const editUser = (userInfo, phoneNumber) => {
  const editedUser = {};
  userInfo.phone = phoneNumber;
  userInfo.username = userInfo.username.toLowerCase();
  userInfo.email = userInfo.email.toLowerCase();
  for (let key in userInfo) {
    if (userInfo[key] !== "") {
      editedUser[key] = userInfo[key];
    }
  }
  return editedUser;
}

export const createRexy = (contentID, userID, type) => {
  if (type === "movie") {
    return {
      movie_id: contentID,
      relative_user_id: userID
    }
  } else {
    return {
      show_id: contentID,
      relative_user_id: userID
    }
  }
}