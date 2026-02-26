import React, { useMemo, useState } from "react";
import Container from "../Container";
import universitiesandcourses from "../../data/universitiesandcourses.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchItems from "../SearchItems";

const University = () => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("course");

  const filteredUniversities = useMemo(() => {
    if (!searchText) return universitiesandcourses.universitiesandcourses;

    return universitiesandcourses.universitiesandcourses.filter((item) => {
      if (searchType === "name") {
        return item.name.toLowerCase().includes(searchText);
      }
      if (searchType === "course") {
        return item.courses.some((course) =>
          course.toLowerCase().includes(searchText),
        );
      }
      return true;
    });
  }, [searchText, searchType]);

  // search by name
  const handleSearch = (e, type) => {
    setSearchType(type);
    setSearchText(e.target.value.trim().toLowerCase());
  };
  return (
    <>
      <section className="py-5 lg:py-10">
        <Container>
          <div className="p-6 max-w-6xl mx-auto">
            {/* Search & Filter */}

            <div className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
              {/* ======= search name ======== */}
              <div className="relative  md:w-1/2">
                <label className="text-gray-500">Search by University</label>

                <input
                  onChange={(e) => handleSearch(e, "name")}
                  type="text"
                  placeholder="Search by university"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none"
                />
              </div>
              {/* ======= search name ======== */}

              {/* ======= search coures ======== */}
              <div className="relative  md:w-1/2">
                <label className="text-gray-500">Search by Course</label>

                <input
                  onChange={(e) => handleSearch(e, "course")}
                  type="text"
                  placeholder="Search by course"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none"
                />
              </div>

              {/* ======= search coures ======== */}

              {/* ========== dropdown menus ===== */}
              {/* <select className="border border-gray-300 rounded px-4 py-2 w-full md:h-10 md:w-[40%] focus:outline-none cursor-pointer">
                <option
                  value=""
                  disabled
                  selected
                  className="text-xs text-white"
                >
                  {" "}
                  Choose Your Course
                </option>
                {universitiesandcourses.universitiesandcourses.map((course) => (
                  <option className="cursor-pointer" key={course.courses}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={course.courses}
                    />
                    {course.courses}
                  </option>
                ))}
              </select> */}
              {/* ========== dropdown menus ===== */}
            </div>

            {/* University List */}
            <div className="space-y-4">
              {filteredUniversities.map((uni) => (
                <div
                  key={uni.id}
                  className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start bg-secondary border border-gray-300 rounded p-4 hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-24 h-24 rounded object-cover mb-4 md:mb-0 md:mr-4"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-white">
                      {uni.name}
                    </h2>
                    <p className="italic text-white">
                      {uni.courses.join(", ")}
                    </p>

                    <div className="flex items-center justify-center md:justify-normal text-white mt-1">
                      <FaMapMarkerAlt className="mr-1 text-white" />
                      {uni.country} , {uni.city}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col space-y-2 mt-4 md:mt-0 md:ml-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                      Apply Now
                    </button>
                    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default University;
