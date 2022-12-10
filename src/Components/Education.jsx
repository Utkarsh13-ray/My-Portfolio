import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa';
import {FaSchool} from 'react-icons/fa';

export default function Education() {
  return (
    <div id='education'>
    <div className='text-4xl text-center my-10'>Education</div>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work  "
    contentStyle={{ background: 'rgb(253, 203, 28)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(253, 203, 28)' }}
    date="2020-present"
    iconStyle={{ background: 'rgb(253, 203, 28)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title bold text-xl">Indian Institute of Information Technology , Ranchi</h3>
    <h4 className="vertical-timeline-element-subtitle">Bacheleor of Technology -Computer Science</h4>
    <h4 className="vertical-timeline-element-subtitle">CGPA-8.83 (upto-4sem)</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(253, 203, 28)', color: '#fff' }}
    icon={<FaSchool />}
  >
        <h3 className="vertical-timeline-element-title bold text-xl">Morning Star Children's Sr. Sec. Academy,Orai</h3>
    <h4 className="vertical-timeline-element-subtitle">12th</h4>
    <h4 className="vertical-timeline-element-subtitle">percentage-95%</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(253, 203, 28)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(253, 203, 28)' }}
    date="2017 - 2018"
    iconStyle={{ background: 'rgb(253, 203, 28)', color: '#fff' }}
    icon={<FaSchool/>}
  >
    <h3 className="vertical-timeline-element-title bold text-xl">Morning Star Children's Sr. Sec. Academy,Orai</h3>
    <h4 className="vertical-timeline-element-subtitle">10th</h4>
    <h4 className="vertical-timeline-element-subtitle">percentage-88.2%</h4>
  </VerticalTimelineElement>
 
</VerticalTimeline>
    </div>
  )
}

