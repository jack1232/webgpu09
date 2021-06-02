(()=>{"use strict";var e={949:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckWebGPU=t.InitGPU=t.CreateGPUBuffer=t.CreateGPUBufferUint=void 0,t.CreateGPUBufferUint=(e,t,n=GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST)=>{const r=e.createBuffer({size:t.byteLength,usage:n,mappedAtCreation:!0});return new Uint32Array(r.getMappedRange()).set(t),r.unmap(),r},t.CreateGPUBuffer=(e,t,n=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const r=e.createBuffer({size:t.byteLength,usage:n,mappedAtCreation:!0});return new Float32Array(r.getMappedRange()).set(t),r.unmap(),r},t.InitGPU=()=>n(void 0,void 0,void 0,(function*(){var e;const n=t.CheckWebGPU();if(n.includes("Your current browser does not support WebGPU!"))throw console.log(n),"Your current browser does not support WebGPU!";const r=document.getElementById("canvas-webgpu"),o=yield null===(e=navigator.gpu)||void 0===e?void 0:e.requestAdapter(),a=yield null==o?void 0:o.requestDevice(),i=r.getContext("gpupresent"),u="bgra8unorm";return{device:a,canvas:r,swapChainFormat:u,swapChain:i.configureSwapChain({device:a,format:u})}})),t.CheckWebGPU=()=>{let e="Great, your current browser supports WebGPU!";return navigator.gpu||(e='Your current browser does not support WebGPU! Make sure you are on a system \n                     with WebGPU enabled. Currently, SPIR-WebGPU is only supported in  \n                     <a href="https://www.google.com/chrome/canary/">Chrome canary</a>\n                     with the flag "enable-unsafe-webgpu" enabled. See the \n                     <a href="https://github.com/gpuweb/gpuweb/wiki/Implementation-Status"> \n                     Implementation Status</a> page for more details.                   \n                    '),e}},519:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(949),a=n(708);r(void 0,void 0,void 0,(function*(){const e=yield o.InitGPU(),t=e.device,n=new Float32Array([-.5,-.5,1,0,0,.5,-.5,0,1,0,.5,.5,0,0,1,-.5,.5,1,1,0]),r=new Uint32Array([0,1,3,3,1,2]),i=o.CreateGPUBuffer(t,n),u=o.CreateGPUBufferUint(t,r),s=a.Shaders(),c=t.createRenderPipeline({vertex:{module:t.createShaderModule({code:s.vertex}),entryPoint:"main",buffers:[{arrayStride:20,attributes:[{shaderLocation:0,format:"float32x2",offset:0},{shaderLocation:1,format:"float32x3",offset:8}]}]},fragment:{module:t.createShaderModule({code:s.fragment}),entryPoint:"main",targets:[{format:e.swapChainFormat}]},primitive:{topology:"triangle-list"}}),f=t.createCommandEncoder(),l=e.swapChain.getCurrentTexture().createView(),v=f.beginRenderPass({colorAttachments:[{view:l,loadValue:{r:.5,g:.5,b:.8,a:1},storeOp:"store"}]});v.setPipeline(c),v.setVertexBuffer(0,i),v.setIndexBuffer(u,"uint32"),v.drawIndexed(6),v.endPass(),t.queue.submit([f.finish()])}))},708:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ShadersOld=t.Shaders=void 0,t.Shaders=()=>({vertex:"\n        struct Output {\n            [[builtin(position)]] Position : vec4<f32>;\n            [[location(0)]] vColor : vec4<f32>;\n        };\n        [[stage(vertex)]]\n        fn main([[location(0)]] pos: vec4<f32>, [[location(1)]] color: vec4<f32>) -> Output {\n            var output: Output;\n            output.Position = pos;\n            output.vColor = color;\n            return output;\n        }",fragment:"\n        [[stage(fragment)]]\n        fn main([[location(0)]] vColor: vec4<f32>) -> [[location(0)]] vec4<f32> {\n            return vColor;\n        }"}),t.ShadersOld=()=>({vertex:"\n        [[location(0)]] var<in> position : vec4<f32>;\n        [[location(1)]] var<in> color : vec4<f32>;\n        [[builtin(position)]] var<out> Position : vec4<f32>;\n        [[location(0)]] var<out> vColor : vec4<f32>;\n\n        [[stage(vertex)]]\n        fn main() -> void {\n            Position = position;\n            vColor = color;\n            return;\n        }",fragment:"\n        [[location(0)]] var<in> vColor : vec4<f32>;\n        [[location(0)]] var<out> fragColor : vec4<f32>;\n\n        [[stage(fragment)]]\n        fn main() -> void {\n            fragColor = vColor;\n            return;\n        }"})}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(519)})();
//# sourceMappingURL=main.bundle.js.map