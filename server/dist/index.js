import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.send({ "message": "It is working" });
});
app.listen(PORT, function (err) {
    if (err)
        console.log(err);
    console.log(`Server is running on port ${PORT}`);
});
