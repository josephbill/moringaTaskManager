import React, {useState,useEffect} from "react";

const LandingPage = () => {
    const [hasError,setError] = useState(false);
    const [tasks,setTasks] = useState({});

    async function fetchData(){
        const res = await  fetch("http://localhost:5000/tasks/")
        res.json()
            .then(res => setTasks(res))
            .catch(err => setError(err));
    }

    useEffect(() => {
        fetchData();
    });

    return(
        <div>
          <span>{JSON.stringify(tasks)}</span>
        </div>
    )
}

export default LandingPage
