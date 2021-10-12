import React from 'react'
import bgimage from '../../images/sectionIcon.png'
import '../../styles/components/SectionTitle.css'

export default function SectionTitle({title}) {
    return (
        <div className="background-SectionTitle" style={{ backgroundImage: `url(${bgimage})` }}>
            <h2 className="sectionTitle">{title}</h2>
        </div>
    )
}
