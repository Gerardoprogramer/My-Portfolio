"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroPage } from "../hero/HeroPage"
// import { MobileNav } from "@/components/mobile-nav"

gsap.registerPlugin(ScrollTrigger)



export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const planetRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0a0e1a, 10, 30)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 8
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x3b82f6, 2, 100)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100)
    pointLight2.position.set(-10, -10, 10)
    scene.add(pointLight2)

    const planetGroup = new THREE.Group()
    planetRef.current = planetGroup
    scene.add(planetGroup)

    const planetGeometry = new THREE.SphereGeometry(2.5, 64, 64)
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0e1a,
      emissive: 0x1e293b,
      emissiveIntensity: 0.3,
      metalness: 0.9,
      roughness: 0.3,
      wireframe: false,
    })
    const planet = new THREE.Mesh(planetGeometry, planetMaterial)
    planetGroup.add(planet)

    const wireframeGeometry = new THREE.SphereGeometry(2.52, 32, 32)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    planetGroup.add(wireframe)
    


    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      const radius = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 2

      posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i * 3 + 2] = radius * Math.cos(phi)
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      targetRotationY = mouseX * 0.5
      targetRotationX = mouseY * 0.3
    }

    window.addEventListener("mousemove", handleMouseMove)

    gsap.to(planetGroup.rotation, {
      y: Math.PI * 2,
      duration: 60,
      repeat: -1,
      ease: "none",
    })

    const animate = () => {
      requestAnimationFrame(animate)

      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      particlesMesh.rotation.y += 0.0005
      particlesMesh.rotation.x += 0.0002

      if (planetRef.current) {
        planetRef.current.rotation.x += (targetRotationX - planetRef.current.rotation.x) * 0.05
      }

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      z: 12,
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 3D Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }} />

      {/* Mobile-style Navigation on Right */}
      {/* <MobileNav /> */}

      <HeroPage />

    </div>
  )
}
