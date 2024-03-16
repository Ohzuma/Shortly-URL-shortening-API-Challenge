const mobile_menu = document.querySelector(".nav_ul_item");
const nav_mobile_btn = document.querySelector(".nav_mobile");
const form = document.getElementById("form");
const form_input = document.querySelector("form input");
let error_text = document.getElementById("error");

nav_mobile_btn.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
});

async function ShortUrl(url, data) {
  const response = await axios.post(url, { url: data });
  return response;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    if (form_input.value === "") {
      throw "Please provide a URL";
    }
    const url = new URL(form_input.value);
    await ShortUrl(
      "https://cleanuri.com/api/v1/shorten",
      `url=${url.href}`
    ).then((res) => {
      console.log(res);
    });
  } catch (error) {
    error_text.textContent = error;
  }
});
