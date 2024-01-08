import { useEffect, useState } from "react";
import Homepage from "./Homepage/Hompage";
import "./App.css";

function App() {
  const userId = "0";
  const [entries, seEntries] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/journalEntries/${userId}`
      );
      const json = await response.json();
      setEntries(json);
    } catch (error) {}
  };

  useEffect(() => getData, []);
  console.log(entries);

  const sortedEntries = entries?.sort(
    (a, b) => newDate(a.date) - new Date(b.date)
  );

  return (
    <>
      <div className="app">
        <Homepage />
      </div>
    </>
  );
}

export default App;
