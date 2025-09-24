import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    return (
        <>
            <Button
                onClick={() => {
                    questionType === "multiple_choice_question" ?
                        setQuestionType("short_answer_question")
                    :   setQuestionType("multiple_choice_question");
                }}
            ></Button>
            <div>
                {questionType === "multiple_choice_question" ?
                    <p>Multiple Choice</p>
                :   <p>Short Answer</p>}
            </div>
        </>
    );
}
