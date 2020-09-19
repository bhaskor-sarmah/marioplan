export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // This pauses the dispatch
    // Make Async Call to DB
    // Then pass the dispatch request

    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Bhuju",
        authorLastName: "Net Ninja",
        authorId: 1234,
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
