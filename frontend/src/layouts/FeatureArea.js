import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import about from '../assets/about//about.png'
import features2 from '../assets/about/features2.jpg'
import features3 from '../assets/about/features3.jpg'

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
              OUR <span>VISION</span>
            </h3>
            <p>Be a partner to build the nation. To be a leading construction company in the global market</p>
          </div>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className='content'>
                <h4 className='text-light'>OUR MISSION</h4>
                <p>
                  To provide high quality engineering solutions. To manage projects at affordable price. To provide safe working environment and delivering quality work
                  within reasonable time frame.
                </p>
              </div>
              <div className='content'>
                <div className='icon'>
                  <i className='fa fa-fire' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>OUR COMMITMENTS </h5>
                  <p className='mb-0'>To the Customers. To the Nation. To the Shareholders. To the Employees. To the other Stakeholders</p>
                </div>
              </div>
              <div className='content'>
                <div className='icon'>
                  <i className='fa fa-calendar' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>STRATEGIC OBJECTIVES</h5>
                  <p className='mb-0'>
                    Introducing innovative and technology based Products & Services. Ensuring fast, accurate and state of the art construction services with customersʼ
                    satisfaction. Ensuring balanced and sustainable growth strategy. To achieve global standards.
                  </p>
                </div>
              </div>
              <div className='content'>
                <div className='icon'>
                  <i className='fa fa-cog' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>EMPLOYEE CODE OF CONDUCT</h5>
                  <p className='mb-0'>
                    Adhere to the Principles and applicable laws. Inform the customers about the benefits and risks of the products and services offered to them. laws Not
                    to cause any loss of reputation of the organization during works and attitudes. Not to be engaged in any activity that can be classified as personal
                    business. Not to use the TCLʼs assets and resources unproductively and outside the designated purpose
                  </p>
                </div>
              </div>
              <div className='content pb-0'>
                <div className='icon'>
                  <i className='fa fa-comments' />
                </div>
                <div className='content-text'>
                  <h5 className='text-light'>OUR CORE VALUES</h5>
                  <p className='mb-0'>
                    Honest to our customers, employees, regulators, shareholders and others Gaining efficiency through best use of man and machine. Accountable to the
                    stakeholders and to the society at large. Transparent in each and every transaction. Continuous innovative idea generation and finding of engineering
                    solutions. Protecting assets and services.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={features2} alt='img' className='w-100 mb-5' />
              <img src={features3} alt='img' className='w-100 mb-5' />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FeatureArea
