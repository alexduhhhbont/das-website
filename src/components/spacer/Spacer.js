import React from 'react'

export default function Spacer({spacing}) {

    var height = spacing * 15

    return (
        <div style={{ height: height + "px" }}>
        </div>
    )
}
