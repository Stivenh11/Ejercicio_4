const scene = new THREE.Scene();


{
    const color = 0x0001110;
    const near = 1;
    const far = 60;
    const density = 1;
    scene.fog = new THREE.Fog(color, near, far, density);
    }

//para añadir color
scene.background = new THREE.Color(0x1a2);
//loader.load();

// para añadir imagen



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//el 75 es profundidad fov, ancho alto, 
//y lo ultimo del parentesis es que tan ejos y que tan cerca es definir la vista del cubo.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );//el openchild es pa/2ra acar algode js y mostrarlo en html a


//codigo de three para crear el cubo y la camara para ver el objeto
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 160 );
//textura metalizada 
const material = new THREE.MeshStandardMaterial();
material.metalness = 1;
material.roughness = 0;
scene.background = new THREE.Color("lightblue")
material.background = new THREE.Color(0xeeeeee)
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );




const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xbbbbbb } ) );
scene.add( line );

torusKnot.position.y = 5;
line.position.y = 5;
camera.position.z = 50;


//animacion para el cubo
function animate() {
    requestAnimationFrame(animate);  //sellama asi mismo para poder funcionar,reques es una consulta,llamando el espacio completo de la nimacion para funcionar.
    torusKnot.rotation.y += 0.001;
    torusKnot.rotation.x += 0.005;
    line.rotation.y += 0.001;
    line.rotation.x += 0.005;
    renderer.render(scene, camera);

}
animate();