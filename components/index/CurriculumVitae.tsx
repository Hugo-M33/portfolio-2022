import React, { useContext } from 'react'
import { ScrollingContext } from '../../pages'
import SlideSectionTitle from '../SlideSectionTitle'

const CurriculumVitae: React.FC = () => {
    const scrolling = useContext(ScrollingContext)
    return (
        <section id="cv" className={`bg-gray-700 h-screen w-screen ${!scrolling && "snap-start"} relative`}>
            <SlideSectionTitle right>Resume</SlideSectionTitle>
        </section>
    )
}

export default CurriculumVitae
