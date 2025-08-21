import React from "react";
import Image from "next/image";

const ResearchAndDevelopment = () => {
  return (
    <div className="mb-10">
      {/* Banner Section */}
      <div>
        <Image
          src="/assets/aboutNexoImg/banner2.jpeg"
          alt="Research Banner"
          width={1920}
          height={300}
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
          priority
        />
        <h1 className="py-2 px-4 md:px-10 lg:px-20 bg-[#ff9c00] text-xl md:text-2xl font-bold text-white">
          Research & Development
        </h1>
      </div>

      {/* Section Title */}
      <h1 className="text-center py-5 text-xl md:text-2xl font-bold underline">
        Galvanized Carbon Steel Fasteners
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-5 px-4 md:px-10 lg:px-20 py-5">
        {/* Left Content */}
        <div className="lg:w-[75%] text-justify">
          <p className="text-sm md:text-base leading-relaxed">
            To keep check on the quality of products, Nexo has a Quality
            Assurance Cell. This Cell keeps a close watch, right from the
            procurement of raw material till the distribution. To further
            strengthen the control on quality, Nexo has a laboratory, well
            equipped with testing and quality control equipment. Strenuous
            efforts are being made for quality control at every stage of
            manufacturing. Nexo ensured their customers the traceability for
            each and every product manufactured.
            <br />
            <br />
            We at Nexo Industries Ltd owe our achievements to our customers and
            patrons whose success is most important to us. For the satisfaction
            of our worthy customers, we always strive to excel in our
            performances and globalize our products.
            <br />
            <br />
            To achieve our objectives, we are endeavoring to maintain the
            highest standards of quality and improve the efficiency of our
            organization. We are keeping abreast with the latest
            state-of-the-art technologies.
            <br />
            <br />
            Since 1997, our company has been certified with ISO-9002. We took
            another leap towards our goal of TQM when in 2009 we were awarded
            ISO-9001-2008 certification by TUV-CERT, Germany for the high
            quality standards being maintained in the manufacturing of Hot Dip
            Galvanized Carbon Steel Fasteners.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-[25%] flex justify-center">
          <Image
            src="/assets/aboutNexoImg/Galvanized-Carbon-Steel-Fasteners.png"
            alt="Galvanized Carbon Steel Fasteners"
            width={400}
            height={400}
            className="rounded-md w-full h-auto"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div className="px-4 md:px-10 lg:px-20 text-justify text-sm md:text-base leading-relaxed">
        <p>
          After establishing our brand name in the field of industrial fasteners
          worldwide, Nexo has extended into the fabrication and galvanization of
          tower material and has installed state-of-the-art infrastructure and
          testing equipment for top-class services.
        </p>
        <br />
        <p>
          We think that the success of any enterprise, especially in these
          highly competitive times, relies on employing the best minds and most
          qualified hands. These individuals must possess the vision and
          enthusiasm to work professionally and bring that same professionalism
          to the organization they work for. In this respect, Nexo has employed
          the most competent individuals in their respective fields and provided
          environmentally sound facilities to perform perfectly.
        </p>
        <br />
        <p>
          With this spirit and mentality, we look forward to an ever-improving
          future together with the support and patronage of valued customers
          like you.
        </p>
        <br />
        <p className="font-bold">Thanks!</p>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;
