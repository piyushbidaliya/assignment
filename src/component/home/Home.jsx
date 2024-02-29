import React from 'react'
import './home.css'
import {BlockCard, Card, Header, BlockCardNew} from '../../component'

const SignUp =()=>{
  return(
    <>
      <div className="home-signup-heading">
        <h4>Sign up and get exclusive <br />special deals</h4>
      </div>
      <div className="home-signup-btn">
          <input type="text" />
          <p><a href="#a">Sign Up</a></p>
      </div>
    </>
  )
}




const Home = () => {
  return (
    <div className='home'>
      <div className="home-container">
        <div className="home-header">
            <Header/>
        </div>
        <div className="home-blockcard">

            <BlockCard
              imgname='Builder 1'
              boldtext='WixPro 72-inch Responsive Website Builder-'
              text='Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional
               Websites and Online Stores (Black/Blue)'
              text2='[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
               an extensive library of widgets and apps, and detailed step-by-step guides.'
              number={9.8}
              grade='Exceptional'
              className='fa fa-star checked'
              className1='fa fa-star checked'
              content='Best Choice'
              offerbox='offer-box'
              icon='fa fa-trophy'
            />

            <BlockCard
              imgname='Builder'
              boldtext='SiteCraft 68-Inch Ultimate Web Design Studio- '
              text='Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce
               Platforms (Green/White)'
              text2='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements,
               SEO optimization tools, and e-commerce integrations.'
              number={9.5}
              grade='Excellent'
              className='fa fa-star checked'
              className1='fa fa-star half-checked'
              content='Best Value'
              offerbox='offer-box'
              icon='fa fa-diamond'
            />
            <BlockCard
              imgname='Builder 1'
              boldtext='WixPro 72-inch Responsive Website Builder-'
              text='Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional
               Websites and Online Stores (Black/Blue)'
              text2='[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
               an extensive library of widgets and apps, and detailed step-by-step guides.'
              number={9.3}
              grade='Exceptional'
              className='fa fa-star checked'
              className1='fa fa-star checked'
            />
            <BlockCardNew
              imgname='CDK'
              boldtext='CDK Resposive Builder:'
              text='An extensive library of widgets and apps, and detailed step-by-step guides'
              number={9.3}
              grade='Exceptional'
              className='fa fa-star checked'
              className1='fa fa-star unchecked'
            />
        </div>
        <h1>Related deals you might like for</h1>
        <div className="home-card">
          <Card
          heading='Webbuilder 1'
          text='Computer Modern clasic with wix support'
          money='$39.96'
          money2='$49.96'
          />
          <Card
          heading='Webbuilder 1'
          text='Computer Modern clasic with wix support'
          money='$39.96'
          money2='$49.96'
          />
          <Card
          heading='Webbuilder 1'
          text='Computer Modern clasic with wix support'
          money='$39.96'
          money2='$49.96'
          />
        </div>
        <div className="home-signup">
          <SignUp/>
      </div>
      </div>

    </div>
  )
}

export default Home
