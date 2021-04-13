var container;

var camera, scene, renderer, effect;
var helper;
var shaderPass, composer, composer2;

var chika;
var main = new THREE.Group();
var beams = new THREE.Group();
var beams2 = new THREE.Group();
var monitors = new THREE.Group();

beams.visible = false;
beams2.visible = false;
monitors.visible = false;

var directionalLight, spotLight;

var ready = false;

var star, bone_index, bone_index2;

var innerWidth = 1200, innerHeight = 800;

var clock = new THREE.Clock();

const gui = new dat.GUI({ autoPlace: false });

var subtitles, current_index = -1, subtitles_dom;

var modelFile = 'chika/chika2.pmx';
var vmdFiles = ['chika.vmd'];
var cameraFiles = ['camera.vmd'];
var audioFile = 'chika.mp3';
var audioParams = {
    delayTime: 15 * 1 / 30
};

init();

$.getJSON("subtitles.json", function(json) {
    subtitles = json.body;
});

$(() => {
    subtitles_dom = $('#subtitles').get(0);
})

function init() {

    container = document.getElementById('mycanvas');
    container.appendChild(gui.domElement);
    var obj = { Play:()=>{
        gui.close();
        animate();
    }};
    gui.add(obj,'Play');

    camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 2000);
    camera.position.y = 15;
    camera.position.z = 50;

    // renderer

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearColor(new THREE.Color(0x111111));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    effect = new THREE.OutlineEffect(renderer);

    // scene

    scene = new THREE.Scene();

    // lights

    spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(5, 20, 15);
    spotLight.angle = 0.8;
    spotLight.intensity = 0.15;
    spotLight.penumbra = 0.8;
    spotLight.castShadow = true;

    // Model specific Shadow parameters
    spotLight.shadow.bias = -0.001;

    scene.add(spotLight);
    scene.add(spotLight.target);

    directionalLight = new THREE.DirectionalLight(0x333333);
    directionalLight.position.set(-15, 15, 20);

    // Shadow parameters
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.x = 1024;
    directionalLight.shadow.mapSize.y = 1024;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.bottom = -20;

    // Model specific Shadow parameters
    renderer.shadowMap.renderSingleSided = false;
    renderer.shadowMap.renderReverseSided = false;
    directionalLight.shadow.bias = -0.001;

    scene.add(directionalLight);

    // pass

    var bloomPass = new THREE.UnrealBloomPass(
        new THREE.Vector2(innerWidth, innerHeight),
        1.0, 0.7, 0.1
    );

    var copyPass = new THREE.ShaderPass(THREE.CopyShader);
    var copyPass2 = new THREE.ShaderPass(THREE.CopyShader);

    copyPass.renderToScreen = true;

    composer = new THREE.EffectComposer(renderer);
    composer.setSize(innerWidth, innerHeight);
    composer.addPass(bloomPass);
    composer.addPass(copyPass);

    composer2 = new THREE.EffectComposer(renderer);
    composer2.readBuffer = composer.readBuffer;
    composer2.setSize(innerWidth, innerHeight);
    composer2.addPass(copyPass2);

    // model

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {};

    const tloader = new THREE.FontLoader();
    tloader.load( 'helvetiker_bold.typeface.json', function ( font ) {

        const textGeo = new THREE.TextGeometry( "THREE.JS", {

            font: font,

            size: 200,
            height: 50,
            curveSegments: 12,

            bevelThickness: 2,
            bevelSize: 5,
            bevelEnabled: true

        } );

        textGeo.computeBoundingBox();
        const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

        const textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff } );

        const mesh = new THREE.Mesh( textGeo, textMaterial );
        mesh.position.x = centerOffset;
        mesh.position.y = 67;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add( mesh );

    } );

    helper = new THREE.MMDHelper();

    var loader = new THREE.MMDLoader();

    loader.load(modelFile, vmdFiles, function (object) {
        var mesh = object;
        chika = mesh;

        bone_index = chika.skeleton.bones.findIndex(obj => { return obj.name == "右人指３" });
        bone_index2 = chika.skeleton.bones.findIndex(obj => { return obj.name == "左人指３" });
        //console.log(chika.children);

        var materials = mesh.material;

        for (var i = 0, il = materials.length; i < il; i++) {
            var material = materials[i];
            material.emissive.multiplyScalar( 0.2 );
        }

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        helper.add(mesh);
        helper.setAnimation(mesh);
        helper.setPhysics(mesh);

        main.add(mesh);

        loader.loadVmds(cameraFiles, function (vmd) {

            helper.setCamera(camera);

            loader.pourVmdIntoCamera(camera, vmd);
            helper.setCameraAnimation(camera);

            loader.loadAudio(audioFile, function (audio, listener) {
                listener.position.z = 1;

                helper.setAudio(audio, listener, audioParams);

                /*
                 * Note: call this method after you set all animations
                 *       including camera and audio.
                 */
                helper.unifyAnimationDuration({
                    afterglow: 2.0
                });

                scene.add(audio);
                scene.add(listener);
                scene.add(main);

                star = new THREE.Mesh(
                    new THREE.SphereBufferGeometry(0.1, 8),
                    new THREE.MeshPhongMaterial({
                        opacity: 0.1,
                        transparent: true
                    })
                );

                ready = true;

            }, onProgress, onError);

        }, onProgress, onError);

    }, onProgress, onError);

    // beams

    var geometry = new THREE.SphereBufferGeometry(0.05, 4);

    var beamNum = 200;

    for (var i = 0; i < beamNum; i++) {

        beams.add(new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({
                color: 0xffff88,
                opacity: 0.25 - 0.25 / beamNum * i,
                transparent: true
            })
        ));

        beams2.add(new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({
                color: 0xffff88,
                opacity: 0.25 - 0.25 / beamNum * i,
                transparent: true
            })
        ));

    }

    scene.add(beams);
    scene.add(beams2);

    // back & ground

    main.add(new THREE.Mesh(
        new THREE.SphereBufferGeometry(256, 32),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        })
    ));

    var ground = new THREE.Mesh(
        new THREE.CircleBufferGeometry(50, 32),
        new THREE.MeshPhongMaterial({
            color: 0x444444,
            emissive: 0x8E1D7C,
            side: THREE.FrontSide
        })
    );
    ground.rotation.x = -90 * Math.PI / 180;
    ground.receiveShadow = true;
    main.add(ground);

    // monitors

    var geometry = new THREE.PlaneBufferGeometry(100, 40);

    var material = new THREE.ShaderMaterial({
        uniforms: {
            strength: {
                value: 0.20
            },
            tDiffuse: {
                value: composer2.writeBuffer.texture
            }
        },
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });

    var edgeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000
    });

    function createMonitor() {

        var mesh = new THREE.Mesh(geometry, material);
        var edge = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            color: 0xffffff
        }));
        edge.scale.multiplyScalar(1.01);
        edge.position.z -= 0.01;

        mesh.add(edge);

        return mesh;

    }

    var tv;

    tv = createMonitor();
    tv.position.y = 25;
    tv.position.z = -50;
    tv.rotation.x = 180 * Math.PI / 180;
    tv.rotation.y = 180 * Math.PI / 180;
    tv.rotation.z = 180 * Math.PI / 180;
    monitors.add(tv);

    tv = createMonitor();
    tv.position.x = -70;
    tv.position.y = 25;
    tv.position.z = 0;
    tv.rotation.x = 180 * Math.PI / 180;
    tv.rotation.y = 110 * Math.PI / 180;
    tv.rotation.z = 180 * Math.PI / 180;
    monitors.add(tv);

    tv = createMonitor();
    tv.position.x = 70;
    tv.position.y = 25;
    tv.position.z = 0;
    tv.rotation.x = 180 * Math.PI / 180;
    tv.rotation.y = -110 * Math.PI / 180;
    tv.rotation.z = 180 * Math.PI / 180;
    monitors.add(tv);

    scene.add(monitors);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();

    effect.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    composer2.setSize(innerWidth, innerHeight);

}

