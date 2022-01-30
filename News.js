document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch(
    " https://newsapi.org/v2/everything?q=Weather&from=2022-01-29&sortBy=popularity&apiKey=b3011463760b46e290a2112416b6deb3"
  );
  const json = await data.json();
  console.log(json);
  const { articles } = json;

  for (let i = 0; i < articles.length; i++) {
    const html = `<div class="news-container">
              <h3 class="news-title">${articles[i].title}</h3>
              <p class="discription">
                  ${articles[i].description}
              </p>
              <div class="btn">
                  <a class="news-btn" href=${articles[i].url} target=_blank >Read more</a>
              </div>
          </div>`;
    document
      .querySelector(".main-heading")
      .insertAdjacentHTML("afterend", html);
  }
});
