/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import "../public/css/Table.module.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { weatherPerceptron } from "../js/calculater";
import Image from "next/image";

const Login = () => {
  const [weights, setWeights] = useState({
    weight_one: 0,
    weight_two: 0,
  });

  const toast = useRef(null);

  const [visible, setVisible] = useState(false);
  const [imgGif, setImgGif] = useState(false);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Resultado",
      detail: "El clima para el entrenamiento es bueno! ✔️🚵🏼‍♂️",
      life: 3000,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Resultado",
      detail: "El clima para el entrenamiento es malo ❌🚵🏼‍♂️",
      life: 3000,
    });
  };

  const hadleChange = (name, values) => {
    setWeights({
      ...weights,
      [name]: values,
    });
  };

  const calculate = () => {
    let result = weatherPerceptron(weights.weight_one, weights.weight_two);
    setVisible(true);
    setImgGif(result);
    console.log(imgGif);
    if (result) {
      return showSuccess();
    } else {
      return showError();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        height: "100vh",
      }}
    >
      <Card
        title="Clima ☁️"
        style={{ width: "55rem", marginBottom: "2em" }}
      >
        <div className="card">
          <div className="card-container yellow-container overflow-hidden">
            <div className="flex">
              <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round gap-2">
              <label htmlFor="temperature">Temperatura °C</label>
                <InputText
                  type="number"
                  id="weight_one"
                  name="weight_one"
                  onChange={(e) => hadleChange(e.target.name, e.target.value)}
                />
              </div>
              {/* <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round"></div> */}
              <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round gap-2">
              <label htmlFor="humidity">% Humedad</label>
                <InputText
                  type="number"
                  id="weight_two"
                  name="weight_two"
                  onChange={(e) => hadleChange(e.target.name, e.target.value)}
                />
              </div>
            </div>
            <div className="flex">
              <Toast ref={toast} />
              <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round">
                <Button
                  type="button"
                  label="Calcular"
                  severity="success"
                  className="mt-2"
                  onClick={calculate}
                />
                <Dialog
                  header="Resultado"
                  visible={visible}
                  onHide={() => setVisible(false)}
                  style={{ width: "50vw" }}
                  breakpoints={{ "960px": "75vw", "641px": "100vw" }}
                >
                  <Image
                    src={
                      imgGif
                        ? "https://media.tenor.com/Qc90hq71WI4AAAAd/cycling-bicycle.gif"
                        : "https://icon-library.com/images/weather-icon-gif/weather-icon-gif-26.jpg"
                    }
                    layout={"responsive"}
                    height={50}
                    width={50}
                    alt={`!`}
                    unoptimized={true}
                  />
                  <p className="m-0" hidden={imgGif}>
                    El clima no es optimo para entrenar el día de hoy
                  </p>
                  <p className="m-0" hidden={!imgGif}>
                    El clima es optimo para entrenar el día de hoy!
                  </p>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
