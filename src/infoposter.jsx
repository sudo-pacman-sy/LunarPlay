import PropTypes from "prop-types";
import { useState } from "react";

function InfoPoster({ backdrop, title }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div id="poster" className="relative h-[490px] w-full">
      <div className="absolute left-0 top-0 h-[550px] w-full bg-[#111111] ">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt={title}
          className="max-h-[550px] min-w-[1310px] max-w-[1310px] px-12 ml-2 object-contain object-fill object-center rounded-xl brightness-110"
          onLoad={() => {
            setIsLoading(true);
          }}
        />
        {isLoading && (
          <div className="absolute h-[550px] w-[1300px] top-0 left-0 pl-12 overflow-y-hidden ">
            <div
              className="h-[670px] w-[1230px] "
              style={{
                background:
                  "linear-gradient(90deg,#111111 0,rgba(17,17,17,.986) .97%,rgba(17,17,17,.945) 2.07833333%,rgba(17,17,17,.883) 3.29666667%,rgba(17,17,17,.803) 4.60166667%,rgba(17,17,17,.711) 5.96666667%,rgba(17,17,17,.61) 7.365%,rgba(17,17,17,.504) 8.77166667%,rgba(17,17,17,.398) 10.16%,rgba(17,17,17,.296) 11.505%,rgba(17,17,17,.203) 12.78%,rgba(17,17,17,.122) 13.95833333%,rgba(17,17,17,.059) 15.01666667%,rgba(17,17,17,.016) 15.92833333%,rgba(17,17,17,0) 16.66666667%,rgba(17,17,17,0) 83.33333333%,rgba(17,17,17,.016) 84.07166667%,rgba(17,17,17,.059) 84.98333333%,rgba(17,17,17,.122) 86.04166667%,rgba(17,17,17,.203) 87.22%,rgba(17,17,17,.296) 88.495%,rgba(17,17,17,.398) 89.84%,rgba(17,17,17,.504) 91.22833333%,rgba(17,17,17,.61) 92.635%,rgba(17,17,17,.711) 94.03333333%,rgba(17,17,17,.803) 95.39833333%,rgba(17,17,17,.883) 96.70333333%,rgba(17,17,17,.945) 97.92166667%,rgba(17,17,17,.986) 99.03%,#111111),linear-gradient(0deg,#111111 0,#111111 21.48148148%,rgba(17,17,17,.986) 23.63703704%,rgba(17,17,17,.945) 26.1%,rgba(17,17,17,.883) 28.80740741%,rgba(17,17,17,.803) 31.70740741%,rgba(17,17,17,.711) 34.74074074%,rgba(17,17,17,.61) 37.84814815%,rgba(17,17,17,.504) 40.97407407%,rgba(17,17,17,.398) 44.05925926%,rgba(17,17,17,.296) 47.04814815%,rgba(17,17,17,.203) 49.88148148%,rgba(17,17,17,.122) 52.5%,rgba(17,17,17,.059) 54.85185185%,rgba(17,17,17,.016) 56.87777778%,rgba(17,17,17,0) 58.51851852%)",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoPoster;

InfoPoster.propTypes = {
  backdrop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
