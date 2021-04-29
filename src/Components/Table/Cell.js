import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cell = ({ info, ChangeStateCard }) => {
  const [deliverys, setDeliverys] = useState(0);
  const [infoCell, setInfoCell] = useState({
    horaInicio: "",
    horaFin: "",
    deliverys: 0,
    estado: "",
  });
  // inicio: hora,
  //     fin: (hora += 0.5),
  //     deliverys: maxDeliverys,
  //     estado: "free",
  var horaInicio;
  var horaFin;

  if (info.inicio - Math.floor(info.inicio) === 0) {
    horaInicio = info.inicio + ":00";
  } else {
    horaInicio = Math.floor(info.inicio) + ":30";
  }

  if (info.fin - Math.floor(info.fin) === 0) {
    horaFin = info.fin + ":00";
  } else {
    horaFin = Math.floor(info.fin) + ":30";
  }

  useEffect(() => {
    SetCell();
  }, []);

  const SetCell = () => {
    setInfoCell({
      ...infoCell,
      horaInicio,
      horaFin,
      deliverys: info.deliverys,
      estado: info.estado,
    });
  };

  const AddDelivery = () => {
    const cantDelev = infoCell.deliverys + 1;
    if (cantDelev > 8) return;
    else if (cantDelev === info.maxDeliverys) {
      setInfoCell({
        ...infoCell,
        deliverys: cantDelev,
        estado: "full",
      });
    } else {
      setInfoCell({
        ...infoCell,
        deliverys: cantDelev,
        estado: "using",
      });
    }

    ChangeStateCard(info.id, cantDelev);
  };

  const RemoveDelivery = () => {
    const cantDelev = infoCell.deliverys - 1;
    if (cantDelev === -1) return;
    else if (cantDelev === 0) {
      setInfoCell({
        ...infoCell,
        deliverys: cantDelev,
        estado: "free",
      });
    } else {
      setInfoCell({
        ...infoCell,
        deliverys: cantDelev,
        estado: "using",
      });
    }

    ChangeStateCard(info.id, cantDelev);
  };

  return (
    <div className={`card ${infoCell.estado}`}>
      <div className="top-info">
        <p title="Hora de Inicio">{horaInicio}</p>
        <p title="Hora de Fin">{horaFin}</p>
      </div>
      <div className="delivery">
        <FaMinus onClick={RemoveDelivery} />
        <p>{infoCell.deliverys}</p>
        <FaPlus onClick={AddDelivery} />
      </div>
    </div>
  );
};

export default Cell;
