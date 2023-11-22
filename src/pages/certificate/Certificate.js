import React, { useRef } from 'react';
import './certificate.css';
import { useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const Certificate = () => {
  const { state } = useLocation();
  const { name, course, score, date,instructor,regno } = state || {};
  console.log(regno)
  const componentRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => <button className="btn btn-primary">Print Certificate</button>}
        content={() => componentRef.current}
      />
      
      <div ref={componentRef}>
        <div className="certificate">
          <div className="water-mark-overlay" />
          <div className="certificate-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src="https://res.cloudinary.com/devanand/image/upload/v1700627685/eojyghhrkmnhsbsk3imb.png" style={{ width: '225px', height: '100px' }} className="logo" alt='logo' />
            <p className="certificate-body"><h1 className='title-heading'>Yamuna Digital Research Foundation</h1></p>
            <h6>Reg.No.{regno}</h6>
          </div>
          <br /><br />
          <div className="certificate-body">
          
            <h1 className='title-heading2'>Certificate of Completion</h1>
            <br />
            <div className="certificate-content">
              <div className="about-certificate"></div>
              <p className="topic-title">
              This is certify that <b>Mr.{name}</b> has participated in <b>{course}</b> scheduled at <b>{date}</b>, due to his<br />
              dedication, hard work, and commitment to excellence in <b>{course}</b>, he has secured <b>{score}</b> in this<br /> Comptition.
              We congratulate <b>{name}</b> on this significant accomplishment<br /> and wish them continued success in their future endeavors.
              </p>
            </div>
            <br /><br /><br /><br />
            <div className="certificate-footer text-muted">
              <div className="row">
                <div className="col-md-6">
                  <h5>Director<h5>{instructor}</h5></h5>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;

