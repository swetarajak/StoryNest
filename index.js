import express from 'express';
import path from 'path';
import userRoute from './routes/user.routes.js'
const app  = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.get("/", (req,res) => {
    res.render("home");
});

app.use("/user", userRoute);
app.listen(PORT, () => console.log(`App is running at port ${PORT}`));
