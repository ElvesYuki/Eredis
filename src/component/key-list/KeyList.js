import React, {useEffect, useState} from "react";
import ProTypes from "prop-types";
import KeyConn from "./KeyConn";

const KeyList = ({activeId, activeConnList}) => {

    const [connList, setConnList] = useState([])
    useEffect(() => {
        if (connList.length === 0) {
            window.myAPI.getStoreValue('testKey').then((connSetStore) => {

                const connDefault = [
                    {
                        name: 'fault',
                        children: [
                            {
                                connName: 'localRedis',
                                dbList: [
                                    {
                                        db: 'db0',
                                        keyList: [
                                            {
                                                key: 'user_id001'
                                            }
                                        ]
                                    },
                                    {
                                        db: 'db1',
                                        keyList: [
                                            {
                                                key: 'user_id002'
                                            }
                                        ]

                                    },
                                    {
                                        db: 'db2',
                                        keyList: [
                                            {
                                                key: 'user_id003'
                                            }
                                        ]
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        name: 'local',
                        children: [
                            {
                                connName: 'localRedis',
                                dbList: [
                                    {
                                        db: 'db0',
                                        keyList: [
                                            {
                                                key: 'user_id001'
                                            }
                                        ]
                                    },
                                    {
                                        db: 'db1',
                                        keyList: [
                                            {
                                                key: 'user_id002'
                                            }
                                        ]

                                    },
                                    {
                                        db: 'db2',
                                        keyList: [
                                            {
                                                key: 'user_id003'
                                            }
                                        ]
                                    },
                                ]
                            },
                        ],
                    },
                ]
                setConnList(connDefault)
            })
        }
    }, [connList])

    const KeyListContent = () => {
        const connListTemp = connList.map((conn) => {
            return (
                <div key={conn.name}>
                    {conn.name}
                    {conn.children.map(children => {
                        return <KeyConn conn = {children} key={children.connName}/>
                    })}
                </div>
            )
        })
        return <div>{connListTemp}</div>
    }

    return (
        <>
            <div>
                <KeyListContent/>
            </div>
        </>
    )
}

KeyList.prototype = {
    activeId: ProTypes.string,
    activeConnList: ProTypes.array,
}

KeyList.defaultProps = {
    activeId: '',
    activeConnList: [],
}

export default KeyList
