import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import about from '../assets/about//about.png'
import features from '../assets/about/features.jpg'

const FeatureArea = () => {
  return (
    <>
      <div className='about'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='content'>
                <div className='title-section-left'>
                  <h3 className='text-light'>
                    Know <span>About Us</span>
                  </h3>
                  <h6>We are professional</h6>
                </div>
                <p>
                  We believe in team spirit to attain the common goals. To attain goal, every organization should have some specific and well defined policy statements
                  that contained high moral values and be followed by the people of the place without out fail and deviation.TCL has the following Core values, key
                  Principles of Ethics and Code of Conduct of its employees which are being obeyed in every sphere of the organization for the betterment of all.
                </p>
                <ul>
                  <li>
                    <i className='fa fa-check' /> Honest to our customers, employees, regulators, shareholders and others
                  </li>
                  <li>
                    <i className='fa fa-check' /> Gaining efficiency through best use of man and machine.
                  </li>
                  <li>
                    <i className='fa fa-check' /> Accountable to the stakeholders and to the society at large.
                  </li>
                  <li>
                    <i className='fa fa-check' /> Transparent in each and every transaction.
                  </li>
                  <li>
                    <i className='fa fa-check' /> Continuous innovative idea generation finding of engineering solutions.
                  </li>
                  <li>
                    <i className='fa fa-check' /> Protecting assets and services.
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className='content-image'>
                <Image src={about} alt='img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
        <div className='bg-style' />
      </div>
      {/* end about */}
      {/* services */}
      <div className='services section bg-grey'>
        <Container>
          <div className='title-section'>
            <h3 className='text-light'>
              Our <span>Service</span>
            </h3>
            <p>
              TCL is a reputed civil engineering company operating in Bangladesh mainly engaged in constructions and maintenance of large and medium type projects Road &
              High Ways, Water Plant, Airport, Electrical Plant etc. both in Private and Public Sector.TCL is offering various products and services which include the
              followings
            </p>
          </div>
          <Row className='row'>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className='content'>
                <i className='fa fa-building' />
                <h5 className='text-light'>OUR PRODUCTS & SERVICES</h5>
                <p className='mb-0'>
                  TCL is a reputed civil engineering company operating in Bangladesh mainly engaged in constructions and maintenance of large and medium type projects
                  Road & High Ways, Water Plant, Airport, Electrical Plant etc. both in Private and Public Sector.TCL is offering various products and services which
                  include the followings
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className='content content-center'>
                <i className='fa fa-dumbbell' />
                <h5 className='text-light'>OUR STRENGTH & EXPERTISE</h5>
                <p className='mb-0'>
                  Tanvir Constructions Limitedhas some proven professionals and expert engineers, technicians and is offering one stop service to its customers in the
                  domestic civil engineering sector. Our specialized teams have proven expertise and experience in delivering mega projects in the countryʼs construction
                  sector.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className='content'>
                <i className='fa fa-wrench' />
                <h5 className='text-light'>CORPORATE SOCIAL RESPONSIBILITY (CSR)</h5>
                <p className='mb-0'>
                  Now-a-days,saving our ‘Mother Planetʼ has become the crucial issue. To save our beloved earth from all sorts of erosion and pollution, we, as global
                  citizen, obviously have some responsibilities to keep our mother planet green.Tanvir Construction Limited is also committed to maintaining a clean
                  environment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end services */}

      {/* features */}
      <div className='features section'>
        <Container>
          <div className='title-section'>
            <h3 className='text-light'>
              Our <span>Campany</span> Features
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit dolore vel voluptatum libero consectetur accusamus! Ipsum qui veniam nemo nisi.</p>
          </div>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className='content'>
                <h4 className='text-light'>We always give the best</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sed quo laudantium quae soluta magni architecto, voluptate quasi quidem error,
                  dolorum accusamus modi quaerat eos autem.
                </p>
              </div>
              <div className='content'>
                <div className='icon'>
                  <i className='fa fa-fire' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>Repair if there is damage </h5>
                  <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit Amet perspiciatis fuga repellendus similique quod obcaecati.</p>
                </div>
              </div>
              <div className='content'>
                <div className='icon'>
                  <i className='fa fa-calendar' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>Controling every month</h5>
                  <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit Amet perspiciatis fuga repellendus similique quod obcaecati.</p>
                </div>
              </div>
              <div className='content'>
                <div className='icon'>
                  <i className='fa fa-cog' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>Strong and durable</h5>
                  <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit Amet perspiciatis fuga repellendus similique quod obcaecati.</p>
                </div>
              </div>
              <div className='content pb-0'>
                <div className='icon'>
                  <i className='fa fa-comments' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>Free consultation</h5>
                  <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit Amet perspiciatis fuga repellendus similique quod obcaecati.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={features} alt='img' className='w-100 mb-5' />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FeatureArea
