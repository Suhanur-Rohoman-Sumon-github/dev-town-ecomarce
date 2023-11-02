import { useState } from "react";
import SingleMapData from "./SingleMapData";


const MapData = ({datas}) => {
    console.log(datas)
   // Pagination settings
   const itemsPerPage = 3;
   const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination parameters
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = datas.slice(indexOfFirstItem, indexOfLastItem);
  // Calculate total number of pages
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  // Pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`${
          currentPage === i
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        } py-2 px-4 mr-2 rounded focus:outline-none`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }
    return (
       <>
        <div className="md:grid grid-cols-3 gap-4 mt-48 hover:gap-7 md:mt-0">
            {currentData.map(data=><SingleMapData key={data.id} data={data}></SingleMapData>)}
        </div>
          {/* Pagination buttons */}
      <div className="flex justify-center mt-4 space-x-2">
        {paginationButtons}
      </div>
       </>
    );
};

export default MapData;