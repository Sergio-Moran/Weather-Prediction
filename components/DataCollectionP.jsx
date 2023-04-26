/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "../public/css/Table.module.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { perceptron } from "../js/calculater";

const DataCollectionP = () => {
  const [weights, setWeights] = useState({
    weight_one: 0,
    weight_two: 0,
  });
  const [response, setResponse] = useState();

  const hadleChange = (name, values) => {
    setWeights({
      ...weights,
      [name]: values,
    });
  };

  const calculate = () => {
    let result = perceptron(weights.weight_one, weights.weight_two);
    setResponse(result);
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
        title="Puerta Logica AND"
        style={{ width: "55rem", marginBottom: "2em" }}
      >
        <div className="card">
          <div className="card-container yellow-container overflow-hidden">
            <div className="flex">
              <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round grap-2">
                <label htmlFor="input1">Entrada 1 </label>
                <InputText
                  type="number"
                  id="weight_one"
                  name="weight_one"
                  onChange={(e) => hadleChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round grap-2">
                <label htmlFor="input2">Entrada 2 </label>
                <InputText
                  type="number"
                  id="weight_two"
                  name="weight_two"
                  onChange={(e) => hadleChange(e.target.name, e.target.value)}
                />
              </div>
            </div>
            <div className="flex">
            <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round grap-2">
                <label htmlFor="result">Resultado:</label>
                <InputText
                  type="number"
                  id="result"
                  name="result"
                  value={response ? 1 : 0}
                  readOnly
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round">
                <Button
                  type="button"
                  label="Calcular"
                  className="mt-2"
                  onClick={calculate}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DataCollectionP;
