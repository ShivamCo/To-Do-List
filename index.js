import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs")
})

 app.post("/", (req, res) => {

     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     const d = new Date();
      const today = d.getDate();
      const dayName = days[d.getDay()];
      const monthName = months[d.getMonth()];

      const exactDate = `${dayName} ${today} ${monthName}`

     res.render("views/index.ejs", {
          today: exactDate,


     })
 })



var taskList = [];

app.post("/submit", (req, res) => {
    
    
    const currentTask = req.body["testTask"];
    if (taskList.includes(currentTask) != true ){
        taskList.push(currentTask)
    
    
    
    
    
    res.render("index.ejs", {
    tasks: taskList,
    length: taskList.length
    })
    }
});



app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});
