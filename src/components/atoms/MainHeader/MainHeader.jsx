import React from 'react';
import SelectRegion from './../SelectRegion/SelectRegion';
import { Link } from 'react-router-dom';

function MainHeader({ region, setRegion }) {
  console.log(region);
  return (
    <div>
      <div className="flex flex-col ">
        <div className="ml-5 mr-5 mt-5 flex min-w-375pxr max-w-680pxr items-center justify-between ">
          <Link to="/region">
            <img src="/images/main/header/mapLogo.svg" alt="지도로 이동" />
          </Link>

          <Link to="/main">
            <img src="/images/main/header/mainLogo.svg" alt="메인 로고" />
          </Link>

          <button type="button">
            <img
              src="/images/main/header/searchIcon.svg"
              alt="검색창으로 이동"
            />
          </button>
        </div>
        <SelectRegion region={region} setRegion={setRegion} />
      </div>
    </div>
  );
}

export default MainHeader;
