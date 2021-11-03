import React from "react";
import TopTool from "./top-tool/TopTool";
import KeyList from "./key-list/KeyList";
import ValueBody from "./value-body/ValueBody";
import { Col, Row } from "antd";

import './Layout.scss'

const Layout = () => {
  return (
      <>
          <Row className="top-tool">
              <Col span={24}>
                  <TopTool/>
              </Col>
          </Row>
          <Row className="button-body">
              <Col className="key-list" span={9}>
                  <KeyList/>
              </Col>
              <Col className="value-body" span={15}>
                  <ValueBody/>
              </Col>
          </Row>
      </>
  )
}

export default Layout
