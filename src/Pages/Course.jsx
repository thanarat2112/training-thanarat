import React from 'react'
import Layout from '../Templat/Layout'
import CourseCard from '../Components/CourseCard'
const Course = () => {
  return (
    <Layout>
    <h1 className="text-5xl font-bold">Course</h1>
    <hr />
        <CourseCard
        name="Basic React Native"
        price={7500}
        duration="5"
        />
           <CourseCard
        name="Power BI Dashboard"
        price={5500}
        duration="4"
        />
           <CourseCard
        name="UI Design with Figma"
        price={5000}
        duration="3"
        />
           <CourseCard
        name="Cross Platform with Flutter"
        price={6500}
        duration="5"
        />
   </Layout>
  )
}

export default Course