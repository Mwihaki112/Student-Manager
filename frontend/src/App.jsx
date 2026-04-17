import { useState, useEffect} from 'react'
import "./App.css"

function App(){
    const API = "http://127.0.0.1:5000/students";

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null);
    const [searchId, setSearchId] = useState("");
    const [singleStudent, setSingleStudent] = useState(null);

    // Fetch students from Flask
    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.log(err));
    }, []);

    // ADD student
    const addStudent = () => {
        fetch(API, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    course,
                    age,
                    email
                }),
            })
            .then((res) => res.json())
            .then((newStudent) => {
                setStudents([...students, newStudent]);

                setName("");
                setAge("");
                setCourse("");
                setEmail("");
            });
            
    };

    // DELETE
    const deleteStudent = (id) => {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        })
        .then(() => {setStudents(students.filter((s) => s.id !== id));
        });
    };

    // Start Edit
    const startEdit = (student) => {
        setEditId(student.id);
        setName(student.name);
        setCourse(student.course);
        setAge(student.age);
        setEmail(student.email);
    };

    // Update
    const updateStudent = () => {
        fetch(`${API}/${editId}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                course,
                age,
                email
            }),
        })
        .then((res) => res.json())
        .then((updateStudent) => {
            setStudents(
                students.map((s) => s.id === editId ? updateStudent : s)
            );

            setEditId(null);
            setName("");
            setCourse("");
            setAge("");
            setEmail("");
        });
    };

    // GET one student
    const getStudentById = () => {
        fetch(`${API}/${searchId}`)
        .then((res) => res.json())
        .then((data) => setSingleStudent(data))
        .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <h1 className="heading">Student Manager</h1>

            {/* Search single student */}
            <div className="form">
                <input
                className="input"
                placeholder="Enter Student ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                />
                <button className="btn" onClick={getStudentById}>Get Student</button>
            </div>

            {singleStudent && (
                <div className = "single">
                    {singleStudent.error ? "Student not found" : 
                    `${singleStudent.name} - ${singleStudent.course} - Age: ${singleStudent.age} - ${singleStudent.email}`
                    }
                </div>    
            )}
            

            {/*FORM*/}
        <div className="form">
            <input
            className ="input" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            className="input"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            />

            <input
            className="input"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
            
            <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            {editId ? (
                <>
                <button className="btn update" onClick={updateStudent}>Update Student</button>
                <button className="btn" onClick={() => {
                    setEditId(null)
                    setName("");
                    setCourse("");
                    setAge("");
                    setEmail("")}}>Cancel</button>
                </>    
            ) : (
            <button className="btn" onClick={addStudent}>Add Student</button>
            )}
        </div>    

        <ul className="list">
            {students.map((student) => (
                <li key = {student.id} className="card">
                    <div>
                    {student.name} - {student.course} - Age: {student.age} - {student.email}
                    </div>

                    <div className="actions">
                        <button className="editBtn" 
                        onClick={() =>
                            startEdit(student)}>Edit</button>
                        <button className="deleteBtn" onClick={() => deleteStudent(student.id)}>Delete</button>
                        
                    </div>
                </li>
                ))}
            </ul>
        </div>    
    );
}

export default App;
