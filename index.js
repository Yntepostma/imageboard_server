const express = require("express");

const app = express();

const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

app.use("/users", userRouter);
app.use("/images", imageRouter);

const PORT = process.env.port || 4007;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
