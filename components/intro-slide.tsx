import MicrobladingSlider from "./microblading-slider"
import MicroshadingSlider from "./microshading-slider"
import HybridSlider from "./hybrid-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive sliders */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="w-full max-w-lg mx-auto">
            <MicrobladingSlider />
          </div>
          <div className="w-full max-w-lg mx-auto">
            <MicroshadingSlider />
          </div>
          <div className="w-full max-w-lg mx-auto">
            <HybridSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Pourquoi le Microblading et le Microshading
            <br />
            <span className="text-slate-900">changent tout</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Regardez ces transformations : de sourcils naturels clairsemés aux sourcils parfaitement définis et
              structurés grâce aux techniques de microblading, microshading et hybride.
            </p>

            <p>
              Ces techniques révolutionnaires permettent de créer des sourcils sur-mesure qui s'adaptent parfaitement à
              votre morphologie. Résultat : un regard restructuré et expressif qui dure 12-18 mois.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Dans ce module, vous allez apprendre à :</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Comprendre les différences entre microblading et microshading</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Découvrir les outils et matériaux de base</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Identifier les types de sourcils et morphologies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Reconnaître les contre-indications importantes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Connaître les règles d'hygiène et de sécurité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
