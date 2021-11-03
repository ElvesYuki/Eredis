import React, {useState} from "react";
import {Modal, Col, Row} from "antd";
import {ExportOutlined, FileTextFilled, ImportOutlined, PlusCircleFilled, SettingFilled} from "@ant-design/icons";
import "./TopTool.scss"
import KeyList from "../key-list/KeyList";
import ConnModal from "./ConnModal";

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
                        <PlusCircleFilled style={{ fontSize:  'calc(10px + 1vmin)', color: '#08c' }} />
                        <span>连接新的Redis服务器</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="connect-btn">
                        <ImportOutlined style={{ fontSize: 'calc(10px + 1vmin)', color: '#333333' }} />
                        <span>导入</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="connect-btn">
                        <ExportOutlined style={{ fontSize: 'calc(10px + 1vmin)', color: '#333333' }} />
                        <span>导出</span>
                    </div>
                </Col>
                <Col span={2} offset={10}>
                    <div className="connect-btn">
                        <FileTextFilled style={{ fontSize: 'calc(10px + 1vmin)', color: '#555555' }} />
                        <span>日志</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="connect-btn">
                        <SettingFilled style={{ fontSize: 'calc(10px + 1vmin)', color: '#555555' }} />
                        <span>设置</span>
                    </div>
                </Col>
            </Row>
            <Modal title="连接设置" visible={openModal} onOk={handleOpenModalOk} onCancel={handleOpenModalCancel}>
                <ConnModal/>
            </Modal>
        </>
    )
}

KeyList.prototype = {
}

export default TopTool
