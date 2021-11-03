import React, {useState} from "react";
import {Modal, Col, Row} from "antd";
import {ExportOutlined, FileTextFilled, ImportOutlined, PlusCircleFilled, SettingFilled} from "@ant-design/icons";
import "./TopTool.scss"
import KeyList from "../key-list/KeyList";

const TopTool = () => {

    const [openModal, setOpenModal] = useState(false)

    const showOpenModal = () => {
        setOpenModal(true);
    };

    const handleOpenModalOk = () => {
        setOpenModal(false);
    };

    const handleOpenModalCancel = () => {
        setOpenModal(false);
    };
    console.log('openModal==>',openModal)
    return (
        <>
            <Row>
                <Col span={5}>
                    <div className="connect-btn" onClick={showOpenModal}>
                        <PlusCircleFilled style={{ fontSize:  'var(--FontSize)', color: '#08c' }} />
                        <span>Connect to redis server</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="connect-btn">
                        <ImportOutlined style={{ fontSize: 'calc(10px + 1vmin)', color: '#333333' }} />
                        <span>Import</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="connect-btn">
                        <ExportOutlined style={{ fontSize: 'calc(10px + 1vmin)', color: '#333333' }} />
                        <span>Export</span>
                    </div>
                </Col>
                <Col span={2} offset={10}>
                    <div className="connect-btn">
                        <FileTextFilled style={{ fontSize: 'calc(10px + 1vmin)', color: '#555555' }} />
                        <span>Log</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="connect-btn">
                        <SettingFilled style={{ fontSize: 'calc(10px + 1vmin)', color: '#555555' }} />
                        <span>Settings</span>
                    </div>
                </Col>
            </Row>
            <Modal title="Basic Modal" visible={openModal} onOk={handleOpenModalOk} onCancel={handleOpenModalCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

KeyList.prototype = {
}

export default TopTool
