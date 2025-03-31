import PropertySilde from "./propertyslide";
import { Button } from "./ui/button";
import { PropertySearch } from "./ui/ui";

const Property = () => {
  return (
    <div
      id="properties"
      className="max-h-full min-h-screen w-full mt-10 p-5 md:p-16 flex flex-col items-center text-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-foreground">
        Property <span className="text-primary">Showcase</span>
      </h1>

      <div className="w-full flex flex-wrap justify-center items-center mt-5 gap-2">
        <Button className="bg-transparent text-accent-foreground hover:bg-primary hover:text-white">
          Buy
        </Button>
        <Button className="bg-transparent text-accent-foreground hover:bg-primary hover:text-white">
          Rent
        </Button>
        <Button className="bg-transparent text-accent-foreground hover:bg-primary hover:text-white">
          Sell
        </Button>
      </div>

      <div className="w-full max-w-md mt-4">
        <PropertySearch />
      </div>

      <div className="flex flex-col md:flex-row w-full mt-8 gap-6">
        <PropertySilde />
      </div>
    </div>
  );
};

export default Property;
