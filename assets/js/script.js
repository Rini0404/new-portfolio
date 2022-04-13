console.log("ayo?")

const begin = $("#begin")

// remove load screen

$(begin).on("click", function (e) {
  e.preventDefault()
  const form = $("#form")
  form.addClass("hidden")

});