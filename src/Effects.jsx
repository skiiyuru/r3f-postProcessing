import {
  Bloom,
  EffectComposer,
  Glitch,
  Noise,
  Vignette,
} from "@react-three/postprocessing"
import { BlendFunction, GlitchMode } from "postprocessing"

export default function Effects() {
  return (
    <EffectComposer>
      {/* <Vignette
        offset={0.3}
        darkness={0.9}
        blendFunction={BlendFunction.NORMAL}
      /> */}
      {/* <Glitch
        // delay={[0.5, 1]}
        // duration={[0.1, 0.3]}
        // strength={[0.2, 0.4]}
        mode={GlitchMode.SPORADIC}
      /> */}
      {/* <Noise blendFunction={BlendFunction.SOFT_LIGHT} premultiply /> */}
      <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />
    </EffectComposer>
  )
}
