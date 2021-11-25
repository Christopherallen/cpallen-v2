
import React, { useState, useEffect } from 'react';
import Icon from "../images/svgs/arrow-right.svg";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [linkWorkHover, setLinkWorkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
      document.addEventListener('mouseenter', mEnter);
      document.addEventListener('mouseleave', mLeave);
      document.addEventListener('mousedown', mDown);
      document.addEventListener('mouseup', mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
      document.removeEventListener('mouseenter', mEnter);
      document.removeEventListener('mouseleave', mLeave);
      document.removeEventListener('mousedown', mDown);
      document.removeEventListener('mouseup', mUp);

    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    };

    const addWorkLinkEvents = () => {
      document.querySelectorAll('.work-list__item-image').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkWorkHover(true));
        el.addEventListener('mouseout', () => setLinkWorkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    addWorkLinkEvents();
    return () => removeEventListeners();
  }, []);


  return (
    <div
      className={
        'cursor ' +
        (hidden ? 'cursor--hidden ' : ' ') +
        (click ? 'cursor--click ' : ' ') +
        (linkHover ? 'cursor--hover ' : ' ') +
        (linkWorkHover ? 'cursor--work-hover ' : ' ')
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span className="cursor__icon"><Icon /></span>
    </div>
  );
};

export default Cursor;
