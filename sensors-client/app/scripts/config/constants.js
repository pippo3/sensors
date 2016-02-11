angular.module('app.config')
  .constant('urls', {
    host: 'http://192.168.178.30:3000/',
    getCurrentTemperatur: 'getCurrentTemperatur'
  })

  .constant('gaugeconfig', {
    'title': undefined,
    'titleFontColor': undefined,
    'value': 20,
    'valueFontColor': undefined,
    'min': 0,
    'max': 50,
    'valueMinFontSize': undefined,
    'titleMinFontSize': undefined,
    'labelMinFontSize': undefined,
    'minLabelMinFontSize': undefined,
    'maxLabelMinFontSize': undefined,
    'hideValue': undefined,
    'hideMinMax': undefined,
    'hideInnerShadow': undefined,
    'width': 400,
    'height': 320,
    'relativeGaugeSize': undefined,
    'gaugeWidthScale': 1,
    'gaugeColor': undefined,
    'showInnerShadow': undefined,
    'shadowOpacity': undefined,
    'shadowSize': undefined,
    'shadowVerticalOffset': undefined,
    'levelColors': ['#00FFF2', '#668C54', '#FFAF2E', '#FF2EF1'],
    'customSectors': [
    {
        color: "#007EFF",
        lo: 0,
        hi: 5
    },
      {
        color: "#00FF48",
        lo: 5,
        hi: 10
      },
    {
      color: "#F6FF00",
      lo: 11,
      hi: 15
    },
    {
      color: "#FFD800",
      lo: 16,
      hi: 20
    },
      {
        color: "#FF9C00",
        lo: 21,
        hi: 25
      },
      {
        color: "#FF6C00",
        lo: 26,
        hi: 35
      },
      {
        color: "#FF0000",
        lo: 36,
        hi: 50
      }

    ],
    'noGradient': undefined,
    'label': 'Grad Celsius',
    'labelFontColor': '',
    'startAnimationTime': 0,
    'startAnimationType': undefined,
    'refreshAnimationTime': undefined,
    'refreshAnimationType': undefined,
    'donut': undefined,
    'donutAngle': undefined,
    'counter': undefined,
    'decimals': undefined,
    'symbol': '°C',
    'formatNumber': true,
    'humanFriendly': true,
    'humanFriendlyDecimal': true,
    'textRenderer': function (value) {
      return value;
    }
  })
