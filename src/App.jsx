import "./App.css";
import "./index.css";
import Omlitte from "./assets/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="container ">
        <div className="img p-[16px]">
          <img src={Omlitte} alt="" className=" rounded-3xl" />
        </div>
        <h1 className="title ">Simple Omelette Reciepe</h1>
        <p className="disc">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="container2">
          <h3 className="title2">Preparation Time</h3>
          <ul className="List list-disc ml-24 mt-6 ">
            <li className="mb-3">
              <span className="text-gray-600 font-semibold">Total: </span>
              <span className="text-gray-600">Approximately 10 minutes</span>
            </li>
            <li className="mb-3">
              <span className="text-gray-600 font-semibold">Preparation:</span>
              <span className="text-gray-600"> 5 minutes</span>
            </li>
            <li>
              <span className="text-gray-600 font-semibold">Cooking:</span>
              <span className="text-gray-600"> 5 minutes</span>
            </li>
          </ul>
        </div>
        <h2 className="title3">Ingredients</h2>
        <ul className="list-disc ml-24 mt-6 List">
          <li className="mb-3"> 2-3 large eggs </li>
          <li className="mb-3"> Salt, to taste</li>
          <li className="mb-3"> Pepper, to taste</li>
          <li className="mb-3"> 1 tablespoon of butter or oil</li>
          <li className="mb-3">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <hr className="mt-12 hor border-gray-300 ml-12 mr-12" />
        <h2 className="title3">Instructions</h2>
        <ul className="list-decimal ml-24 mt-6 mr-24 List">
          <li className="mb-3">
            <span className="text-gray-600">
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </span>
          </li>
          <li className="mb-3">
            <span className="text-gray-600">
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </span>
          </li>
          <li className="mb-3">
            <span className="text-gray-600">
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </span>
          </li>
          <li className="mb-3">
            <span className="text-gray-600">
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </span>
          </li>
          <li className="mb-3">
            <span className="text-gray-600">
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </span>
          </li>
          <li className="mb-3">
            <span className="text-gray-600">
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </span>
          </li>
        </ul>
        <hr className="mt-12 hor border-gray-300 ml-12 mr-12" />
        <h2 className="title3">Nutrition</h2>
        <p className="disc mb-6">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <div className="flex justify-around">
          <h3>Calories:</h3>
          <h4 className="text-pink-950 font-bold">277Kcal</h4>
        </div>
        <hr className="mt-3 mb-3 hor border-gray-300 ml-12 mr-12" />
        <div className="flex justify-around">
          <h3>Carbs:</h3>
          <h4 className="text-pink-950 font-bold">0g</h4>
        </div>
        <hr className="mt-3 mb-3 hor border-gray-300 ml-12 mr-12" />
        <div className="flex justify-around">
          <h3>Protien:</h3>
          <h4 className="text-pink-950 font-bold">20g</h4>
        </div>
        <hr className="mt-3 mb-3 hor border-gray-300 ml-12 mr-12" />
        <div className="flex justify-around">
          <h3>Fat:</h3>
          <h4 className="text-pink-950 font-bold">22g</h4>
        </div>
      </div>
    </>
  );
}

export default App;
