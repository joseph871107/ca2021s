/*
	YouTube iframe API
	2019/07/08
	2019/11/11
	
	scriptタグにdeferをつけること（IEで動作しないことがあるため）
	自動再生を有効にするには表示領域が画面内に表示されていること
*/
var ytmovieInstanceArray = [];


/*
	YouTube APIコールバック
*/
var onYouTubeIframeAPIReady = function()
{
	for (var index = 0; index < ytmovieInstanceArray.length; index++)
	{
		ytmovieInstanceArray[index].onApiReady();
	}
};

/*
	クラス
*/
var ytmovieClass = function()
{
	this.ytPlayer;
	this.ytPlaying = false;
	
	
	/*
		インスタンスを保持
	*/
	ytmovieInstanceArray.push(this);
	
	
	/*
		API準備完了
	*/
	this.onApiReady = function()
	{
		
	};
	
	
	/*
		再生状態の変化
	*/
	this.onPlayerStateChange = function(event)
	{
		if (event.data == YT.PlayerState.PLAYING)
		{
			this.ytPlaying = true;
		}
		else
		{
			this.ytPlaying = false;
		}
	};
	
	
	/*
		再生準備完了時
	*/
	this.onPlayerReady = function()
	{
		/*
			自動再生（ミュート）
		*/
		//ytPlayer.mute();
		//ytPlayer.playVideo();
	};
	
	
	/*
		再生
	*/
	this.playMovie = function()
	{
		this.ytPlayer.playVideo();
	};
	
	
	/*
		動画削除
	*/
	this.closeMovie = function()
	{
		if (!this.ytPlayer)
		{
			return;
		}
		
		this.ytPlaying = false;
		
		this.ytPlayer.pauseVideo();
		this.ytPlayer.destroy();
		this.ytPlayer = null;
	};
	
	
	/*
		動画停止
	*/
	this.stopMovie = function()
	{
		if (!this.ytPlayer)
		{
			return;
		}
		
		this.ytPlaying = false;
		
		this.ytPlayer.pauseVideo();
	};
	
	
	/*
		初期化
	*/
	this.setMovie = function
	(
		divId,
		youtubeVideoId,
		width,
		height
	)
	{
		this.closeMovie();
		
		this.ytPlayer = new YT.Player
		(
			divId,
			{
				width: width,
				height: height,	
				videoId: youtubeVideoId,
				
				playerVars:
				{
					modestbranding: 1,
					playsinline: 1,
					rel: 0,
					showinfo: 0,
					wmode: 'transparent'
				},
				events:
				{
					'onStateChange': this.onPlayerStateChange,
					'onReady': this.onPlayerReady
				}
			}
		);
	};
};