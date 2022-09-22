const scene = new THREE.Scene();


//para añadir color
scene.background = new THREE.Color(0x1a2b3c);
//loader.load();

// para añadir imagen
var loader = new THREE.TextureLoader
loader.load('../imagenes/background.jpg', function(texture){
    scene.background = texture;
});


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.6, 1000 );//el 75 es profundidad fov, ancho alto, 
//y lo ultimo del parentesis es que tan ejos y que tan cerca es definir la vista del cubo.

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );//el openchild es pa/2ra acar algode js y mostrarlo en html a


//codigo de three para crear el cubo y la camara para ver el objeto


const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../imagenes/texture2_jpg.jpg')

//codigo de three para crear el cubo y la camara para ver el objeto

const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;


const cone = new THREE.Mesh( geometry, material );
scene.add( cone )




camera.position.z = 20
;
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
line.position.x = 7;
cone.position.x = 7;

scene.add( line );


//animacion para el cubo
function animate() {
    requestAnimationFrame(animate);  //sellama asi mismo para poder funcionar,reques es una consulta,llamando el espacio completo de la nimacion para funcionar.
    cone.rotation.y += 10;
    cone.rotation.x += 0.02;
    line.rotation.y += 10;
    line.rotation.x += 0.02;

    renderer.render(scene, camera);

}
animate();