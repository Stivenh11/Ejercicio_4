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
const geometry = new THREE.SphereGeometry( 3, 20, 10 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.x = 0;
sphere.position.y = 2;


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

line.position.x = 0;
line.position.y = 2;


camera.position.z = 15;


//animacion para el cubo
function animate() {
    requestAnimationFrame(animate); 
    sphere.rotation.y += 0.1;
    sphere.rotation.x += 0.03;
    renderer.render(scene, camera);
    line.rotation.y += 0.1;
    line.rotation.x += 0.03;

}
animate();