import React, {useEffect, useState} from "react";
import "./compare-features.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import FeaturesTable from "./FeaturesTable/FeaturesTable";
import { businessFeatures } from "../../../TestData";
export const CompareFeatures = (props) => {
  const [webPackages, setWebPackages] = useState([]);
  const [features, setFeatures] = useState({
    data: [],
    headers: [''],
  });
  useEffect(()=>{
    setWebPackages(props.webPackages);
    let tempFeatures = {
      data: [],
      headers: [''],
    };
    let indexx = 1;
    props.webPackages.forEach(function (item:any) {
      tempFeatures.headers.push(item.name);
      item.features.forEach(function (item:any) {
        if (!tempFeatures.data.find((x:any)=>x.name==item)){
          tempFeatures.data.push({
            id: tempFeatures.data.length+1,
            name: item,
            icon: {
              content: indexx<=1?"/static/media/ticked.1e0e3387fb9116e02ce1468233b36e41.svg":"/static/media/cancel.1b42f06ea77a6c46e2765883a20a04a3.svg",
              type: "image"
            },
            icon2: {
              content: indexx<=2?"/static/media/ticked.1e0e3387fb9116e02ce1468233b36e41.svg":"/static/media/cancel.1b42f06ea77a6c46e2765883a20a04a3.svg",
              type: "image"
            },
            icon3: {
              content: indexx<=3?"/static/media/ticked.1e0e3387fb9116e02ce1468233b36e41.svg":"/static/media/cancel.1b42f06ea77a6c46e2765883a20a04a3.svg",
              type: "image"
            },
            icon4: {
              content: indexx<=4?"/static/media/ticked.1e0e3387fb9116e02ce1468233b36e41.svg":"/static/media/cancel.1b42f06ea77a6c46e2765883a20a04a3.svg",
              type: "image"
            },
          })
        }
      });
      indexx++;
    });
    setFeatures(tempFeatures)
  }, [props.webPackages]);

  return (
      <>
      {features.data.length>0 && <div className="compare-features-container">
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p>Compare all features</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="col-md-10 offset-md-1">
                {" "}
                <FeaturesTable
                  data={features}
                  tableTitle="Transactions"
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>}
    </>
  );
};
