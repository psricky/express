const express = require('express');
const router = express.Router();

// Sample data for students and courses
const courses = [
{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get('/courses', (req, res) => {
    const coursesList = courses.map(course => {
        return course.name;
    });
    let newCoursesList = coursesList.join(', ');
    res.json(`Courses: ${newCoursesList}`);
});

router.get('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    if (!courses.find(course => course.id === courseId)) {
        return res.status(404).send('"Course not found"');
    }
    const course = courses.find(c => c.id === courseId);  
    res.send(`"Course: ${course.name}, Description: ${course.description}"`);
});


module.exports = router;