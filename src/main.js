import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer({alpha:true});
document.body.appendChild(renderer.domElement)

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
camera.position.set(8,28,5)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('milky.jpg');

const geometry = new THREE.BoxGeometry( 10, 8, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0x3d405b, wireframe: true});
const cube = new THREE.Mesh( geometry, material );

const sphereGeometry = new THREE.SphereGeometry(3,20,10);
const sphereMaterial = new THREE.MeshBasicMaterial({color:0x003049, wireframe:false});
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.set(6,29,-87);

const coneGeo = new THREE.ConeGeometry(5,20,32);
const coneMaterial = new THREE.MeshBasicMaterial({color:0x8d99ae, wireframe:false});
const cone = new THREE.Mesh(coneGeo,coneMaterial);
cone.position.set(6,35,-90);

const segCynGeo = new THREE.CylinderGeometry(5,5,2,32);
const segCynGeoMaterial = new THREE.MeshBasicMaterial({color:0x343a40});
const seg = new THREE.Mesh(segCynGeo,segCynGeoMaterial);
seg.position.set(6,24,-90);

const segCyn = new THREE.CylinderGeometry(5,5,12,32);
const segCynMaterial = new THREE.MeshBasicMaterial({color:0x8d99ae});
const seg3 = new THREE.Mesh(segCyn,segCynMaterial);
seg3.position.set(6,17,-90);

const seg4Geo = new THREE.CylinderGeometry(5,5,2,32);
const segCyn4Material = new THREE.MeshBasicMaterial({color:0x343a40});
const seg4 = new THREE.Mesh(seg4Geo,segCyn4Material);
seg4.position.set(6,10,-90);

const seg5Geo = new THREE.CylinderGeometry(5,5,19,32);
const segCyn5Material = new THREE.MeshBasicMaterial({color:0x8d99ae});
const seg5 = new THREE.Mesh(seg5Geo,segCyn5Material);
seg5.position.set(6,1,-90);

const tailSeg = new THREE.CylinderGeometry(2,5,8,32);
const tailMat = new THREE.MeshBasicMaterial({color:0x000000});
const tail = new THREE.Mesh(tailSeg,tailMat);
tail.position.set(6,-12,-90);

var group = new THREE.Group();
group.add(cone,seg,seg3,seg4,seg5,tail,sphere);

scene.background = texture;
scene.add(group);

camera.position.z = 18;
camera.position.x = 19;

renderer.render( scene, camera );

function animate() {
   
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();
setInterval(animate, 50);


