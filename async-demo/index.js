//ASYNCHRONOUS
console.log("Before");

//get user and getrepositories for that user
getUser(1, getRepositories);

console.log("After");

//pass the user and when we have repos, we get commits for repos
function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}
// when we get commits for that repos, we display the commits
function getCommits(repos) {
  getCommits(repos, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user form a database...");
    callback({ id: id, gitHubUsername: "Shital769" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
