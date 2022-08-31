const scene = new THREE.Scene();


//para añadir color
scene.background = new THREE.Color(0x000000);
//loader.load();

// para añadir imagen
var loader = new THREE.TextureLoader;
loader.load('./imagenes/background.jpeg', function(texture){
    scene.background = texture;
});


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//el 75 es profundidad fov, ancho alto, 
//y lo ultimo del parentesis es que tan ejos y que tan cerca es definir la vista del cubo.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );//el openchild es pa/2ra acar algode js y mostrarlo en html a


//codigo de three para crear el cubo y la camara para ver el objeto
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube )

camera.position.z = 5;


//animacion para el cubo
function animate() {
    requestAnimationFrame(animate);  //sellama asi mismo para poder funcionar,reques es una consulta,llamando el espacio completo de la nimacion para funcionar.
    cube.rotation.y += 0.05;
    cube.rotation.x += 0.05;
    renderer.render(scene, camera);

}
animate();