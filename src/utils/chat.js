export const getConversationId = (user, users) => {
  // if (!user || !users || !users[0] || !users[1]) {
  //   // Handle error case when user or users is null/undefined or users[0] or users[1] is null/undefined
  //   return null; // or throw an error, depending on your use case
  // }
  return users[0]._id === user._id ? users[0]._id : users[1]._id;
};

export const getConversationName = (user, users) => {
  return users[0]._id === user._id ? users[0].name : users[1].name;
};

export const getConversationPicture = (user, users) => {
  return users[0]._id === user._id ? users[0].picture : users[1].picture;
};
