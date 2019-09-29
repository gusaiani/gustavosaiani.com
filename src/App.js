import React from 'react'
import './App.css'
import images from './data/images'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {images.data
            .filter(image => image.visible)
            .map(image => (
              <div style={{marginBottom: '60px'}}>
                <img
                  alt={image.name}
                  src={`https://s3-sa-east-1.amazonaws.com/gustavosaiani.com/large/${image.filename}`}
                  style={{
                    width: '800px',
                  }}
              />
                <div>{image.name}</div>
              </div>
            )
          )
        }
      </header>
    </div>
  )
}

export default App
