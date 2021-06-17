import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
             Sumit Mondal
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external image data API
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
