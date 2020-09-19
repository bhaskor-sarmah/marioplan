const initState = {
  projects: [
    { id: 1, title: "Project 1", content: "Content 1" },
    { id: 2, title: "Project 2", content: "Content 2" },
    { id: 3, title: "Project 3", content: "Content 3" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project", action.project);
      break;
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      break;
    default:
      break;
  }
  return state;
};

export default projectReducer;
