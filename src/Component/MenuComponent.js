import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeOutlined } from "@ant-design/icons";
import { faSearch, faTv, faGear, faFilm  } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const MenuComponent = () => {
  return (
    <>
     <div className="menu text-center">
          <p style={{ marginTop: "50px" }}>
            <a>
              <HomeOutlined className="menu-icon" />
            </a>
          </p>
          <p>
            <a>
              {" "}
              <FontAwesomeIcon className="menu-icon" icon={faFilm} />
            </a>
          </p>
          <p>
            <a>
              {" "}
              <FontAwesomeIcon className="menu-icon" icon={faTv} />
            </a>
          </p>
          <p>
            <a>
            <FontAwesomeIcon className="menu-icon" icon={faGear} />
            </a>
          </p>
          <p>
            <a>
            <FontAwesomeIcon className="menu-icon" icon={faUser} />
            </a>
          </p>
        </div>
    </>
  )
}

export default MenuComponent;