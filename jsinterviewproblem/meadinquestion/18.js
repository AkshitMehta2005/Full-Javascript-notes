let fetchdata = async () => {
  try {
    let response = await fetch("https://example.org/products.json");
    let text = await response.text();
    console.log("Raw response:", text);
  } catch (err) {
    console.log("Error:", err);
  }
};

fetchdata();

