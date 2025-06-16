"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageModal } from "./components/image-modal"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold py-2">
            <Image
              src="/logo.png"
              alt="Pop Design Build"
              width={50}
              height={12}
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="container py-4 flex flex-col gap-4">
              <Link 
                href="#services" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#portfolio" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="#testimonials" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#about" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/main-living-room.jpeg"
              alt="Elegant living room design"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-4 text-white max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transform Your Space, Elevate Your Life
              </h1>
              <p className="text-lg md:text-xl">
                Specializing in stunning home staging and bespoke remodels that bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                We offer comprehensive interior design services tailored to your unique style and needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/staging-splash.jpg"
                    alt="Home staging showcase"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Home Staging</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional staging to showcase your property's full potential and maximize its market value.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Consultation & Assessment",
                      "Furniture Selection & Placement",
                      "Decor & Accessories",
                      "Final Styling & Photography",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/remodel-splash.jpg"
                    alt="Interior remodeling showcase"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Interior Remodeling</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete transformation of your space with custom designs that reflect your personal style.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Design Concept & Planning",
                      "Material & Finish Selection",
                      "Project Management",
                      "Final Installation & Styling",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Portfolio</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                Explore our recent projects and see how we've transformed spaces for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/gallery/gallery1.jpg"
                },
                {
                  image: "/gallery/gallery2.jpg"
                },   
                
                {
                  image: "/gallery/gallery3.jpg"
                },    
                {
                  image: "/gallery/gallery4.jpg"
                },    
                {
                  image: "/gallery/gallery5.jpg"
                },    
                {
                  image: "/gallery/gallery6.jpg"
                },    
                {
                  image: "/gallery/gallery7.jpg"
                },    
                {
                  image: "/gallery/gallery8.jpg"
                },    
                {
                  image: "/gallery/gallery9.jpg"
                },                    
                {
                  image: "/gallery/gallery10.jpg"
                },    
                {
                  image: "/gallery/gallery11.jpg"
                },    
                {
                  image: "/gallery/gallery12.jpg"
                },    
                {
                  image: "/gallery/gallery13.jpg"
                },    
                {
                  image: "/gallery/gallery14.jpg"
                },    
                {
                  image: "/gallery/gallery15.jpg"
                },    
                {
                  image: "/gallery/gallery16.jpg"
                },    
                {
                  image: "/gallery/gallery17.jpg"
                },    

                {
                  image: "/gallery/gallery18.jpg"
                },   
                {
                  image: "/gallery/gallery19.jpg"
                },   
                {
                  image: "/gallery/gallery20.jpg"
                },   
                {
                  image: "/gallery/gallery21.jpg"
                },   
                {
                  image: "/gallery/gallery22.jpg"
                },   
                {
                  image: "/gallery/gallery23.jpg"
                },   
                {
                  image: "/gallery/gallery24.jpg"
                },   
                {
                  image: "/gallery/gallery25.jpg"
                },   

                {
                  image: "/gallery/gallery26.jpg"
                },   

                {
                  image: "/gallery/gallery27.jpg"
                },   

                {
                  image: "/gallery/gallery28.jpg"
                },   

                {
                  image: "/gallery/gallery29.jpg"
                },   


                {
                  image: "/gallery/gallery30.jpg"
                },   


                {
                  image: "/gallery/gallery31.jpg"
                },   


                {
                  image: "/gallery/gallery32.jpg"
                }  


              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-video">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="secondary"
                        onClick={() => setSelectedImage({ url: project.image, title: "" })}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>




        <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                Hear what our clients have to say about their experience working with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sandra",
                  role: "Homeowner",
                  quote:
                    "Much thanks for the beautiful staging of my dad's Broadview house! You really made the house shine using just the right pieces to bring out the natural beauty and character of the home.",
                },
                {
                  name: "Michael",
                  role: "Real Estate Agent",
                  quote:
                    "I've worked with many staging companies, but Pop Design consistently delivers the best results. Their staging helped me sell properties faster and at higher prices.",
                },
                {
                  name: "Emily",
                  role: "Homeowner",
                  quote:
                    "The kitchen remodel exceeded all our expectations. The team was professional, detail-oriented, and delivered on time and within budget.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-primary/20 mb-4"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                      <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/shannon.jpg"
                  alt="Shannon - Founder of Pop Design Build"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                  About Pop Design Build
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Pop Design Build is a local home staging and interior design company that operates across the greater Seattle area. With over a decade of experience, designer Shannon Copeland has staged thousands of homes and worked on numerous residential design projects. With a strong understanding of contemporary, modern and traditional design Pop Design will work with you to find the design and style that best complements your space.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team of experienced designers brings a wealth of knowledge and creativity to every project. We
                  believe that your space should not only look beautiful but also function perfectly for your lifestyle.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
               For Shannon, client satisfaction and beautiful design are most important.
       
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    { number: "15+", label: "Years of Experience" },
                    { number: "300+", label: "Projects Completed" },
                    { number: "50+", label: "Repeat Clients" },
                    { number: "15+", label: "Remodels" },
                  ].map((stat, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg">
                      <p className="text-3xl font-bold text-primary">{stat.number}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Get In Touch</h2>
                <p className="text-lg mb-8 text-primary-foreground/80">
                  Ready to transform your space? Contact us today for a consultation and let's bring your vision to
                  life.
                </p>
                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-primary-foreground/80">sck@seattleweb.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-primary-foreground/80">(206) 228-7428</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white text-foreground rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Request a Consultation</h3>
                <form className="space-y-4" action="https://usebasin.com/f/ab6841e70d49" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input id="first-name" name="first-name" className="w-full px-3 py-2 border rounded-md" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input id="last-name" name="last-name" className="w-full px-3 py-2 border rounded-md" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email" 
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select id="service" name="service" className="w-full px-3 py-2 border rounded-md">
                      <option value="">Select a service</option>
                      <option value="staging">Home Staging</option>
                      <option value="remodeling">Interior Remodeling</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-3 py-2 border rounded-md min-h-[120px]"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-semibold mb-4">
                <span className="text-xl">Pop Design Build</span>
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Transforming spaces with thoughtful design and exceptional craftsmanship since 2010.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/*<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>*/}
                <Link href="https://www.instagram.com/popdesigns.seattle/" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                {/*<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>*/}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Pop Design Build. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || "/placeholder.jpg"}
        title={selectedImage?.title || ""}
      />
    </div>
  )
}

