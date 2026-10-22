// ReservationList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/reservations/", { withCredentials: true })
      .then((res) => setReservations(res.data))
      .catch((err) => {
        if (err.response?.status === 403) {
          setError("You are not authorized to view this.");
        } else {
          setError("Something went wrong.");
        }
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {reservations.map((r) => (
        <li key={r.id}>{r.id}</li>
      ))}
    </ul>
  );
}

export default ReservationList;