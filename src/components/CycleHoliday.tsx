import React, { useState } from "react";
import { Button } from "react-bootstrap";

// 🎆 🍀 ✝️ 🎂 🎅 sorted by date
// 🎂 🎅 ✝️ 🎆 🍀 sorted alphabetically
export function CycleHoliday(): React.JSX.Element {
    enum Holiday {
        Birthday = "🎂",
        Christmas = "🎅",
        Easter = "✝️",
        NewYears = "🎆",
        StPatricks = "🍀",
    }
    const [currHoliday, setHoliday] = useState<Holiday>(Holiday.Birthday);
    function nextAlphabetically(currentHoliday: Holiday): Holiday {
        switch (currentHoliday) {
            case Holiday.Birthday:
                return Holiday.Christmas;
            case Holiday.Christmas:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.NewYears;
            case Holiday.NewYears:
                return Holiday.StPatricks;
            case Holiday.StPatricks:
                return Holiday.Birthday;
            default:
                throw new Error("Unexpected holiday");
        }
    }

    function nextByDate(currentHoliday: Holiday): Holiday {
        switch (currentHoliday) {
            case Holiday.NewYears:
                return Holiday.StPatricks;
            case Holiday.StPatricks:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.Birthday;
            case Holiday.Birthday:
                return Holiday.Christmas;
            case Holiday.Christmas:
                return Holiday.NewYears;
            default:
                throw new Error("Unexpected holiday");
        }
    }
    return (
        <>
            <div>
                <p>Current holiday: {currHoliday}</p>
                <Button
                    onClick={() => {
                        setHoliday(nextAlphabetically(currHoliday));
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(nextByDate(currHoliday));
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </>
    );
}
