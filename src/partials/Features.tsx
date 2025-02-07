import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  return (
    <section
      id="features"
      className="mx-auto px-4 py-20 bg-gradient-to-r from-[#FFF7F4] to-[#F8FAFF]"
    >
      <h2 className="mb-16 text-center text-4xl font-medium md:text-5xl lg:text-6xl">
        Why choose <span className="text-[#F26B3A]">Rooter</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Cost Reduction Card */}
        <Card className="border-2 border-[#ffb4fa] bg-[#FAF5FE]">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <span className="inline-block bg-[#ffb4fa] rounded-lg px-4 py-2 text-xl font-bold">
                  2x Cost
                  <br />
                  Reduction
                </span>
              </div>
              <div className="flex-grow">
                <p className="text-lg text-gray-800">
                  Compared to the average POS system
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#ffcda0] bg-[#FEF9F5]">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <span className="inline-block bg-[#ffcda0] rounded-lg px-4 py-2 text-xl font-bold">
                  Ultra
                  <br />
                  Fast
                </span>
              </div>
              <div className="flex-grow">
                <p className="text-lg text-gray-800">
                  Response time under 2 seconds
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
