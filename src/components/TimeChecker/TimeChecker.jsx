import { useState, useEffect } from "react";
import "/src/components/TimeChecker/TimeChecker.css";

const TimeChecker = () => {
  const [createdActivities, setCreatedActivities] = useState([]);
  const [actualTracking, setActualTracking] = useState(null);
  const [counter, setCounter] = useState(0); // Estado para almacenar el contador

  const createNewActivity = e => {
    if (e.key === "Enter") {
      if(!e.target.value.trim()) return

      const newActivity = {
        content: e.target.value,
        timeExpent: 0,
      };
      setCreatedActivities(prevActivities => [...prevActivities, newActivity].reverse());
      e.target.value = "";
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1); // Actualizar el contador en el estado
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="task-manager">
        <input
          type="text"
          placeholder="New activity to track"
          onKeyUp={createNewActivity}
        />
        <div className="task-manager__task-container">
          {createdActivities.map((act, index) => (
            <div key={index} className="task-manger__task">
              <p>{act.content}</p>
              <div className="items">
                <button>TRACK</button>
                <p>{counter}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TimeChecker;
