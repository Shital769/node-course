//ASYNCHRONOUS
console.log("Before");

//get user and getrepositories for that user
// getUser(1, getRepositories);
// or you can write above shotcut codes, they are same
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

//Async and await approach
async function displayCommits() {
  try {

    const user = await getUser(1);
    const repo = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repo[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}
displayCommits();
//Promise-based approach
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repo) => getCommits(repo[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch((err) => console.log("Error", err.message));

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
      // resolve(["repo1", "repo2", "repo3"]);
      reject (new Error("cant get the repos"))
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
