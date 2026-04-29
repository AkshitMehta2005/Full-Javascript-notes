// 1

// let fetch_data = async() =>{
//     let a =await fetch('https://jsonplaceholder.typicode.com/posts/1'); //wait during fetching
//     let data = await a.json();
//     console.log(data)
// }

// fetch_data()


// 2

async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg");
        }, 1000);
    });

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg");
        }, 7000);
    });

    // Wait for both promises to resolve
    let delhiW = await delhiWeather;
    let bangaloreW = await bangaloreWeather;

    return [delhiW, bangaloreW];
}

console.log("Welcome to weather control room");

harry().then((data) => {
    console.log("Fetched weather data:", data);
});
