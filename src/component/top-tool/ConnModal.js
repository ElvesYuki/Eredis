import React, {useEffect, useState} from "react";
import ProTypes from "prop-types";
import {Col, Row} from "antd";
import './ConnModal.scss'

const ConnModal = () => {

    console.log("初始化对话框")

    return (
        <>
            <Row className="connect-setting-btn">
                <Col span={12}>
                    <div className="connect-setting-btn-text">连接设置</div>
                </Col>
                <Col span={12} >
                    <div className="connect-setting-btn-text">高级设置</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>名称</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>地址</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>密码</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>用户名称</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>加密</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>按钮</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>按钮</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>测试链接</div>
                    <div>测试链接</div>
                    <div>测试链接</div>
                </Col>
            </Row>
        </>
    )

}

ConnModal.prototype = {}

export default ConnModal;
