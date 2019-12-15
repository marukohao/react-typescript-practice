import * as React from "react";

function CustomDate () {
    const [date, setDate] = React.useState("");
    
    let handleClick = () => {
      setDate(new Date().toTimeString());
    };

    return (
      <div>
          {date}
          <button onClick={handleClick}>Get the Date</button>
      </div>
    )
}



export default CustomDate;