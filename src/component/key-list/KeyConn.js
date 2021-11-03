import React from "react";
import ProTypes from "prop-types";

const KeyConn = ({conn}) => {

    return (
        <div>
            {conn.connName}
            {
                conn.dbList.map(db => {
                    return (
                        <div key={db.db}>
                            {db.db}
                        </div>
                    )
                })
            }
        </div>
    )
}

KeyConn.prototype = {
    conn: ProTypes.object,
}

export default KeyConn