//
function updateBeams() {

    var pos = chika.skeleton.bones[bone_index].getWorldPosition(), pos2 = chika.skeleton.bones[bone_index2].getWorldPosition();

    var num = 20;

    for (var i = beams.children.length - 1; i > 0; i--) {

        if (i < num) {

            beams.children[i].position.copy(beams.children[0].position).lerp(pos, i / num);
            beams2.children[i].position.copy(beams2.children[0].position).lerp(pos2, i / num);

        } else {

            beams.children[i].position.copy(beams.children[i - num].position);
            beams2.children[i].position.copy(beams2.children[i - num].position);

        }

    }

    beams.children[0].position.copy(pos);
    beams2.children[0].position.copy(pos2);

}

function updateSubtitles(){
    var flag = false;
    if (current_index == -1 || (current_index < subtitles.length && clock.elapsedTime > subtitles[current_index].to + audioParams.delayTime)){
        current_index++;
        flag = true;
    }
    if (flag)
        subtitles_dom.innerHTML = subtitles[current_index].content.replace('\n', '<br>');
}

function animate() {

    requestAnimationFrame(animate);
    render();

}

function render() {

    if (ready) {

        var delta = clock.getDelta();
        helper.animate(delta);

        spotLight.target.position.copy(chika.children[3].getWorldPosition());

        updateBeams();
        updateSubtitles();
    }

    // pass 1. render main

    renderer.autoClear = true;
    renderer.shadowMap.enabled = true;

    scene.autoUpdate = true;

    main.visible = true;
    //beams.visible = false;
    monitors.visible = false;

    effect.render(scene, camera, composer.readBuffer);

    // pass 2. render beams

    renderer.autoClear = false;
    renderer.shadowMap.enabled = false;

    scene.autoUpdate = false;

    main.visible = false;
    beams.visible = true;
    beams2.visible = true;
    monitors.visible = false;

    renderer.render(scene, camera, composer.readBuffer);

    // pass 3. copy for monitors

    composer2.render();

    // pass 4. render monitors

    main.visible = false;
    beams.visible = false;
    beams2.visible = false;
    monitors.visible = true;

    renderer.render(scene, camera, composer.readBuffer);

    // pass 5. render to screen

    composer.render();

}