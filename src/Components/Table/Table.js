import React, { useEffect, useState } from "react";
import Cell from "./Cell";

import "./Table.css";

const Table = () => {
  const [maxDeliverys, setMaxDeliverys] = useState(8);
  const [listDeliv, setListDeliv] = useState([]);
  const [deliv, setDeliv] = useState(false);

  useEffect(() => {
    loadTimes();
  }, []);

  const horaInicio = 8;
  const horaFin = 20;

  const horasLaborales = horaFin - horaInicio;
  const cantHorarios = (horasLaborales * 60) / 30;

  let hora = horaInicio;

  const loadTimes = () => {
    setDeliv(true);

    const listHorarios =
      JSON.parse(window.localStorage.getItem("horarios")) || [];
    if (listHorarios.length === 0) {
      const data = [
        {
          id: 0,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 1,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 2,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 3,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 4,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 5,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 6,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 7,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 8,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 9,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 10,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 11,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 12,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 13,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 14,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 15,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 16,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 17,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 18,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 19,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 20,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 21,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 22,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
        {
          id: 23,
          inicio: hora,
          fin: (hora += 0.5),
          deliverys: 0,
          maxDeliverys: maxDeliverys,
          estado: "free",
        },
      ];

      window.localStorage.setItem("horarios", JSON.stringify(data));
    }

    setListDeliv(listHorarios);
  };

  const ChangeStateCard = (id, deliv) => {
    const act = [...listDeliv];

    for (let info of listDeliv) {
      if (info.id === id) {
        if (deliv === 8) {
          act[id] = {
            ...act[id],
            deliverys: deliv,
            estado: "full",
          };
        } else if (deliv > 0) {
          act[id] = {
            ...act[id],
            deliverys: deliv,
            estado: "using",
          };
        } else {
          act[id] = {
            ...act[id],
            deliverys: deliv,
            estado: "free",
          };
        }

        window.localStorage.setItem("horarios", JSON.stringify(act));
        return;
      }
    }
  };

  const Clear = () => {
    window.localStorage.clear();

    setDeliv(false);
  };

  return (
    <div>
      <div className="list-container">
        {deliv
          ? listDeliv.map((info) => (
              <Cell
                key={info.inicio}
                info={info}
                ChangeStateCard={ChangeStateCard}
              />
            ))
          : ""}
      </div>

      <div className="btn-section">
        <input
          type="button"
          value="Cargar Tarjetas"
          className="btn btn-load"
          onClick={loadTimes}
        />
        <input
          type="button"
          value="Vaciar"
          className="btn btn-clear"
          onClick={Clear}
        />
      </div>
    </div>
  );
};

export default Table;
