import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'

const BackGroundImage = () => {
  return (
    //       <Image src='./images/pexels-stephen-hardy-7061817.jpg' resizeMode='contain'
    //  alt="dnd dices" style={StyleSheet.absoluteFill}  fluid />
    <section className='mb-3'>
      <Container
        style={{
          backgroundImage: `url('./images/pexels-stephen-hardy-7061817.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '15px',

        //   minWidth: '1024px',
        WebkitTextStroke: 'thick'
        }}
      >
        <Container
          bg={'light'}
          key={'Light'}
          className='container d-flex text-center justify-content-center  align-items-center'
          style={{ minHeight: '350px' }}
        >
          <Container style={{
            backgroundColor: 'rgb(256, 256, 256, 0.95)',
            maxWidth: '15rem',
            borderRadius: '15px'
          }}>
            <h1>HOMEBREW</h1>
          </Container>
        </Container>
      </Container>
    </section>
  )
}

export default BackGroundImage
