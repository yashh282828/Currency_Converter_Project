console.log("Working");

const populate = async (value, currency) => {
  let myStr = "";
  const url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=" +
    encodeURIComponent(currency);

  const response = await fetch(url);
  const rJson = await response.json();

  // console.log(rJson);

  const data = rJson && rJson.data ? rJson.data : {};

  // Map API currency code -> readable currency name (for the UI)
  const currencyNameByCode = {
    INR: "Indian Rupee",
    USD: "US Dollar",
    EUR: "Euro",
  };

  for (const key of Object.keys(data)) {
    const code = data[key]?.code || key;
    const name = currencyNameByCode[code] || code;

    myStr += `<tr>
        <td>${name}</td>
        <td>${code}</td>
        <td>${data[key].value * value ?? data[key].value}</td>
        </tr>`;
  }

  const tableBody = document.querySelector("tbody");
  if (tableBody) tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
const form = document.querySelector("form");

const getInputs = () => {
  const valueStr = document.querySelector("input[name='Quantity']")?.value;
  const value = parseFloat(valueStr);

  const currency = document.querySelector("select#currency")?.value;

  return { value, currency };
};

const handleSubmit = (e) => {
  if (e) e.preventDefault();

  const { value, currency } = getInputs();

  if (!currency) {
    alert("Please choose a currency.");
    return;
  }

  if (!Number.isFinite(value) || value <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  populate(value, currency);
};

// If user clicks the button
btn.addEventListener("click", handleSubmit);

// Also handle Enter key / form submit just in case
if (form) form.addEventListener("submit", handleSubmit);
