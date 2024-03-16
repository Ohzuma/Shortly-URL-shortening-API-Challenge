const mobile_menu = document.querySelector(".nav_ul_item");
const nav_mobile_btn = document.querySelector(".nav_mobile");
const form = document.getElementById("form");
const form_input = document.querySelector("form input");
let error_text = document.getElementById("error");

nav_mobile_btn.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
});

// async function ShortUrl(url, data) {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "no-cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: "same-origin",
//     SameSite: "none",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify(data),
//   });
//   return response
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   try {
//     if (form_input.value === "") {
//       throw "Please provide a url";
//     }
//     const url = new URL(form_input.value);
//     // console.log(url);
//     ShortUrl("https://cleanuri.com/api/v1/shorten", `url=${url.href}`).then(
//       (res) => {
//         console.log(res);
//       }
//     );
//   } catch (error) {
//     error_text.textContent = error;
//   }
// });

async function ShortUrl(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }), // Ensure data is sent as an object
  });
  return response;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    if (form_input.value === "") {
      throw "Please provide a URL";
    }
    const url = new URL(form_input.value);
    const response = await ShortUrl(
      "https://cleanuri.com/api/v1/shorten",
      url.href
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    error_text.textContent = error;
  }
});
