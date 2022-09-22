const scene = new THREE.Scene();


//para añadir color
scene.background = new THREE.Color(0x1a2b3);
//loader.load();

// para añadir imagen
var loader = new THREE.TextureLoader
loader.load('./imagenes/background.jpeg', function(texture){
    scene.background = texture;
});


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//el 75 es profundidad fov, ancho alto, 
//y lo ultimo del parentesis es que tan ejos y que tan cerca es definir la vista del cubo.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );//el openchild es pa/2ra acar algode js y mostrarlo en html a



const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/texture1.jpg')

//codigo de three para crear el cubo y la camara para ver el objeto
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading =  true;
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

//var control  = new THREE.OrbitControls(camera,renderer.domElement)
//control.minDistance = 3;
////control.maxDistance = 4;

const PointerLockControls = new THREE.PointerLockControls( camera, renderer.domElement)
document.getElementById('btnplay').onclick = () =>
PointerLockControls.lock();

camera.position.z = 25;
 



//animacion para el cubo
function animate() {
    requestAnimationFrame(animate);  //sellama asi mismo para poder funcionar,reques es una consulta,llamando el espacio completo de la nimacion para funcionar.
    cylinder.rotation.y += 0.5;
    cylinder.rotation.x += 0.05;
    line.rotation.y += 0.05;
    line.rotation.x += 0.05;
    renderer.render(scene, camera);


}
animate();