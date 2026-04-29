console.log("Pizza Order Placed");

setTimeout(() => {
  console.log("🧑‍🍳 Dough prepared");

  setTimeout(() => {
    console.log("🧑‍🍳 Sauce added");

    setTimeout(() => {
      console.log("🧑‍🍳 Cheese added");

      setTimeout(() => {
        console.log("🧑‍🍳 Toppings added");

        setTimeout(() => {
          console.log("🔥 Pizza is baking");

          setTimeout(() => {
            console.log("✅ Pizza ready to serve!");

          }, 1000); // Baking done

        }, 1000); // Add toppings

      }, 1000); // Add cheese

    }, 1000); // Add sauce

  }, 1000); // Prepare dough

}, 1000); // Start the process

