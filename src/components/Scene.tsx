import { useAppContext } from '@v/contexts';
import { Application } from 'pixi.js';
import { useEffect, useRef } from 'react';

export default function Scene() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { setApp } = useAppContext();
  useEffect(() => {
    if (!ref.current) return;
    const application = new Application({ view: ref.current });
    if (ref.current.parentElement) application.resizeTo = ref.current.parentElement;
    application.stage.sortableChildren = true;
    setApp(application);
    return () => application.destroy();
  }, [ref]);
  return <canvas ref={ref}></canvas>;
}
