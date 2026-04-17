from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

students = [
    {"id": 1, "name": "Mark", "age": 20, "course": "IT", "email": "mark@example.com"},
    {"id": 2, "name": "Agnes", "age": 22, "course": "SWE", "email": "agnes@example.com"},
    {"id": 3, "name": "Yassir", "age": 21, "course": "Cybersecurity", "email": "yassir@example.com"},
    {"id": 4, "name": "Martin", "age": 23, "course": "Data Science", "email": "martin@example.com"}
    ]
next_id = 5

# GET all students
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

# GET single student by ID
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student = next((s for s in students if s['id'] == id), None)
    if student:
        return jsonify(student), 200
    return jsonify({"error": "Student not found"}), 404


# CREATE a new student
@app.route('/students', methods=['POST'])
def add_student():
    data = request.json
    new_student = {
        "id": len(students) + 1,
        "name": data["name"],
        "age": int(data["age"]),
        "course": data["course"],
        "email": data["email"]
    }
    students.append(new_student)
    return jsonify(new_student), 201

# UPDATE a student by ID
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    student = next((s for s in students if s['id'] == id), None)
    if not student:
        return jsonify({"error": "Student not found"}), 404

    data = request.json
    student['name'] = data.get('name', student['name'])
    student['age'] = int(data.get('age', student['age']))
    student['course'] = data.get('course', student['course'])
    student['email'] = data.get('email', student['email'])
    return jsonify(student), 200

# DELETE a student by ID
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [s for s in students if s['id'] != id]
    return {"message": "Student deleted successfully"}, 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)