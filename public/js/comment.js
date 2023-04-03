const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_id = document.querySelector(".comment-form").dataset.postid;
  const commentContent = document
    .querySelector("#comment-content")
    .value.trim();
  if (commentContent) {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        commentContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
