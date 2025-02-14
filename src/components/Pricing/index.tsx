"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="No-Nonsense Pricing"
          paragraph="Choose what works for you. No hidden fees, just straight-up options that give you the value you're looking for."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Monthly"
            price="29"
            duration="month"
            subtitle="Get started with the basics. Access all courses, projects, and more—just pay as you go."
            url="https://whop.com/checkout/plan_EZRZTgBP9FYsG?d2c=true"
          >
            <OfferList text="All the courses" status="active" />
            <OfferList text="Ask me anything directly" status="active" />
            <OfferList text="Be part of the community" status="active" />
            <OfferList text="Regular updates on everything" status="active" />
            <OfferList
              text="+300 Lessons (with quizzes and cheatsheets)"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Yearly"
            price="225"
            duration="year"
            subtitle="Commit for the long run and get a discount. Same access as monthly, but cheaper over time."
            url="https://whop.com/c/cyberflow/website-year"
          >
            <OfferList
              text="Everything from the monthly plan"
              status="active"
            />
            <OfferList
              text="It's cheaper if you commit for the year—trust me, it's worth it long-term!"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Lifetime"
            price="399"
            duration="once"
            subtitle="Go all in for lifetime access to everything. No more payments, just pure learning."
            url="https://whop.com/c/cyberflow/pay-once"
          >
            <OfferList
              text="Pay once, and you’re done! Lifetime access to all courses, no more payments."
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
