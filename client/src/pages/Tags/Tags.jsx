import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:2,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:3,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:4,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:5,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:6,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:7,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:8,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:9,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:10,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    },{
        id:11,
        tagName: "javascript",
        tagDesc: "For question regarding programming in ECMAScript (JavaScript/JS) and its varous dialects/implementations"
    }]
  return (
    <div className='home-container-1'>
       <LeftSidebar />
       <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for other to find an answer your question.  </p>
        <div className="tags-list-container">
          {
            tagsList.map((tag) => (
                <TagsList tag={tag} key={tagsList.id} />
            ))
          }
        </div>
       </div>
    </div>
  )
}

export default Tags
