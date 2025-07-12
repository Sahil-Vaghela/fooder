
import Nav from './Nav'
import './blog.css'
import Data from './data'

function Blog() {
  return (
    <div className='bmain'>
      <Nav />

      <div className='bd1'>
        {
          Data.product2.map((p) => {
            return (
              <div className='bd11'>
                <img src={p.photo} alt={p.title} />
                <div className='bd1txt'>
                  <h4>{p.name}</h4>
                </div>
              </div>
            )
          })
        }

      </div>

      <div className='bd2'>
        <div className='bd2img'></div>
        <div className='bd2txt'>
        <h1>Finding your personal style.</h1><br/><br/><br/><br/>
        <p>Some people are looking for the style that suits them the most rather than a style they already know, a post that explains the things that they should be 
          looking out for would be popular among readers. Explain how colors, body type, and personal likes can impact a person’s style.
          Posts that serve as a guide to recreate a famous look that was seen on a celebrity or in a movie will be well-received and a fun read for fans.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
