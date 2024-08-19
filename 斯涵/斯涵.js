document.addEventListener("DOMContentLoaded", function() {
    const article = document.querySelector("#content");
    const button = document.querySelector("button");

    function showMore() {
        if (article.classList.contains("open")) {
            // Read less
            article.classList.remove("open");
            button.innerHTML = "Show more";
        } else {
            // Read more
            article.classList.add("open");
            button.innerHTML = "Show less";
        }
    }

    button.addEventListener("click", showMore);
});
