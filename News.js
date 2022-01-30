document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch(
    " https://gnews.io/api/v4/search?q=example&token=a38e7f1225ce41d278a77b285823c848"
  );
  const json = await data.json();
  console.log(json);
  const { articles } = json;

  for (let i = 0; i < results.length; i++) {
    const html = `<div class="news-container">
              <h3 class="news-title">${results[i].title}</h3>
              <p class="discription">
                  ${results[i].description}
              </p>
              <div class="btn">
                  <a class="news-btn" href=${results[i].url} target=_blank >Read more</a>
              </div>
          </div>`;
    document
      .querySelector(".main-heading")
      .insertAdjacentHTML("afterend", html);
  }
});
