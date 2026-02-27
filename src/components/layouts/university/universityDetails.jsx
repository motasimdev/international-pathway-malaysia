import { useParams, Link } from "react-router";
import { FaCalendarAlt } from "react-icons/fa";
import PBase from "../../PBase";
import { FaAngleRight } from "react-icons/fa6";

const universityDetails = () => {
  return (
    <>
      <section className="container mx-auto px-4 lg:pt-5 lg:pb-10">
        {/* ======= bradcumb ======= */}
        <div className="flex items-center">
          <Link to={"/blogs"}>
            <PBase text={"Blog"} className={"py-5"} />
          </Link>
          <FaAngleRight />
          <PBase text={`${"id"}`} className={"cursor-pointer"} />
        </div>
        {/* ======= bradcumb ======= */}
      </section>
    </>
  );
};

export default universityDetails;
