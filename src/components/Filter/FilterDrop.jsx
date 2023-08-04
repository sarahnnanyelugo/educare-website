// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { DropDownList } from "@progress/kendo-react-dropdowns";
// import "./filter-drop.scss";
// import Arrow from "../../assets/images/filter-arrow.png";

// const allData = [
//   {
//     id: 1,
//     text: "Newest first",
//   },
//   {
//     id: 2,
//     text: "Oldest first",
//   },
//   {
//     id: 3,
//     text: "Upcoming first",
//   },
//   {
//     id: 4,
//     text: "Reset",
//   },
// ];
// export const FilterDrop = () => {
//   const [data, setData] = React.useState(allData.slice());
//   const filterData = (filter) => {
//     const data = allData.slice();
//     // return filterBy(data, filter);
//   };
//   const filterChange = (event) => {
//     setData(filterData(event.filter));
//   };
//   return (
//     <div className="flexy flexyM">
//       <img className="filter-arrow" src={Arrow} alt="Scholar" />{" "}
//       <DropDownList
//         data={data}
//         textField="text"
//         filterable={true}
//         onFilterChange={filterChange}
//       />
//     </div>
//   );
// };
