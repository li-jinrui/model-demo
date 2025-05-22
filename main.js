/* // 1. 初始化场景、相机、渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,                                   // 视野角度
  window.innerWidth / window.innerHeight, // 宽高比
  0.1,                                  // 近裁剪面
  1000                                  // 远裁剪面
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. 添加一个立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);  // 创建立方体几何体
const material = new THREE.MeshPhongMaterial({    // 添加材质（带光照）
  color: 0x00ff00,
  shininess: 100
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 3. 添加光源
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// 4. 设置相机位置
camera.position.z = 5;

// 5. 添加交互控制（鼠标拖拽旋转）
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// 6. 动画循环
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;  // 立方体自动旋转
  cube.rotation.y += 0.01;
  controls.update();         // 更新交互控制
  renderer.render(scene, camera);
}
animate();

// 7. 响应窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}); */