import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './../common/Loader'
import Message from './../common/Message'
import { listContactInfo } from './../redux/actions/contactInfoActions'

const ContactInfo = () => {
  const dispatch = useDispatch()

  const contactInfoList = useSelector((state) => state.contactInfoList)
  const { loading, error, contactInfos } = contactInfoList

  useEffect(() => {
    dispatch(listContactInfo())
  }, [dispatch])
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className='animation-Left'>
          <Card>
            <Card.Body>
              <Card.Header as='h4' className='fw-bold py-3 bg-light text-center mb-3'>
                Contact Info
              </Card.Header>

              {contactInfos.map((contactInfo) => (
                <Card className='mb-2' key={contactInfo._id}>
                  <Card.Body>
                    <Row>
                      <Col md={2}>
                        <h1 className={`${contactInfo.textColor} display-3`}>
                          <i className={contactInfo.icon}></i>
                        </h1>
                      </Col>
                      <Col md={10}>
                        <h5 className='fw-bold '>{contactInfo.title} </h5>
                        <p>{contactInfo.description}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  )
}

export default ContactInfo
