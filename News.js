let newsFunction = () => {
  fetch(
    " https://newsapi.org/v2/everything?q=Weather&from=2022-01-29&sortBy=popularity&apiKey=b3011463760b46e290a2112416b6deb3"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { articles } = data;

      for (let i = 0; i < articles.length; i++) {
        console.log(articles[i].title);
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
};
