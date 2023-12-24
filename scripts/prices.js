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

var priceDivs = document.querySelectorAll(".price-div");

priceDivs.forEach(element => {
    observer.observe(element);
});
