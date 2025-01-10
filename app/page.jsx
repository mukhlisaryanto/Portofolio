// import Hero from "@/components/preview/Hero";
// import Buy from "@/components/preview/Buy";
// import CopyRight from "@/components/preview/CopyRight";
// import Demo from "@/components/preview/Demo";
// import Features from "@/components/preview/Features";
//
// import "../public/assets/css/style.css";
//
// export const metadata = {
//   title: "Preview || Bostami - Professional portfolio NextJS Template",
//   description:
//     "Discover Botami,the most impressive portfolio template for work showcase, blog",
// };
import Home1 from "@/app/(homes)/home-1/page";
import { Analytics } from '@vercel/analytics/next';
export default function page() {
  return (
    <>
        <Home1/>
        <Analytics />
        { /*<Hero/>
            <Demo />
            <Features />
            <Buy />
            <CopyRight /> */}
    </>
  );
}
