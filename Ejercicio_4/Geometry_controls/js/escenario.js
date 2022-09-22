const scene = new THREE.Scene();
{
const color = 0xffffff;
const near = 1;
const far = 35;
const density = 10;
scene.fog = new THREE.Fog(color, near, far, density);
}
//para añadir color
scene.background = new THREE.Color(0xFDBE16);
//loader.load();



// para añadir imagen



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.10, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/background.jpg')

//codigo de three para crear la esfera y la camara para ver el objeto


//geomtria 1////////////////////////////
const geometry = new THREE.SphereGeometry( 3, 20, 10 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.x = 0;
sphere.position.y = 2;


const geometry2 = new THREE.SphereGeometry( 3, 20, 10 );




//drag controls1
const dControls = new THREE.DragControls([sphere], camera, renderer.domElement);
dControls.deactivate();
dControls.activate();





//////////////overon y overoff aplicado a la geometria 1///////////////////
//dControls.addEventListener("hoveroff",function(event){
 //   event.object.material.wireframe = false;
  //  event.object.scale.y /=40;
//});


//Fly controls 1////////////////////////////////////




//geomtria 2////////////////////////////////////////
const material2 = new THREE.MeshMatcapMaterial();
material2.matcap = matcap;
material2.flatShading = true;
const sphere2 = new THREE.Mesh( geometry2, material2 );
scene.add( sphere2 );
sphere2.position.x = 8;
sphere2.position.y = 2;

//drag controls2
const dControls2 = new THREE.DragControls([sphere2], camera, renderer.domElement);
dControls.deactivate();
dControls.activate();


//geomtria 3
const geometry3 = new THREE.SphereGeometry( 3, 20, 10 );
const material3 = new THREE.MeshMatcapMaterial();
material3.matcap = matcap;
material3.flatShading = true;
const sphere3 = new THREE.Mesh( geometry3, material3 );
scene.add( sphere3 );
sphere3.position.x = -8;
sphere3.position.y = 2;

//drag controls3
const dControls3 = new THREE.DragControls([sphere3], camera, renderer.domElement);
dControls.deactivate();
dControls.activate();


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

line.position.x = 0;
line.position.y = 2;


camera.position.z = 15;


const flycontrols = new THREE.FlyControls( camera, renderer.domElement);
flycontrols.movementSpeed =50;
flycontrols.rollSpeed = 0.01;
flycontrols.autoForwad = false;
flycontrols.dragToLock = false;
//animacion para el cubo
function animate() {
  requestAnimationFrame(animate); 
  sphere.rotation.y += 0.01;
  sphere.rotation.x += 0.03;
  sphere2.rotation.y += 0.01;
  sphere2.rotation.x += 0.03;
  sphere3.rotation.y += 0.01;
  sphere3.rotation.x += 0.03;
  line.rotation.y += 0.01;
  line.rotation.x += 0.03;
  renderer.render(scene, camera);

  flycontrols.update(0.5);
}
animate();