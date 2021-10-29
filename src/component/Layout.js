import React from "react";
import TopTool from "./top-tool/TopTool";
import KeyList from "./key-list/KeyList";
import ValueBody from "./value-body/ValueBody";
import { Col, Row } from "antd";

import './Layout.scss'

const Layout = () => {
  return (
      <>
          <Row>
              <Col className="top-tool" span={24}>
                  <TopTool/>
              </Col>
          </Row>
          <Row>
              <Col className="key-list">
                  <KeyList/>
              </Col>
              <Col className="value-body">
                  <ValueBody/>
              </Col>
          </Row>
      </>
  )
}

export default Layout
