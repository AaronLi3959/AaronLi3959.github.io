window.onload = function () {
  const iframe = document.getElementById("iframe");
  const dog = document.getElementById("dog");
  const ostrich = document.getElementById("ostrich");
  const cat = document.getElementById("cat");

  dog.addEventListener("click", function (event) {
    event.preventDefault();
    iframe.src = "dog.html";
  });

  ostrich.addEventListener("click", function (event) {
    event.preventDefault();
    iframe.src = "ostrich.html";
  });

  cat.addEventListener("click", function (event) {
    event.preventDefault();
    iframe.src = "cat.html";
  });
};
