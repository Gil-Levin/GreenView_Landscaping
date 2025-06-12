import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="blog-title">Transforming Outdoor Spaces in Calgary – The Green View Way</h1>

        <p className="blog-intro">
          At Green View Landscaping, we believe your yard should be more than just a patch of grass — it should be a place that brings you joy, comfort, and pride. Whether you're looking to create a beautiful backyard oasis or simply want a clean, well-maintained lawn, we're here to bring your vision to life.
        </p>

        <h2 className = "blog-otherTitles">Why Calgary Homeowners Choose Us</h2>
        <p>
          Landscaping in Calgary comes with its own set of challenges — unpredictable weather, clay-heavy soil, and short summers. Our team understands these local conditions inside and out. We specialize in custom landscaping solutions designed to last, whether that means installing durable sod, building solid patios, or creating practical gravel pathways that handle Alberta’s climate with ease.
        </p>

        <h2 className = "blog-otherTitles">Our Services, Your Peace of Mind</h2>
        <ul className="blog-list">
          <li>Sod installation and lawn care</li>
          <li>Fence and deck construction</li>
          <li>Patios and walkways</li>
          <li>Gravel replacement</li>
          <li>Garden bed design</li>
          <li>Ongoing maintenance and clean-ups</li>
        </ul>
        <p>
          Every project starts with listening. We want to understand what matters most to you — whether it’s a safe play area for your kids, a low-maintenance space, or a stunning yard that stands out on the block.
        </p>

        <h2 className = "blog-otherTitles">Local. Reliable. Professional.</h2>
        <p>
          We’re a Calgary-based, family-run company with a simple promise: we show up, we care, and we do the job right. Our team is friendly, efficient, and fully focused on your satisfaction.
        </p>
        <p>
          From small backyard makeovers to full property transformations, we take pride in creating spaces that reflect your lifestyle — and boost your home’s value along the way.
        </p>

        <h2 className = "blog-otherTitles">Ready to Refresh Your Outdoor Space?</h2>
        <p>
          Let’s chat! Call us at <a href="tel:14038997585">(403)-899-7585</a> or email us at <a href="mailto:greenviewcalgary@gmail.com">greenviewcalgary@gmail.com</a> to schedule a free estimate.
        </p>
        <p>
          You can also check out our recent projects and reviews to see the Green View difference in action.
        </p>
      </div>
    </div>
  );
};

export default Blog;