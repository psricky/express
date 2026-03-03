const express = require('express');
const router = express.Router();

// Sample data for students and courses
const students = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" }
];

router.get('/students', (req, res)=>{
    
    const studentsList = students.map(student => {
        
        return  student.name ;
        
    });
   let newStudentsList = studentsList.join(', ');
    res.json(`Students: ${newStudentsList}`);
});

router.get('/students/:id', (req, res) => {
    const studentId=parseInt(req.params.id);
    const idList=students.map(student => {
        return student.id;
    });
    if(idList.includes(studentId)){
        const student = students.find(s => s.id === studentId);
        res.send(`Student: ${student.name}`);
    } else {
        res.status(404).send('"Student not found"');
    }
});



module.exports = router;