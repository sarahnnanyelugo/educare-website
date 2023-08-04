import React, { useState } from "react";
import "./compare-features.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import FeaturesTable from "./FeaturesTable/FeaturesTable";
import {
  allTransactions,
  accountCredits,
  moneySpent,
  withdrawal,
  refund,
  regularPayments,
} from "../../../TestData";
export const CompareFeatures = () => {
  return (
    <div className="compare-features-container">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>Compare all features</p>
          </Accordion.Header>
          <Accordion.Body>
            <div className="col-md-10 offset-md-1">
              {" "}
              <FeaturesTable data={accountCredits} tableTitle="Transactions" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
