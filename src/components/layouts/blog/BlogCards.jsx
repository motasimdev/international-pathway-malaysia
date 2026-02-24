import React from 'react'
import Container from '../../Container'
import CardBlog from '../../CardBlog'
import blog from '/src/assets/asia-pacific-university.webp'
import blog1logo from '/src/assets/university-logos/APU-logo.png'

const BlogCards = () => {
  return (
    <>
    <section className='py-11 lg:py-20 '>
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between lg:grid-cols-3 gap-y-10">
                <CardBlog src={blog} miniLogo={blog1logo} date={"16/01/2026"} title={"Asia Pacific Univresity"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo quis voluptatem ratione nobis voluptates mollitia reprehenderit, exercitationem alias praesentium quidem excepturi ut in ipsam temporibus voluptates mollitia reprehenderit, exercitationem alias praesentium quidem excepturi ut in ipsam temporibus"}/>
            </div>
        </Container>
    </section>
    </>
  )
}

export default BlogCards