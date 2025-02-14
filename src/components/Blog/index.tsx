import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <></>
    // <section
    //   id="blog"
    //   className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    // >
    //   <div className="container">
    //     <SectionTitle
    //       title="Our Latest Blogs"
    //       paragraph="Cyberflow's Academy isn’t just about courses—it’s a private community where you get direct guidance from an experienced hacker. Whether you're stuck on a challenge or need advice, we're here to help."
    //       center
    //     />

    //     <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
    //       {blogData.map((blog) => (
    //         <div key={blog.id} className="w-full">
    //           <SingleBlog blog={blog} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Blog;
