function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const contents = document.querySelector('textarea[name="post-contents"]').value;

  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      contents,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((post) => {
      console.log(post);
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
}


document.getElementById("new-post-form").addEventListener("submit", newFormHandler);