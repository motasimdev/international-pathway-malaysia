import React from 'react'
import Container from '../../Container'
import Heading from '../../Heading'

const BlogBanner = () => {
  return (
    <>
    <section className='py-11 lg:py-20 bg-secondary'>
        <Container>
            <div className="">
                <Heading text={"Our Latest Study Abroad Blogs"} className={"text-white"}/>
            </div>
        </Container>
    </section>
    </>
  )
}

export default BlogBanner