import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [hidden, setHidden] = useState<boolean>(true);
    return (
        <>
            <Button
                onClick={() => {
                    setHidden(false);
                }}
            >
                Reveal answer
            </Button>
            <div>
                {hidden ?
                    <p>Click the button to reveal the answer</p>
                :   <p>42</p>}
            </div>
        </>
    );
}
