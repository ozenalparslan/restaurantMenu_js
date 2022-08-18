const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Carbonara",
    category: "Italy",
    price: 9.99,
    img:
      "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    desc: `Italian pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper.`,
  },
  {
    id: 11,
    title: "Pepperoni Pizza",
    category: "Italy",
    price: 13.99,
    img:
      "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Spicy salami made from cured pork and beef seasoned with paprika or other chili pepper.[`,
  },
  {
    id: 12,
    title: "Risotto",
    category: "Italy",
    price: 15.99,
    img:
      "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: ` Northern Italian rice dish cooked with broth until it reaches a creamy consistency. `,
  },
  {
    id: 13,
    title: "Ratatouille",
    category: "French",
    price: 25.99,
    img:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
    desc: `French Provençal dish of stewed vegetables which originated in Nice.`,
  },
  {
    id: 14,
    title: "Bouillabaisse",
    category: "French",
    price: 30.99,
    img:
      "https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_1920,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg",
    desc: `Provençal fish stew originating in the port city of Marseille.`,
  },
  {
    id: 15,
    title: "Hamburger",
    category: "American",
    price: 13.99,
    img:
      "https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    desc: `Consisting of fillings placed inside a sliced bun or bread roll.`,
  },
  {
    id: 16,
    title: "Hot-Dog",
    category: "American",
    price: 5.99,
    img:
      "https://images.unsplash.com/photo-1624772404867-08060beaaa1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: `Grilled or steamed sausage served in the slit of a partially sliced bun..`,
  },
  {
    id: 17,
    title: "Apple Pie",
    category: "American",
    price: 15.99,
    img:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: `Pie in which the principal filling ingredient is apples.`,
  },







];


const btn = document.querySelector("#btn")
const single = document.querySelector("#single")
const title = document.querySelector("#title")
const meals = document.querySelector("#menu-items")



/////////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {

});
displayMenuItems(menu);
displayMenuButtons();

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
    <div class="menu-items col-6 row menu-text btn-container">
      <div class="item-info row">
        <div>
        <img class="photo" src=${item.img} alt="">
        <h3 class="menu-title">  ${item.title} <span>$${item.price}</span>
          </h3>
          
        </div>
        <p class="menu-info">
         ${item.desc}
        </p>
      </div>
    </div>`;
  })
  displayMenu = displayMenu.join("");

  meals.innerHTML = displayMenu;

}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class=" btn-item filter-btn btn btn-item " data-id=${category}>
      ${category}</button>`;
    })
    .join("");

  btn.innerHTML = categoryBtns;
  const filterBtns = btn.querySelectorAll('.filter-btn');


  filterBtns.forEach(function (select) {
    select.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}