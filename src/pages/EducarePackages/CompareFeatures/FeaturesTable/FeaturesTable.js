import React, { useState, useEffect } from "react";
import "./features-table.scss";
import Table from "react-bootstrap/Table";

const FeaturesTable = (props) => {
  return (
    <>
      <div className="transactions-table-container col-md-12">
        <table className="col-md-12 col-12">
          <thead>
            <tr>
              {props.data.headers.map((item, index) => (
                  <th key={"feature_header_"+index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.data.map((item) => (
              <tr key={"feature_"+item.id}>
                <td>{item.name}</td>
                <td>
                  {" "}
                  {item.icon.type === "image" ? (
                    <img
                      className="   logo"
                      src={item.icon.content}
                      alt="Scholar"
                      width="100%"
                    />
                  ) : (
                    item.icon.content
                  )}
                </td>
                <td>
                  {" "}
                  {item.icon2.type === "image" ? (
                    <img
                      className="   logo"
                      src={item.icon2.content}
                      alt="Scholar"
                      width="100%"
                    />
                  ) : (
                    item.icon2.content
                  )}
                </td>
                <td>
                  {" "}
                  {item.icon3.type === "image" ? (
                    <img
                      className="   logo"
                      src={item.icon3.content}
                      alt="Scholar"
                      width="100%"
                    />
                  ) : (
                    item.icon3.content
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default FeaturesTable;
