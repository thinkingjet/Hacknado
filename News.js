document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch(
    " https://newsdata.io/api/1/news?apikey=41369098ca55fb208226411e99db27f3753b&language=fr,en   "
  );
  const json = await data.json();
  console.log(json);
  const { results } = json;

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
