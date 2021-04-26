import React from 'react';
import './App.css';
import Avatar from './components/avatar';

function App() {
  return (
    <div className="App">
      <div className="card-collection">
        {/* Small size */}
        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="s"
            />
            <p>size <strong>s</strong> with 30x30</p>
            <p>type <strong>square</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="s"
              type="rounded"
            />
            <p>size <strong>s</strong> with 30x30</p>
            <p>type <strong>rounded</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="s"
              type="circle"
            />
            <p>size <strong>s</strong> with 30x30</p>
            <p>type <strong>circle</strong></p>
          </div>
        </div>

        {/* Medium size */}
        <div className="card">
          <div className="card-content">
            <Avatar
              src="https://picsum.photos/400/400"
            />
            <p>size <strong>m</strong> with 60x60</p>
            <p>type <strong>square</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              type="rounded"
            />
            <p>size <strong>m</strong> with 60x60</p>
            <p>type <strong>rounded</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              type="circle"
            />
            <p>size <strong>m</strong> with 60x60</p>
            <p>type <strong>circle</strong></p>
          </div>
        </div>

        {/* Large size */}
        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="l"
            />
            <p>size <strong>l</strong> with 120x120</p>
            <p>type <strong>square</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="l"
              type="rounded"
            />
            <p>size <strong>l</strong> with 120x120</p>
            <p>type <strong>rounded</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="l"
              type="circle"
            />
            <p>size <strong>l</strong> with 120x120</p>
            <p>type <strong>circle</strong></p>
          </div>
        </div>

        {/* Extra large */}

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="xl"
            />
            <p>size <strong>xl</strong> with 200x200</p>
            <p>type <strong>square</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="xl"
              type="rounded"
            />
            <p>size <strong>xl</strong> with 200x200</p>
            <p>type <strong>rounded</strong></p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">

            <Avatar
              src="https://picsum.photos/400/400"
              size="xl"
              type="circle"
            />
            <p>size <strong>xl</strong> with 200x200</p>
            <p>type <strong>circle</strong></p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
