import React, { useState } from "react";
import Sanitary from "../public/data/Border_Final_join.json";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  const [constructionProject, setConstructionProject] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL") || "";
    li = ul.getElementsByTagName("li") || "";

    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


  console.log(constructionProject)
  return (
    <div>
      <div
        className="flex justify-between w-[250px] max-w-xs"
        onClick={() => setShowOptions(!showOptions)}
      >
        <input
          type="text"
          id="myInput"
          onChange={() => myFunction()}
          placeholder="Search by name.."
          className="w-[250px] max-w-xs text-gray-600 p-1 outline-none m-1 mb-2"
        />
        <IoIosArrowDown className="mt-3 " />
      </div>
      {showOptions && (
        <ul id="myUL" style={{ height: "300px", overflowY: "scroll" }}>
          {Sanitary.features.map((item) => {
            return (
              <>
                <li
                  className="cursor-pointer hover:bg-[#9d3039]/10 w-[250px] max-w-xs text-sm p-1"
                  onClick={() => setConstructionProject(item.properties.coid)}
                >
                  {item.properties.co_name_eng}
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
