import React from "react";
import "../../profile.css";
import { useState } from "react";

import { Col, Row } from "react-bootstrap";

const Education = ({ Education }) => {
  return (
    <React.Fragment>
      <h2 className="subHeading">Education</h2>
      {Education && Education.map(edu => <Row className="justify-content-between px-5 py-3">
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">School </div>
          <div className="div-2">{edu.School}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">Degree: </div>
          <div className="div-2">{edu.Degree}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">FieldOfStudy: </div>
          <div className="div-2">{edu.FieldOfStudy}</div>
        </Col>
        <Col className="col-12 col-md-5 py-3 ">
          <div className="div-1">StartDate </div>
          <div className="div-2">{edu.StartDate}</div>
        </Col>
        <Col className="col-12 col-md-5 py-3 ">
          <div className="div-1">EndDate: </div>
          <div className="div-2">{edu.EndDate}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">Grade: </div>
          <div className="div-2">{edu.Grade}</div>
        </Col>
        <Col className="col-12 col-md-12 py-3 ">
          <div className="div-1">Description: </div>
          <div className="div-2">{edu.Description}</div>
        </Col>
      </Row>)}
    </React.Fragment>
  );
};

export default Education;
