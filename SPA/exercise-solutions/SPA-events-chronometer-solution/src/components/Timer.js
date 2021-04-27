import React, { Component } from 'react'
import "./Timer.css"

export default class Timer extends Component {
   
    state={
        startTS: null,
        diff: null,
        suspended: 0,
        interval: null
    }
    
      start=()=>{
        if (this.state.startTS) {
          // prevent multi clicks on start
          return;
        }
        this.setState({
          startTS: +new Date() - this.state.suspended,
          interval: requestAnimationFrame(this.tick),
          suspended: 0
        });
      }
    
      stop=()=>{
        cancelAnimationFrame(this.state.interval);
        this.setState({
          startTS: null,
          suspended: +this.state.diff
        });
      }
    
      reset=()=>{
        cancelAnimationFrame(this.state.interval);
        this.setState( {startTS: null,
            diff: null,
            suspended: 0,
            interval: null}
            );
      }
    
      tick=()=>{
        this.setState({
          diff: new Date(+new Date() - this.state.startTS),
          interval: requestAnimationFrame(this.tick)
        });
      }
    
      addZero =(n)=>{
        return n < 10 ? '0' + n : n;
      }
    
      render(){
    
        let diff = this.state.diff;
        let hundredths = diff ? Math.round(this.state.diff.getMilliseconds()/10) : 0;
        let seconds = diff ? this.state.diff.getSeconds() : 0;
        let minutes = diff ? this.state.diff.getMinutes() : 0;
    
        if (hundredths === 100) hundredths = 0;
    
        return (
          <section className="Chrono">
            <h1>{this.addZero(minutes)}:{this.addZero(seconds)}:{this.addZero(hundredths)}</h1>
            <div className="buttons">
              <button onClick={this.start}>START</button>
              <button onClick={this.stop}>STOP</button>
              <button onClick={this.reset}>RESET</button>
            </div>
          </section>
        )
      }
    
}
