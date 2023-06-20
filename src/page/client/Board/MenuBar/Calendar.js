import React from "react";

const App = ({data}) => {
    console.log(data);
    return (
        <div>
            {
            data.map((item) => (
                <div style={{display: "grid", flexDirection: "row", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
                {
                    item.map((day) =>(
                        <div style={{textAlign: "center", height: "35px", lineHeight: "35px"}}>{day}</div>
                    ))
                }
                </div>
            ))
            }
        </div>
    )
}

export default App;