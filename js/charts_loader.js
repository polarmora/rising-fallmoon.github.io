var schema = [
	{name: 'year', index: 0, text: '年份'},
	{name: 'socre', index: 1, text: '评分'},
	{name: 'gross', index: 2, text: '票房'},
	{name: 'name', index: 3, text: '名称'},
	{name: 'type', index: 4, text: '类型'}
];

//年份，评分，票房，名称，类型
var dataCJS = [
	[2003,5.5,23000,"老鼠爱上猫","喜剧 / 动作 / 爱情"],
	[2011,4.4,15064,"画壁","剧情 / 动作 / 爱情 / 奇幻"],
	[2008,6.5,20470,"画皮 畫皮","剧情 / 动作 / 惊悚"],
	[2012,5,19985,"四大名捕","动作 / 爱情 / 悬疑 / 武侠 / 古装"],
	[2013,4.8,17428,"四大名捕2","动作 / 悬疑 / 奇幻 / 武侠 / 古装"],
	[2014, 4.7, 19234, "四大名捕大结局", "陈嘉上 ,动作 / 爱情 / 悬疑 / 武侠 / 古装"],
];
var dataCKX = [
	[2011,6.6,17021,"武侠","剧情 / 动作 / 悬疑 / 武侠"],
	[2013,7.6,53879.9,"中国合伙人","剧情"],
	[2014,8.3,34517.2,"亲爱的","剧情 / 家庭"],
];
var dataDQF = [
	[2004,6.5,650,"大事件","剧情 / 动作 / 犯罪"]
];
var dataEDS = [
	[2005,6.3,579.4,"千杯不醉","喜剧 / 爱情"]
];
var dataLCX = [
	[2008,7.2,1547.6,"证人","动作 / 惊悚"]
];

var itemStyle = {
	normal: {
		opacity: 0.8,
		shadowBlur: 10,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		shadowColor: 'rgba(0, 0, 0, 0.5)'
	}
};

// 指定图表的配置项和数据
var option = {
	backgroundColor: '#404a59',
	color: [
		'#dd4444', '#fec42c', '#80F1BE'
	],
	legend: {
		y: 'top',
		data: ['陈嘉上', '陈可辛', '杜琪峰', '尔冬升', '林超贤'],
		textStyle: {
			color: '#fff',
			fontSize: 16
		}
	},
	grid: {
		x: '10%',
		x2: 150,
		y: '18%',
		y2: '10%'
	},
	tooltip: {
		padding: 10,
		backgroundColor: '#222',
		borderColor: '#777',
		borderWidth: 1,
		formatter: function (obj) {
			var value = obj.value;
			return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
				+ obj.seriesName + ' ' + value[0] + '年：'
				+ value[3]
				+ '</div>'
				+ schema[1].text + '：' + value[1] + '<br>'
				+ schema[2].text + '：' + value[2] + '<br>'
				+ schema[4].text + '：' + value[4] + '<br>'
		}
	},
	xAxis: {
		type: 'value',
		name: '年份',
		nameGap: 16,
		nameTextStyle: {
			color: '#fff',
			fontSize: 14
		},
		max: 31,
		splitLine: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#eee'
			}
		}
	},
	yAxis: {
		type: 'value',
		name: '票房',
		nameLocation: 'end',
		nameGap: 20,
		nameTextStyle: {
			color: '#fff',
			fontSize: 16
		},
		axisLine: {
			lineStyle: {
				color: '#eee'
			}
		},
		splitLine: {
			show: false
		}
	},
	visualMap: [
		{
			left: 'right',
			top: '10%',
			dimension: 2,
			min: 0,
			max: 500000,
			itemWidth: 30,
			itemHeight: 120,
			calculable: true,
			precision: 0.1,
			text: ['圆形大小：票房高低'],
			textGap: 30,
			textStyle: {
				color: '#fff'
			},
			inRange: {
				symbolSize: [10, 70]
			},
			outOfRange: {
				symbolSize: [10, 70],
				color: ['rgba(255,255,255,.2)']
			},
			controller: {
				inRange: {
					color: ['#c23531']
				},
				outOfRange: {
					color: ['#444']
				}
			}
		},
		{
			left: 'right',
			bottom: '5%',
			dimension: 1,
			min: 0,
			max: 10,
			itemHeight: 120,
			calculable: true,
			precision: 0.1,
			text: ['明暗：评分'],
			textGap: 30,
			textStyle: {
				color: '#fff'
			},
			inRange: {
				colorLightness: [1, 0.5]
			},
			outOfRange: {
				color: ['rgba(255,255,255,.2)']
			},
			controller: {
				inRange: {
					color: ['#c23531']
				},
				outOfRange: {
					color: ['#444']
				}
			}
		}
	],
	series: [
		{
			name: '陈嘉上',
			type: 'scatter',
			itemStyle: itemStyle,
			data: dataCJS
		},
		{
			name: '陈可辛',
			type: 'scatter',
			itemStyle: itemStyle,
			data: dataCKX
		},
		{
			name: '杜琪峰',
			type: 'scatter',
			itemStyle: itemStyle,
			data: dataDQF
		}
		,
		{
			name: '尔冬升',
			type: 'scatter',
			itemStyle: itemStyle,
			data: dataEDS
		},
		{
			name: '林超贤',
			type: 'scatter',
			itemStyle: itemStyle,
			data: dataLCX
		}
	]
};
