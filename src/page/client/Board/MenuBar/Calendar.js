import React from "react";
import { makeCalendar } from "./function/utils";
import { CalendarDay, CalendarToday } from "./css/Calendar";

const App = ({data}) => {
    let date = data.getFullYear() + "-" + data.getMonth() + "-";

    let today = new Date();
    today = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    //console.log(date, today);

    let res = makeCalendar(data.getFullYear(), data.getMonth());
    
    return (
        <div style={{display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", height: "100%", padding: "5px 10px 0px 10px"}}>
            {
            res.map((item, index) => (
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", alignItems:"center"}}>
                {
                    item.map((day) =>(
                        (index === 0 && day.day > 20) || ((index === 4 || index === 5) && day.day < 14) ?  <CalendarDay day={day}>{day.day}</CalendarDay> :
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