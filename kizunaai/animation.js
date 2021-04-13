import { OutlineEffect } from './OutlineEffect.js';
$
(
	function()
	{
		/*
		var $myc = $('#myc');
		var $mycAnimationArea = $myc.find('#myc-animation-area');
		var $mycIsPc = $('#myc-is-pc');
		var $topLoading = $myc.find('#myc-top-loading');
		var $topLoadingBar = $topLoading.find('.bar');
		*/
		
		/*
			モーションデータリスト
		*/
		var vmdLists =
		{
			1:
			{
				'fileName': 'biography01_foot_shusei_Bake.vmd',
				'pc':
				{
					'rotationY': 95,
					'positionX': -24,
					'cameraZ': 38,
					'cameraY': 10
				},
				'sp':
				{
					'rotationY': 95,
					'positionX': -18,
					'cameraZ': 45,
					'cameraY': 6
				},
				'isHidden': true,
			},
			2:
			{
				'fileName': 'biography02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 115,
					'positionX': -20,
					'cameraZ': 30,
					'cameraY': 9
				},
				'sp':
				{
					'rotationY': 95,
					'positionX': -14,
					'cameraZ': 45,
					'cameraY': 5
				},
				'isHidden': false
			},
			3:
			{
				'fileName': 'contact01_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 30,
					'positionX': -5,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 30,
					'positionX': -5,
					'cameraZ': 15,
					'cameraY': 20
				},
				'isHidden': false
			},
			4:
			{
				'fileName': 'contact02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 75,
					'positionX': -11,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 75,
					'positionX': -11,
					'cameraZ': 13,
					'cameraY': 21
				},
				'isHidden': false
			},
			5:
			{
				'fileName': 'contact03_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 90,
					'positionX': -13,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 90,
					'positionX': -12,
					'cameraZ': 15,
					'cameraY': 20
				},
				'isHidden': false
			},
			6:
			{
				'fileName': 'news01_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 22,
					'positionX': -4,
					'cameraZ': 10,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': -10,
					'positionX': 2,
					'cameraZ': 9,
					'cameraY': 16
				},
				'isHidden': false
			},
			7:
			{
				'fileName': 'news02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 26,
					'positionX': -4,
					'cameraZ': 10,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': -5,
					'positionX': 2,
					'cameraZ': 9,
					'cameraY': 16
				},
				'isHidden': false
			},
			8:
			{
				'fileName': 'chika.vmd',
				'pc':
				{
					'rotationY': 175,
					'positionX': 0,
					'cameraZ': 35,
					'cameraY': 13
				},
				'sp':
				{
					'rotationY': 0,
					'positionX': -1,
					'cameraZ': 35,
					'cameraY': 13
				},
				'isHidden': false
			},
			9:
			{
				'fileName': 'top_left01_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 270,
					'positionX': 24,
					'cameraZ': 25,
					'cameraY': 14
				},
				'sp':
				{
					'rotationY': -90,
					'positionX': 24,
					'cameraZ': 20,
					'cameraY': 15
				},
				'isHidden': false
			},
			10:
			{
				'fileName': 'top_right01_FIX_Base.vmd',
				'pc':
				{
					'rotationY': 280,
					'positionX': 0,
					'cameraZ': 29,
					'cameraY': 13
				},
				'sp':
				{
					'rotationY': -80,
					'positionX': 0,
					'cameraZ': 26,
					'cameraY': 13
				},
				'isHidden': false
			},
			11:
			{
				'fileName': 'top_right02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 270,
					'positionX': 23,
					'cameraZ': 25,
					'cameraY': 13
				},
				'sp':
				{
					'rotationY': -90,
					'positionX': 23,
					'cameraZ': 25,
					'cameraY': 13
				},
				'isHidden': false
			},
			12:
			{
				'fileName': 'YoutubeAIC_01_02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 22,
					'positionX': -4,
					'cameraZ': 11,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': 5,
					'positionX': 0,
					'cameraZ': 11,
					'cameraY': 16
				},
				'isHidden': false
			},
			13:
			{
				'fileName': 'Youtube_AIC02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': -95,
					'positionX': 11,
					'cameraZ': 15,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': -95,
					'positionX': 11,
					'cameraZ': 15,
					'cameraY': 21
				},
				'isHidden': false
			},
			14:
			{
				'fileName': 'Youtube_AIG01_FIX.vmd',
				'pc':
				{
					'rotationY': 0,
					'positionX': 0,
					'cameraZ': 35,
					'cameraY': 11
				},
				'sp':
				{
					'rotationY': 0,
					'positionX': 0,
					'cameraZ': 35,
					'cameraY': 11
				},
				'isHidden': false
			},
			15:
			{
				'fileName': 'Youtube_AIG02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 25,
					'positionX': -5,
					'cameraZ': 14,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 25,
					'positionX': -5,
					'cameraZ': 14,
					'cameraY': 21
				},
				'isHidden': false
			},
			16:
			{
				'fileName': 'Youtube_AIG03_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 100,
					'positionX': -11,
					'cameraZ': 14,
					'cameraY': 19
				},
				'sp':
				{
					'rotationY': 100,
					'positionX': -11,
					'cameraZ': 14,
					'cameraY': 21
				},
				'isHidden': false
			},
			17:
			{
				'fileName': 'Youtube_AIG02_FIX_Bake.vmd',
				'pc':
				{
					'rotationY': 22,
					'positionX': -4,
					'cameraZ': 11,
					'cameraY': 16
				},
				'sp':
				{
					'rotationY': -5,
					'positionX': 2,
					'cameraZ': 11,
					'cameraY': 16
				},
				'isHidden': false
			},
		};
		
		
		/*
			デフォルトカメラ位置
		*/
		var defaultCamera =
		{
			position:
			{
				x: 0,
				y: 11,
				z: 35
			},
			lookAt: new THREE.Vector3(0, 11, 0)
		};
		
		
		/*
			モーションセンサー
		*/
		var targetCameraPosition =
		{
			x: 0,
			y: defaultCamera.position.y
		};

		/*
		if ($myc.hasClass('type-top'))
		{*/
			var motionSensor = new MotionSensor();
			motionSensor.move = function(e)
			{
				targetCameraPosition.x = e.x * 4;
				targetCameraPosition.y = -e.y * 3 + defaultCamera.position.y;
			};
		//}
		
		
		/*
			GETパラメータ取得
		*/
		var getUrlParameters = function ()
		{
			var parameters = [];
			var hash = '';
			var url = window.location.search;
			
			hash = url.slice(1).split('&');
			
			for (var i = 0; i < hash.length; i++)
			{
				var array = hash[i].split('=');
				parameters.push(array[0]);
				parameters[array[0]] = array[1];
			}
			
			return parameters;
		}
		
		var urlParameters = getUrlParameters();
		
		
		/*
			物理演算
		*/
		var isPhysics = true;

		if (urlParameters.physics == 'on')
		{
			isPhysics = true;
		}
		
		
		/*
			ページ判別して再生リストを生成
		*/
		var vmdPlayList = [1];
		var vmdPlayIndex = 0;
		var vmdTestNumber = 0;	// 開発時はここに指定すること
		
		if (vmdTestNumber)
		{
			vmdPlayList = [vmdTestNumber];
		}
		else if (urlParameters['vmd'])
		{
			vmdPlayList = [urlParameters['vmd']];
		}
		else
		{
			/*
			if ($myc.hasClass('type-biography'))
			{
				vmdPlayList = [1];
			}
			else if ($myc.hasClass('type-contact'))
			{
				vmdPlayList = [4];
			}
			else if ($myc.hasClass('type-news'))
			{
				vmdPlayList = [12];
				
				if ($myc.find('#myc-contents .news-list.detail').length)
				{
					// detail
					vmdPlayList = [17];
				}
			}
			else if ($myc.hasClass('type-top'))
			{
				vmdPlayList = [8];
			}
			else if ($myc.hasClass('type-youtube'))
			{
				if ($myc.hasClass('second'))
				{
					// Games
					vmdPlayList = [16];
				}
				else
				{
					// Channel, China
					vmdPlayList = [13];
				}
			}
			*/
			vmdPlayList = [8];
		}
		
		for (var i = vmdPlayList.length - 1; i > 0; i--)
		{
			var r = Math.floor(Math.random() * (i + 1));
			var tmp = vmdPlayList[i];
			vmdPlayList[i] = vmdPlayList[r];
			vmdPlayList[r] = tmp;
		}
		
		//console.log('vmdPlayList', vmdPlayList);
		
		
		/*
			ウィンドウ読み込みイベント
		*/
		window.onload = function()
		{
			/*
				物理演算初期化
			*/
			Ammo().then
			(
				function(AmmoLib)
				{
					Ammo = AmmoLib;
					
					init();
				}
			);
		};
		
		
		/*
			メイン処理
		*/
		var init = function()
		{
			var clock = new THREE.Clock();
			
			
			// create a scene, that will hold all our elements such as objects, cameras and lights.
			var scene = new THREE.Scene();
			
			// create a camera, which defines where we're looking at.
			var camera = new THREE.PerspectiveCamera
			(
				45,
				600 / 400, //$mycAnimationArea.width() / $mycAnimationArea.height(),
				0.1,
				1000
			);
			
			/*
				レンダラーの種類: WebGL
			*/
			var renderer = new THREE.WebGLRenderer({antialias: true});
			renderer.setClearColor(new THREE.Color(0x333333));
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize
			(
				600, //$mycAnimationArea.width(),
				400, //$mycAnimationArea.height()
			);


			var effect = new OutlineEffect(renderer);


			const listener = new THREE.AudioListener();
			camera.add( listener );
			scene.add( camera );
			
			
			/*
				キャッシュ有効
			*/
			THREE.Cache.enabled = true;
			
			
			/*
				デバッグ用の軸
			*/
			//var axes = new THREE.AxesHelper(20);
			//scene.add(axes);
			
			/*
				カメラ位置
			*/
			camera.position.x = defaultCamera.position.x;
			camera.position.y = defaultCamera.position.y;
			camera.position.z = defaultCamera.position.z;
			
			/*
				方向
			*/
			camera.lookAt(defaultCamera.lookAt);
			
			
			/*
				環境光
			*/
			var ambientLight = new THREE.AmbientLight(0xeeeeee);
			scene.add(ambientLight);
			
			
			/*
				グリッド
			*/
			var gridHelper = new THREE.GridHelper
			(
				400,
				400,
				0x000000,
				0x000000
			);
			gridHelper.visible = false;
			scene.add(gridHelper);
			
			
			/*
				MMDアニメーションヘルパー
			*/
			var helper = new THREE.MMDAnimationHelper();
			
			
			/*
				IK無効
			*/
			helper.enable('ik', false);
			helper.enable('physics', isPhysics);
			helper.enable('cameraAnimation', false);
			
			
			
			/*
				モデルデータを読み込む
				MMD（.pmx）
			*/
			var loader = new THREE.MMDLoader();
			var isFirstPlay = true;
			var isHelperReady = false;
			//var objectSource = null;
			var objectMain = null;
			var animationAction = null;
			var lastAnimationClip = null;
			
			var motionCount = 0;
			
			/*
				モーション処理
			*/
			var motionAction = function()
			{
				/*
					pmxロード
				*/
				loader.load
				(
					'chika/chika.pmx',
					function(object)
					{
						objectMain = object;


						var mesh = object;
						console.log(mesh);
						new OutlineEffect( renderer, {
							defaultThickness: 0.01,
							defaultColor: [ 0, 0, 0 ],
							defaultAlpha: 0.8,
							defaultKeepAlive: true // keeps outline material in cache even if material is removed from scene
						} );
						
						// How to set outline parameters for each material
						for ( let material of mesh.material ) {
							material.userData.outlineParameters = {
								thickness: 0.1,
								color: new THREE.Color( 0xffffff ),
								alpha: 10,
								visible: true,
								keepAlive: true
							};
							console.log(material);
						}
						effect.setSize(600, 400);
						scene.add(effect);

						/*
							モーション番号取得
						*/
						var vmdNumber = vmdPlayList[vmdPlayIndex];
						var vmdData = vmdLists[vmdNumber];

						vmdPlayIndex++;

						if (vmdPlayIndex == vmdPlayList.length)
						{
							vmdPlayIndex = 0;
						}

						/*
							環境判定
						*/
						var vmdDataValues = vmdData.sp;
						
						/*
						if ($mycIsPc.is(':visible') && $(window).width() >= 720) // middle size is sp
						{
							vmdDataValues = vmdData.pc;
						}
						*/

						/*
							キャラ角度
						*/
						objectMain.rotation.y = vmdDataValues.rotationY * (Math.PI / 180);

						if (urlParameters.rotationy)
						{
							objectMain.rotation.y = parseInt(urlParameters.rotationy) * (Math.PI / 180);
						}

						/*
							キャラ横位置
						*/
						objectMain.position.x = vmdDataValues.positionX;

						if (urlParameters.positionx)
						{
							objectMain.position.x = parseInt(urlParameters.positionx);
						}

						/*
							初回のみカメラ調整
						*/
						if (isFirstPlay)
						{
							/*
								カメラ奥行き
							*/
							defaultCamera.position.z = vmdDataValues.cameraZ;

							if (urlParameters.cameraz)
							{
								defaultCamera.position.z = parseInt(urlParameters.cameraz);
							}

							camera.position.z = defaultCamera.position.z;

							/*
								カメラ高さ
							*/
							defaultCamera.position.y = vmdDataValues.cameraY;
							defaultCamera.lookAt.y = vmdDataValues.cameraY;

							if (urlParameters.cameray)
							{
								defaultCamera.position.y = parseInt(urlParameters.cameray);
								defaultCamera.lookAt.y = parseInt(urlParameters.cameray);
							}

							camera.position.y = defaultCamera.position.y;
							targetCameraPosition.y = defaultCamera.position.y;
						}
						
						/*
							ファイル名
						*/
						var fileName = vmdData.fileName;
						
						if (urlParameters.file)
						{
							fileName = urlParameters.file;
						}

						/*
							アニメーションヘルパーにアニメーションを指定
						*/
						loader.loadAnimation
						(
							fileName,
							objectMain,
							function(animationClip)
							{
								lastAnimationClip = animationClip;
								
								/*
									ローディング非表示
								*/
								/*
								$topLoadingBar.css
								(
									'width',
									'100%'
								);
								$topLoading.addClass('hide');
								*/
								
								
								/*
									シーン追加
								*/
								objectMain.visible = false;
								scene.add(objectMain);
								

								/*
									アニメーションヘルパー追加
								*/
								helper.add
								(
									objectMain,
									{
										animation: animationClip
									}
								);

								/*
									アニメーションミキサー取得
								*/
								var animationMixer = helper.objects.get(objectMain).mixer;

								/*
									停止
								*/
								animationMixer.stopAllAction();

								/*
									アクション取得
								*/
								animationAction = animationMixer.clipAction(animationClip);

								/*
									ループなし
								*/
								//animationAction.setLoop(THREE.LoopOnce);
								//animationAction.clampWhenFinished = true;
								
								
								/*
									ヘルパー準備完了
								*/
								isHelperReady = true;
								
								/*
									初回フラグ無効
								*/
								isFirstPlay = false;
							},
							function(e)
							{
								/*
									ローディング進捗2
								*/
								/*
								$topLoadingBar.css
								(
									'width',
									((e.loaded / e.total) * 60 + 40) + '%'
								);
								*/
							}
						);
					},
					function(e)
					{
						/*
							ローディング進捗1
						*/
						/*
						$topLoadingBar.css
						(
							'width',
							((e.loaded / e.total) * 40) + '%'
						);
						*/
					}
				);
				
			};/* /motionAction */
			
			motionAction();
			
			/*
				霧
			*/
			scene.fog = new THREE.Fog
			(
				0xffffff,
				150 * 0.5,
				150
			);
			
			
			// add the output of the renderer to the html element
			document.getElementById("mycanvas").appendChild(renderer.domElement);
			
			
			/*
				アニメーションフレーム描画
			*/
			var clockHelperReadyTime = -1;
			
			var renderScene = function()
			{
				var delta = clock.getDelta();
				
				/*
					カメラ
				*/
				var cameraDiffX = targetCameraPosition.x - camera.position.x;
				var cameraDiffY = targetCameraPosition.y - camera.position.y;
				
				if (Math.abs(cameraDiffX) > 0.02)
				{
					camera.position.x += cameraDiffX * delta * 4;
				}
				
				if (Math.abs(cameraDiffY) > 0.02)
				{
					camera.position.y += cameraDiffY * delta * 4;
				}
				
				camera.lookAt(defaultCamera.lookAt);
				
				/*
					MMDアニメーションヘルパーの更新
				*/
				if (isHelperReady)
				{
					if (clockHelperReadyTime == -1)
					{
						clockHelperReadyTime = clock.elapsedTime;
					}
					else
					{
						if (clock.elapsedTime - clockHelperReadyTime > 0.5)
						{
							/*
								オブジェクト表示
							*/
							gridHelper.visible = true;
							objectMain.visible = true;
						}
					}
					
					helper.update(delta);
				}
				
				/*
					フレーム更新
				*/
				//effect.render(scene, camera);
				renderer.render(scene, camera);
				requestAnimationFrame(renderScene);
			};

			var numLights = 40;
			var lights = [];
			
			function initLights() {

				var distance = 7;

				var c = new THREE.Vector3();
				var geometry = new THREE.SphereGeometry( 0.1, 0.1, 0.1 );

				for ( var i = 0; i < numLights; i ++ ) {

					var light = new THREE.PointLight( 0xffffff, 2.0, distance );
					c.set( Math.random(), Math.random(), Math.random() ).normalize();
					light.color.setRGB( c.x, c.y, c.z );
					scene.add( light );
					lights.push( light );

					var material = new THREE.MeshBasicMaterial( { color: light.color } );
					var emitter = new THREE.Mesh( geometry, material );
					light.add( emitter );

				}

				var directionalLight = new THREE.DirectionalLight( 0x101010 );
				directionalLight.position.set( -1, 1, 1 ).normalize();
				scene.add( directionalLight );

				var spotLight = new THREE.SpotLight( 0x404040 );
				spotLight.position.set( 0, 30, 0 );
				spotLight.angle = 0.5;
				scene.add( spotLight );

			}

			function initRoom() {

				var size = 50;
				var geometry = new THREE.PlaneBufferGeometry( size, size );
				var material = new THREE.MeshPhongMaterial( { color: 0x222222, specular: 0x222222, shininess: 75 } );

				var room = new THREE.Object3D();
				room.position.y = size / 2 - 10;

				// top
				var mesh = new THREE.Mesh( geometry, material );
				mesh.rotation.x = Math.PI/2;
				mesh.position.y = size / 2;
				room.add( mesh );

				// bottom
				mesh = new THREE.Mesh( geometry, material );
				mesh.rotation.x = -Math.PI/2;
				mesh.position.y = -size / 2;
				room.add( mesh );

				// left
				mesh = new THREE.Mesh( geometry, material );
				mesh.position.x = -size / 2;
				mesh.rotation.y = Math.PI/2;
				room.add( mesh );

				// right
				mesh = new THREE.Mesh( geometry, material );
				mesh.position.x = size / 2;
				mesh.rotation.y = -Math.PI/2;
				room.add( mesh );

				// back
				mesh = new THREE.Mesh( geometry, material );
				mesh.position.z = -size / 2;
				room.add( mesh );

				scene.add( room );

			}
			
			initRoom();
			initLights();
			

			const gui = new dat.GUI();
			var obj = { Play:()=>{
				new THREE.AudioLoader().load( 'chika.mp3', function ( buffer ) {
					const audio = new THREE.Audio( listener )
					audio.setBuffer( buffer );
					audio.setLoop( false );
					audio.setVolume( 0.5 );
					audio.autoplay = true;
					helper.add( audio, { delayTime: 160 * 1 / 30 } );
					audio.play();
				}, null, null );

				console.log('Wait');
				setTimeout(function(){
					/*
						アクション開始
					*/
					animationAction.play();
					console.log('Play');
				}, 300);
			}};
			gui.add(obj,'Play');
			renderScene();
			
			
			/*
				ブラウザリサイズ変更
			*/
			/*
			var onResize = function()
			{
				if ($myc.hasClass('history-bg-fix'))
				{
					return;
				}
				
				camera.aspect = $mycAnimationArea.width() / $mycAnimationArea.height();
				camera.updateProjectionMatrix();
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize
				(
					$mycAnimationArea.width(),
					$mycAnimationArea.height()
				);
			};
			
			window.addEventListener('resize', onResize, false);
			*/
		};	/* /init */
	}
);