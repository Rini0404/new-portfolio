console.log("ayo?")

const begin = $("#begin")



// remove load screen

$(begin).on("click", function (e) {
  e.preventDefault()
  const form = $("#form");
  form.addClass("hidden");
  const info = $("#info");
  if (info.hasClass == "none"){
    info.addClass("visible");
  }
});
