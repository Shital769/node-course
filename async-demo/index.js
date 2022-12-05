//ASYNCHRONOUS
console.log("Before");

//get user and getrepositories for that user
// getUser(1, getRepositories);
// or you can write above shotcut codes, they are same
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});

getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repo) => getCommits(repo[0]))
  .then((commits) => console.log("Commits", commits))
  .catch((err) => console.log("Error", err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    //kick off some async work
    setTimeout(() => {
      console.log("Reading a user form a database...");
      resolve({ id: id, gitHubUsername: "Shital769" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
