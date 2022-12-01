console.log("Before");
getUser(1, (user) => {
  //get the reposoitories
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user form a database...");
    callback({ id: id, gitHubUsername: "Shital769" });
  }, 2000);
  return 1;
}

function getRepositories(username) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    return ["repo1", "repo2", "repo3"];
  }, 2000);
}
