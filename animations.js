export function animate() {
  
  CSSPlugin.defaultTransformPerspective = 400; 
 gsap.to(".hero-image-content", {duration: 2, rotationX: 360});
  gsap.from(".logo", {duration: 2, x: 300, opacity: 0, scale: 0.5}
  );
   
}
