import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit", (uname, password) => {
  console.log("form submitted");
  console.log(`user name: ${uname}`);
  console.log(`user password: ${password}`);
});

form.emit("submit", "aditya.25b01011070@.ac.in","9528300863🔢");
