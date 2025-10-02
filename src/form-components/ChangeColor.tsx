import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "cyan",
        "yellow",
        "purple",
        "pink",
    ];
    const [selectedColor, setColor] = useState<string>("red");
    function changeColor(e: React.ChangeEvent<HTMLInputElement>) {
        setColor(e.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Group controlId="favoriteColors">
                    <Form.Label>What is your favorite color?</Form.Label>
                    {COLORS.map((color: string) => (
                        <Form.Check
                            style={{ backgroundColor: color }}
                            inline
                            type="radio"
                            name="colors"
                            label={color}
                            key={color}
                            value={color}
                            onChange={changeColor}
                        />
                    ))}
                </Form.Group>
                <a>You have chosen </a>
                <a
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </a>
            </div>
        </div>
    );
}
