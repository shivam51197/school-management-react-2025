// var mongoClient = require("mongodb").MongoClient;
// var express = require("express");
// var cors =require("cors");

// var app = express();
// app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({extended:true}));

// var connectionString = "mongodb://127.0.0.1:27017";

// app.get('/get-admin',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         database.collection("tbladmin").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         });
//     });
    
// });

// app.post('/post-admin',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         const studentsCollection = database.collection("tblstudents");

//         const studentData = {
//             name: req.body.name,
//             age: req.body.age,
//             class: req.body.class,
//             gender: req.body.gender,
//             contact: req.body.contact
//         };
//         const result =  studentsCollection.insertOne(studentData);
//         res.status(200).json({ message: "Student added successfully", studentId: result.insertedId });
// });
// });

// app.get('/get-student',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         database.collection("tblstudent").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         });
//     });
    
// });

// app.get('/get-class',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         database.collection("tblclass").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         });
//     });
    
// });

// app.get('/get-subject',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         database.collection("tblsubject").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         });
//     });
    
// });

// app.get('/get-teacher',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         database.collection("tblteacher").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         });
//     });
    
// });

// app.get('/get-fees',(req, res)=>{

//     mongoClient.connect(connectionString).then(connectionObject=>{
//         var database=connectionObject.db("schooldb");
//         database.collection("tblfees").find({}).toArray().then(documents=>{
//             res.send(documents);
//             res.end();
//         });
//     });
    
// });

// app.listen(5050);
// console.log(`Server Started: http://127.0.0.1:5050 `);

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const connectionString = "mongodb://127.0.0.1:27017";
const mongoClient = new MongoClient(connectionString);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to get database instance
async function getDatabase() {
    await mongoClient.connect();
    return mongoClient.db("schooldb");
}

// GET all admin data
app.get("/get-admin", async (req, res) => {
    try {
        const database = await getDatabase();
        const admins = await database.collection("tbladmin").find({}).toArray();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch admin data", details: error.message });
    }
});

// POST student data (by admin)
app.post("/post-admin", async (req, res) => {
    try {
        const database = await getDatabase();
        const studentsCollection = database.collection("tblstudents");

        const studentData = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            contact: req.body.contact,
        };

        const result = await studentsCollection.insertOne(studentData);
        res.status(201).json({ message: "Student added successfully", studentId: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: "Failed to add student", details: error.message });
    }
});

// GET all students
app.get("/get-student", async (req, res) => {
    try {
        const database = await getDatabase();
        const students = await database.collection("tblstudents").find({}).toArray();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch students", details: error.message });
    }
});

// app.get("/get-login", async (req, res) => {
//     try {
//         const database = await getDatabase();
//         const students = await database.collection("tblstudents").find({}).toArray();
//         res.json(students);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch students", details: error.message });
//     }

app.post("/get-login", async (req, res) => {
    const { name } = req.body;
    const user = users.find((item) => item.name === name); // Search user
    
    if (user) {
        res.json({ success: true, user });
    } else {
        res.json({ success: false, message: "Invalid Username" });
    }
});

// GET all classes
app.get("/get-class", async (req, res) => {
    try {
        const database = await getDatabase();
        const classes = await database.collection("tblclass").find({}).toArray();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch class data", details: error.message });
    }
});

// GET all subjects
app.get("/get-subject", async (req, res) => {
    try {
        const database = await getDatabase();
        const subjects = await database.collection("tblsubject").find({}).toArray();
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch subjects", details: error.message });
    }
});

// GET all teachers
app.get("/get-teacher", async (req, res) => {
    try {
        const database = await getDatabase();
        const teachers = await database.collection("tblteacher").find({}).toArray();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch teachers", details: error.message });
    }
});

// GET all fees
app.get("/get-fees", async (req, res) => {
    try {
        const database = await getDatabase();
        const fees = await database.collection("tblfees").find({}).toArray();
        res.json(fees);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch fees", details: error.message });
    }
});

// Start Server

app.listen(5050);
console.log(`Server Started: http://127.0.0.1:5050`);
