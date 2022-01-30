document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch(
    "https://newsapi.org/v2/everything?q=Apple&from=2022-01-30&sortBy=popularity&apiKey=d7bb41880e6f47cb986064472fc0ea63 "
  );
  //" https://gnews.io/api/v4/search?q=weather&token=a38e7f1225ce41d278a77b285823c848"
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
