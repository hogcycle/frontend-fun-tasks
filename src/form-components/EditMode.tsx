import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function changeMode(e: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(e.target.checked);
    }

    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(e.target.value);
    }

    return (
        <>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode-check"
                    checked={isEditMode}
                    onChange={changeMode}
                />
            </div>
            <div>
                {isEditMode ?
                    <div>
                        <h3>Edit Mode</h3>
                        <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Check
                                type="switch"
                                id="is-happy-check"
                                label="Are you a student?"
                                checked={isStudent}
                                onChange={(e) => {
                                    setStudent(e.target.checked);
                                }}
                            />
                            <Form.Label>What is your name?</Form.Label>
                            <Form.Control
                                type="text"
                                value={studentName}
                                onChange={changeName}
                            />
                        </Form.Group>
                    </div>
                :   <div>
                        <p>
                            {studentName} {isStudent ? "is" : "is not"} a
                            student
                        </p>
                    </div>
                }
            </div>
        </>
    );
}
