import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCanvas = styled.canvas`
  position: ${props => props.position};
  z-index: ${props => props.index};
  left: 0;
  top: 0;
  background-color: transparent;
`;

class CanvasDots extends Component {
  state = {};

  canvasRef = React.createRef();

  componentDidMount() {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }));
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function Dot(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.01;
      this.distanceFromCenter = randomIntFromRange(250, 300);

      this.update = () => {
        this.radians += this.velocity;

        // Circular moition
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
      };

      this.draw = () => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      };
    }
    function Dot2(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.01;
      this.distanceFromCenter = randomIntFromRange(50, 150);

      this.update = () => {
        this.radians += this.velocity;

        // Circular moition
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
      };

      this.draw = () => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      };
    }
    function Dot3(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.01;
      this.distanceFromCenter = randomIntFromRange(120, 200);

      this.update = () => {
        this.radians += this.velocity;

        // Circular moition
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw();
      };

      this.draw = () => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      };
    }
    // Implementation
    const particles = [];
    function init() {
      // how many dots,center and size
      for (let i = 0; i < 3; i++) {
        particles.push(new Dot(canvas.width / 2, canvas.height / 2, 5, '#000'));
      }
      for (let i = 0; i < 3; i++) {
        particles.push(new Dot2(canvas.width / 2, canvas.height / 2, 5, '#000'));
      }
      for (let i = 0; i < 3; i++) {
        particles.push(new Dot3(canvas.width / 2, canvas.height / 2, 5, '#000'));
      }
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
      });
    }

    init();
    animate();
  }

  render() {
    const { position, index, countParticles } = this.props;
    return (
      <StyledCanvas
        ref={this.canvasRef}
        position={position}
        index={index}
        countParticles={countParticles}
      />
    );
  }
}

CanvasDots.propTypes = {
  position: PropTypes.string,
  index: PropTypes.string,
  countParticles: PropTypes.number,
};

CanvasDots.defaultProps = {
  position: 'fixed',
  index: '-1',
  countParticles: 5,
};
export default CanvasDots;
