// import Vue from "vue";
// import Mountain from "./components/mountains.vue";

// if(module.hot){
// 	module.hot.accept("./components/mountains.vue", function (){
// 		alert("ddj")
// 	});
// }

// new Vue({
// 	el: "body",
// 	components: {
// 		Mountain
// 	}
// })
import React from 'react'
import { render } from 'react-dom'
import SimpleComponent from 'SimpleComponent'

if (module.hot) {
  module.hot.accept();
}
render(
	<div>
		<h2>this is999sd1 tytytyt</h2>
		<SimpleComponent/>
	</div>
	,
	document.getElementById('main')
);