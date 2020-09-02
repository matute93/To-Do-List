const data = [];
      const createItem = () => {
        const value = document.querySelector("input").value;
        const newItem = {
          id: 0,
          title: value,
          created_at: Date.now(),
        };
        data.push(newItem);
        displayItems();
      };
      const deleteItem = (obj) => {
        console.log(obj);
      };
      const displayItems = () => {
        const container = document.querySelector(".container");
        container.innerHTML = "";
        data.forEach((item) => {
          const el = document.createElement("div");
          el.innerHTML = item.title;
          container.appendChild(el);
          const deleteButton = document.createElement("button");
          deleteButton.innerText = "delete";
          container.appendChild(deleteButton);
          deleteButton.addEventListener("click", () => deleteItem(item));
        });
      };
      document.querySelector("button").addEventListener("click", createItem);
