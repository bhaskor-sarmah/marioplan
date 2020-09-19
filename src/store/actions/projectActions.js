export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // This pauses the dispatch
    // Make Async Call to DB
    // Then pass the dispatch request
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project,
        });
      })
      .catch((err) => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err,
        });
      });
  };
};
