import app from "./src/app.js";
import dotenv from 'dotenv'
dotenv.config()

app.listen(process.env.PORT || 4000, () => {
  console.log(`server running port http://localhost:${process.env.PORT}`);
});
