(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=(a(16),a(1)),o=a(5),s=a(6),u=a(8),m=a(7),h=a(9),d=(a(17),a(3),function(e){return r.a.createElement("div",{className:"ip"},e.label&&r.a.createElement("label",{htmlFor:e.id},e.label),r.a.createElement("input",Object.assign({checked:e.checked,disabled:e.disabled,type:e.type||"text",className:e.className,value:e.value,id:e.id,placeholder:e.placeholder,onChange:e.onChange,onBlur:e.onBlur,name:e.name},e)))}),p="de5f8ae62cbbca76711831cf28072c18",E=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit,className:e.className},e.children)},f=function(e){return r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(e.image.icon,".png"),alt:e.image.description})},g=(a(18),function(e){return r.a.createElement("div",{className:"current-weather"},r.a.createElement("h1",null,"Current weather in ",e.city," is:"),r.a.createElement(f,{image:e.data.weather[0]}),r.a.createElement("p",null,"Temparature: ".concat(e.data.main.temp).concat("metric"===e.units?"\xb0C":"F")),r.a.createElement("p",null,"Humidity: ".concat(e.data.main.humidity,"%")),r.a.createElement("p",null,"Cloud: ".concat(e.data.clouds.all,"%")))}),v=(a(19),function(e){return r.a.createElement("div",{className:"weather-card"},r.a.createElement("p",null,e.time),r.a.createElement(f,{image:e.data.weather[0]}),r.a.createElement("div",null,e.data.main.temp,"metric"===e.units?"\xb0C":"F"))}),y=(a(20),function(e){for(var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=[],n=[],c=(new Date).getDay(),i=0;i<40;i+=8){c=c<6?0:c++;for(var l=0;l<8;l++)a.push(r.a.createElement(v,{time:0===l?"0 am":"".concat(3*l,3*l<12?" am":" pm"),data:e.data[i+l],units:e.units}));n.push(a),a=[]}return n.map(function(e,a){return r.a.createElement("div",null,r.a.createElement("h3",null,t[c++]," "),r.a.createElement("div",{className:"daily-weather"},r.a.createElement("div",{key:a},e)))})}),b=(a(21),function(e){return r.a.createElement("div",{className:"forecast-weather"},r.a.createElement("h2",null,"The temperature in ",e.city," per 3 hours within the next 5 days is:"," "),r.a.createElement("div",{className:"temperature"},r.a.createElement(y,{data:e.data.list,units:e.units})))}),w=(a(22),function(e){return r.a.createElement("div",{className:"overlay".concat(e.open?" open":"")},r.a.createElement("div",{class:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,weatherData:null,city:"",currentWeather:!0,forecastWeather:!0,units:"metric"},a.onChange=function(e){var t;a.setState((t={},Object(l.a)(t,e.target.name||e.target.id,e.target.value),Object(l.a)(t,"error",null),t))},a.onChangeCheckbox=function(e){a.setState(Object(l.a)({},e.target.name||e.target.id,!a.state[e.target.name||e.target.id]))},a.onSubmit=function(e){e.preventDefault(),a.setState({loading:!0,forecastData:null,weatherData:null}),a.state.currentWeather&&fetch("".concat(window.location.protocol,"//api.openweathermap.org/data/2.5/weather?q=").concat(a.state.city,"&appid=").concat(p,"&units=").concat(a.state.units)).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(e){a.setState({weatherData:e,loading:!1,currentUnits:a.state.units,currentCity:a.state.city})}).catch(function(e){return a.setState({error:e,loading:!1})}),a.state.forecastWeather&&fetch("".concat(window.location.protocol,"//api.openweathermap.org/data/2.5/forecast?q=").concat(a.state.city,"&appid=").concat(p,"&units=").concat(a.state.units)).then(function(e){return e.ok||e.json().then(function(e){throw e}),e.json()}).then(function(e){a.setState({forecastData:e,loading:!1,currentUnits:a.state.units,currentCity:a.state.city})}).catch(function(e){return a.setState({error:e,loading:!1})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,{open:this.state.loading}),r.a.createElement("header",{className:"App-header"},r.a.createElement(E,{onSubmit:this.onSubmit},r.a.createElement(d,{label:"City: ",value:this.state.city,id:"city",placeholder:"Enter city",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement(d,{label:"Current Weather",id:"currentWeather",type:"checkbox",onChange:this.onChangeCheckbox,checked:this.state.currentWeather}),r.a.createElement("br",null),r.a.createElement(d,{label:"Forecast Weather",id:"forecastWeather",type:"checkbox",onChange:this.onChangeCheckbox,checked:this.state.forecastWeather}),r.a.createElement("br",null),r.a.createElement(d,{label:"Imperial units",checked:"imperial"===this.state.units,id:"ImperialUnits",type:"radio",name:"units",value:"imperial",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement(d,{label:"Metric units",checked:"metric"===this.state.units,id:"MetricUnit",type:"radio",name:"units",value:"metric",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement(d,{className:"submit",disabled:!(this.state.currentWeather||this.state.forecastWeather)||this.state.loading||!this.state.city,type:"submit",value:this.state.loading?"Loading...":"Submit"})),this.state.weatherData&&r.a.createElement(g,{city:this.state.currentCity,data:this.state.weatherData,units:this.state.currentUnits}),this.state.forecastData&&r.a.createElement(b,{data:this.state.forecastData,city:this.state.currentCity,units:this.state.currentUnits}),this.state.error&&r.a.createElement("p",null,"SOMETHING SOMEWHERE WENT TERRIBLY WRONG.",this.state.error.message)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.f06d4b12.chunk.js.map