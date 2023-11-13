import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log('server on port');
  
};

main();






