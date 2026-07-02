import { useEffect, useState } from "react";

function App() {
    const [status, setStatus] = useState("");

    useEffect(() => {
        fetch("/api/health/")
            .then((response) => response.json())
            .then((data) => setStatus(data.status))
            .catch((error) =>
                console.error("Error fetching health check:", error),
            );
    }, []);

    return (
        <>
            <h1>Fullstack Starter</h1>
            <p>Backend Status: {status || "Loading..."}</p>
        </>
    );
}

export default App;
