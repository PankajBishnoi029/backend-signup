const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());

app.use(cors());

const user = [];

app.post("/one", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const dummy = {
    id,
    pass,
  };
  user.push(dummy);
  console.log(user);
  res.json({ users: user });
});

app.post("/signup", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const country = req.body.country;
  const dummy = {
    id,
    pass,
    name,
    email,
    address,
    country,
    purchase: [],
    wishlist: [],
    cart: [],
  };
  user.push(dummy);
  console.log(user);
  res.json({ users: user });
});

app.post("/login", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;

  console.log({ id, pass });

  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id)
      if (user[i].pass == pass) {
        res.json({
          message: "login successful",
          name: user[i].name,
          email: user[i].email,
          address: user[i].address,
          country: user[i].country,
        });
      } else {
        res.json({ message: "login failed" });
      }
  }

  res.json({ message: "no user data found " });
});
const newuser = [];
app.post("/changepassword", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const newpassword = req.body.newpassword;

  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id)
      if (user[i].pass === pass) {
        user[i].pass = newpassword;
        console.log(user);
        return res.json({
          message: "Password changed successfully",
          id: user[i].id,
          pass: user[i].pass,
        });
      }
  }

  return res.json({
    message:
      "Failed to change password. User not found or current password incorrect",
  });
});

const purchase = [];
app.post("/purchase", (req, res) => {
  const productid = req.body.productid;

  for (let i = 0; i < pro.length; i++) {
    if (pro[i].productid === productid) {
      purchase.push(pro[i]);
      return res.json({
        purchase,
      });
    }
  }

  return res.json({
    message: " purchase failed or wrong input ",
  });
});

app.get("/manyuser", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const productid = req.body.productid;

  for (i = 0; i < user.length; i++) {
    if (user[i].id === id)
      if (user[i].pass === pass) {
        for (let a = 0; a < pro.length; a++) {
          if (pro[a].productid === productid) {
            user[i].purchase.push(pro[a]);
            return res.json(user);
          }
        }
        return res.json({
          message: " purchase failed or wrong input",
        });
      }
  }
  return res.json({ message: "login failed" });
});

app.get("/wishlist", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const productid = req.body.productid;

  for (i = 0; i < user.length; i++) {
    if (user[i].id === id)
      if (user[i].pass === pass) {
        for (let a = 0; a < pro.length; a++) {
          if (pro[a].productid === productid) {
            user[i].wishlist.push(pro[a]);
            return res.json("successfully added to wishlist", user);
          }
        }
        return res.json({
          message: "  failed or wrong input ",
        });
      }
  }
  return res.json({ message: "login failed" });
});

app.get("/cart", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const productid = req.body.productid;

  for (i = 0; i < user.length; i++) {
    if (user[i].id === id)
      if (user[i].pass === pass) {
        for (let a = 0; a < pro.length; a++) {
          if (pro[a].productid === productid) {
            user[i].cart.push(pro[a]);

            return res.json("successfully added to cart", user);
          }
        }
        return res.json({
          message: "  failed or wrong input ",
        });
      }
  }
  return res.json({ message: "login failed" });
});

app.get("/get", (req, res) => {
  console.log(pro);
  res.json(pro);
});

const seller = [];

app.post("/sellersignup", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const name = req.body.name;
  const email = req.body.email;
  const address = req.body.address;
  const country = req.body.country;
  const dummy = {
    id,
    pass,
    name,
    email,
    address,
    country,
  };
  seller.push(dummy);
  console.log(seller);
  res.json({ seller });
});

app.post("/sellerlogin", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;

  console.log({ id, pass });

  for (let i = 0; i < seller.length; i++) {
    if (seller[i].id == id)
      if (seller[i].pass == pass) {
        res.json({
          message: "login successful",
          name: seller[i].name,
          email: seller[i].email,
          address: seller[i].address,
          country: seller[i].country,
        });
      } else {
        res.json({ message: "login failed" });
      }
  }

  res.json({ message: "no user data found " });
});

var pro = [];

app.post("/producthere", (req, res) => {
  const productid = req.body.productid;
  const productimage = req.body.productimage;
  const product = req.body.product;
  const rate = req.body.rate;
  const discount = req.body.discount;
  const warranty = req.body.warranty;
  const dummypro = {
    productid,
    productimage,
    product,
    rate,
    discount,
    warranty,
  };
  pro.push(dummypro);
  console.log(pro);
  res.json({ pro });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
