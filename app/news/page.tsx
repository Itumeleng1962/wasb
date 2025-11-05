import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const featuredPost = {
    title: "WASB Gas Distributers Expands Service to Three New States",
    excerpt:
      "We're excited to announce our expansion across Gauteng, bringing reliable propane service to communities throughout the province.",
    date: "March 15, 2025",
    category: "Company News",
    image: "/gauteng.png",
    slug: "expansion-announcement-2025",
  }

  const posts = [
    {
      title: "Understanding Propane Pricing: What Affects Your Costs",
      excerpt:
        "Learn about the factors that influence propane prices and how to manage your energy expenses effectively.",
      date: "March 10, 2025",
      category: "Industry Insights",
      image: "/news-propane-pricing.jpg",
      slug: "understanding-propane-pricing",
    },
    {
      title: "5 Ways to Improve Your Home's Energy Efficiency",
      excerpt: "Discover practical tips to reduce propane consumption and lower your energy bills this season.",
      date: "March 5, 2025",
      category: "Tips & Advice",
      image: "/news-energy-efficiency.jpg",
      slug: "improve-energy-efficiency",
    },
    {
      title: "WASB Gas Distributers Receives Safety Excellence Award",
      excerpt: "Recognized by the National Propane Gas Association for outstanding safety record and practices.",
      date: "February 28, 2025",
      category: "Company News",
      image: "/news-safety-award.jpg",
      slug: "safety-excellence-award",
    },
    {
      title: "Propane vs. Electric: A Cost Comparison",
      excerpt: "Compare the costs and benefits of propane versus electric heating for your home or business.",
      date: "February 20, 2025",
      category: "Industry Insights",
      image: "/news-cost-comparison.jpg",
      slug: "propane-vs-electric",
    },
    {
      title: "Winter Preparedness: Ensuring Your Propane Supply",
      excerpt: "Essential steps to prepare your propane system for winter weather and avoid supply interruptions.",
      date: "February 15, 2025",
      category: "Tips & Advice",
      image: "/news-winter-prep.jpg",
      slug: "winter-preparedness",
    },
    {
      title: "New Customer Portal Features Now Available",
      excerpt:
        "Access enhanced account management tools, usage tracking, and payment options through our updated portal.",
      date: "February 10, 2025",
      category: "Company News",
      image: "/news-portal-update.jpg",
      slug: "new-portal-features",
    },
  ]

  const categories = ["All", "Company News", "Industry Insights", "Tips & Advice", "Safety"]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="News & Insights"
        description="Stay informed with the latest updates, industry news, and helpful tips from WASB Gas Distributers."
      />

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl overflow-hidden max-w-5xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-accent">{featuredPost.category}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <Link href={`/news/${featuredPost.slug}`}>
                  <Button className="gradient-accent text-white w-fit">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button key={category} variant="outline" className="bg-transparent">
                {category}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/news/${post.slug}`}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest news, tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="gradient-accent text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
