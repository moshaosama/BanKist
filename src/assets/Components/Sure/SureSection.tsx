import IntroSection from "../IntroSection/IntroSection";

const SureSection = () => {
  return (
    <>
      <IntroSection
        Header="Not sure yet?"
        Description="Millions of Bankists are already making their lives simpler."
      />
      <div className="flex justify-center mt-10">
        <div className="flex flex-col ">
          <h1 className="text-xl font-bold">
            Finally free from old school banks
          </h1>
          <p className="w-[40pc] text-md">
            Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt
            commodi architecto numquam omnis nulla autem, necessitatibus
            blanditiis modi similique quidem. Odio aliquam culpa dicta beatae
            quod maiores ipsa minus consequatur error sunt, deleniti saepe
            aliquid quos inventore sequi. Necessitatibus id alias reiciendis,
            perferendis facere.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div>
              <img
                src="public\WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
                alt="Profile.png"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Mohamed Osama</h1>
              <p>Egypt, Cairo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SureSection;
