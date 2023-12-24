const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-visible');
        observer.unobserve(target);
      }
    });
  },{
    threshold:0.2
});

var indexArticleParagraphs = document.querySelectorAll(".index-article-p");
var allCoaches = document.querySelectorAll(".index-coach-div");

indexArticleParagraphs.forEach(element => {
    observer.observe(element);
});

allCoaches.forEach(element => {
    observer.observe(element);
});