import { BlendFunction, Effect } from "postprocessing"
import { Uniform } from "three"

const fragmentShader = /* glsl */ `
	uniform float uFrequency;
	uniform float uAmplitude;
	uniform float offset;

	void mainUv(inout vec2 uv) {
		uv.y += sin(uv.x * uFrequency + offset) * uAmplitude;
	}

	void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
		vec4 color = inputColor;
		// color.rgb *= vec3(0.8, 1.0, 0.5);
		
		outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
	}
`

export default class DrunkEffect extends Effect {
  constructor({
    uFrequency = 10,
    uAmplitude = 0.1,
    blendFunction = BlendFunction.DARKEN,
  }) {
    super("DrunkEffect", fragmentShader, {
      uniforms: new Map([
        ["uFrequency", new Uniform(uFrequency)],
        ["uAmplitude", new Uniform(uAmplitude)],
        ["offset", new Uniform(0)],
      ]),
      blendFunction,
    })
  }

  update(renderer, inputBuffer, delta) {
    this.uniforms.get("offset").value += delta
  }
}
