import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogCategories from "../components/blog/BlogCategories";
import BlogGrid from "../components/blog/BlogGrid";
import NewsletterSection from "../components/blog/NewsletterSection";
import BlogCTA from "../components/blog/BlogCTA";

function BlogPage() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <BlogHero />

        <FeaturedPost />

        <BlogCategories />

        <BlogGrid />

        <NewsletterSection />

        <BlogCTA />
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;
