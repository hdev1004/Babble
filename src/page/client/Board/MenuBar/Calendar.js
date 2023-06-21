import React from "react";
import { makeCalendar } from "./function/utils";
import { CalendarDay, CalendarToday } from "./css/Calendar";

const App = ({data}) => {
    let date = data.getFullYear() + "-" + data.getMonth() + "-";

    let today = new Date();
    today = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    console.log(date, today);

    let res = makeCalendar(data.getFullYear(), data.getMonth());
    
    return (
        <div style={{display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", height: "100%"}}>
            {
            res.map((item) => (
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", alignItems:"center"}}>
                {
                    item.map((day) =>(
                        date + day.day === today ? (
                            <CalendarToday>{day.day}</CalendarToday>
                        ) : (
                            <CalendarDay day={day}>{day.day}</CalendarDay>
                        )
                    ))
                }
                </div>
            ))
            }
        </div>
    )
}

export default App;